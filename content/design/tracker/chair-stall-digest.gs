/**
 * OIC Deacon Response Tracker — daily stall digest to the Deacon Chair.
 *
 * Emails the Chair a list of OVERDUE (red) and STALE (amber) requests each
 * morning, so the Chair doesn't have to open the sheet to catch stalls.
 * Implements the same thresholds as the conditional formatting in
 * content/design/tracker-spec.md.
 *
 * HOW TO USE (in the church account that owns the tracker):
 *   1. Open the OIC Deacon Response Tracker spreadsheet.
 *   2. Extensions → Apps Script. Delete the sample code, paste this file.
 *   3. Set CHAIR_EMAIL below to the Chair's address.
 *   4. Run ▶ installDailyDigest once (approve the permission prompt).
 *      This creates a trigger that runs sendStallDigest every morning ~7am.
 *   5. (Optional) Run ▶ sendStallDigest once to test — you'll get an email now.
 *
 * To change the recipient later: edit CHAIR_EMAIL and run installDailyDigest again.
 */

var CHAIR_EMAIL = 'long.cheng@oic-church.com';   // <-- set to the Deacon Chair
var SEND_WHEN_ALL_CLEAR = false;                 // true = email even when nothing is overdue

// Column indexes (1-based) in the Requests tab.
var COL = { id:1, dateReceived:2, requester:4, urgency:9, owner:11, status:13,
            nextAction:14, nextActionDue:15, lastUpdated:16 };

function installDailyDigest() {
  // Remove any existing triggers for this function to avoid duplicates.
  ScriptApp.getProjectTriggers().forEach(function(t) {
    if (t.getHandlerFunction() === 'sendStallDigest') ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger('sendStallDigest').timeBased().everyDays(1).atHour(7).create();
  Logger.log('Installed. The Chair will get a digest each morning (~7am).');
}

function sendStallDigest() {
  var sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Requests');
  if (!sh) { Logger.log('No "Requests" tab found.'); return; }

  var lastRow = sh.getLastRow();
  if (lastRow < 2) return;
  var data = sh.getRange(2, 1, lastRow - 1, COL.lastUpdated).getValues();

  var red = [], amber = [];
  data.forEach(function(r) {
    var id = r[COL.id - 1];
    if (!id) return;                                   // skip blank rows
    var status = String(r[COL.status - 1]).trim();
    if (status === 'Closed' || status === 'Redirected') return;

    var urg = String(r[COL.urgency - 1]).trim();
    var received = daysAgo_(r[COL.dateReceived - 1]);
    var updated  = daysAgo_(r[COL.lastUpdated - 1]);
    var dueIn    = daysUntil_(r[COL.nextActionDue - 1]);
    var hasDue   = r[COL.nextActionDue - 1] !== '' && r[COL.nextActionDue - 1] != null;

    var isRed =
      (urg === 'Emergency' && (status === 'New' || status === 'Acknowledged') && received >= 1) ||
      (urg === 'Urgent'    &&  status === 'New'          && received >= 2) ||
      (urg === 'Urgent'    &&  status === 'Acknowledged' && received >= 4) ||
      (urg === 'Routine'   &&  status === 'New'          && received >= 4) ||
      (urg === 'Routine'   &&  status === 'Acknowledged' && received >= 15) ||
      (status === 'On Hold' && hasDue && dueIn < 0);

    var isAmber = !isRed && (
      (urg === 'Emergency' && isWorking_(status) && updated >= 3) ||
      (urg === 'Urgent'    && isWorking_(status) && updated >= 6) ||
      (urg === 'Routine'   && isWorking_(status) && updated >= 15) ||
      (status === 'Resolved' && updated >= 8) ||
      (status === 'On Hold' && !hasDue)
    );

    if (isRed)   red.push(rowLine_(r, updated));
    else if (isAmber) amber.push(rowLine_(r, updated));
  });

  if (!red.length && !amber.length && !SEND_WHEN_ALL_CLEAR) return;

  var today = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'EEE, MMM d');
  var body = 'OIC Deacon Response — open-request digest for ' + today + '\n\n';
  body += red.length
    ? 'OVERDUE (act today) — ' + red.length + ':\n' + red.join('\n') + '\n\n'
    : 'OVERDUE: none.\n\n';
  body += amber.length
    ? 'SLIPPING (check soon) — ' + amber.length + ':\n' + amber.join('\n') + '\n\n'
    : 'SLIPPING: none.\n\n';
  body += 'Open the tracker: ' + SpreadsheetApp.getActiveSpreadsheet().getUrl() + '\n';
  body += '\nFor stalled requests: redirect to an elder, or reassign to a resourceful '
        + 'member directly (see the deacon playbook).';

  MailApp.sendEmail(CHAIR_EMAIL,
    '[OIC Deacons] ' + red.length + ' overdue, ' + amber.length + ' slipping', body);
  Logger.log('Digest sent to ' + CHAIR_EMAIL);
}

/* helpers */
function isWorking_(status){ return status === 'In Progress' || status === 'Assigned'; }

function rowLine_(r, updated) {
  return '  • ' + r[COL.id-1] + '  [' + r[COL.urgency-1] + '/' + r[COL.status-1] + ']  '
    + r[COL.requester-1] + '  — owner: ' + (r[COL.owner-1] || 'UNASSIGNED')
    + '  (no update ' + updated + 'd)'
    + (r[COL.nextAction-1] ? '  — next: ' + r[COL.nextAction-1] : '');
}

function midnight_(d){ return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }

function daysAgo_(v){
  if (!(v instanceof Date)) return 0;
  return Math.round((midnight_(new Date()) - midnight_(v)) / 86400000);
}
function daysUntil_(v){
  if (!(v instanceof Date)) return 9999;
  return Math.round((midnight_(v) - midnight_(new Date())) / 86400000);
}
