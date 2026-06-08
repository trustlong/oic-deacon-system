/**
 * OIC Deacon Response — Intake Front Door (Phase 3 MVP).
 *
 * A bound Apps Script web app on the tracker. Serves a public request form,
 * writes each submission into the 'Requests' tab as a New request, looks up
 * the week's duty deacon from 'Duty Roster', and emails the deacons a heads-up.
 * The duty deacon still does triage (function, urgency, owner) in the sheet.
 *
 * DEPLOY (in the church account that owns the tracker):
 *   1. Open the tracker → Extensions → Apps Script.
 *   2. Add two files: this Code.gs, and an HTML file named exactly "Index"
 *      (paste Index.html into it).
 *   3. Set CONFIG below (notify addresses + emergency phone).
 *   4. Deploy → New deployment → type "Web app".
 *        Execute as: Me.   Who has access: Anyone.
 *   5. Copy the Web app URL — that's the link members use. Put it on the
 *      "Need Help?" page and share it.
 *   To change the form later, edit and Deploy → Manage deployments → Edit → new version.
 */

var CONFIG = {
  // Who gets the "new request" email. Use a deacons group or the duty deacons/chair.
  NOTIFY_EMAILS: ['long.cheng@oic-church.com'],
  // Shown to members for things that can't wait. Set to a real number or remove.
  EMERGENCY_PHONE: '',
  CHURCH_NAME: 'One In Christ Church'
};

var SHEET = { requests: 'Requests', roster: 'Duty Roster' };

function doGet() {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('OIC — Request Help')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.DEFAULT);
}

// Expose a couple of config values to the page (emergency phone, church name).
function getClientConfig() {
  return { emergencyPhone: CONFIG.EMERGENCY_PHONE, churchName: CONFIG.CHURCH_NAME };
}

/**
 * Called from the page via google.script.run. Returns {ok:true, id} or {ok:false, error}.
 */
function processIntake(form) {
  try {
    // Honeypot: real users never fill this hidden field.
    if (form && form.website) return { ok: true, id: 'ok' };

    var need = (form.need || '').trim();
    var name = (form.name || '').trim();
    var contact = (form.contact || '').trim();
    if (!need || !name || !contact) {
      return { ok: false, error: 'Please give your name, a contact, and a short description.' };
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sh = ss.getSheetByName(SHEET.requests);
    if (!sh) return { ok: false, error: 'Tracker not found. Please contact a deacon directly.' };

    var forSelf = (form.forWhom !== 'someone-else');
    var beneficiary = forSelf ? name : (form.beneficiaryName || '').trim() || name;
    var source = relaySource_(form.relayRole, forSelf);
    var urgency = mapUrgency_(form.howSoon);

    var duty = currentDutyDeacon_(ss);
    var now = new Date();
    var id = nextRequestId_(sh, now);

    // Extra context the member gave, kept out of the core summary.
    var notes = [];
    if (form.bestTime) notes.push('Best time to reach: ' + form.bestTime);
    if (form.tried) notes.push('Already tried: ' + form.tried);
    if (!forSelf) notes.push('Relayed by ' + name + ' (' + contact + ')'
        + (form.relayRole ? ' — ' + form.relayRole : ''));
    notes.push('Member said urgency: ' + (form.howSoon || 'n/a') + ' (confirm tier at triage)');
    var notesStr = stamp_(now) + ' Intake via web form. ' + notes.join('. ') + '.';

    // Build the 22-column row to match the Requests schema exactly.
    var row = new Array(22).fill('');
    row[0]  = id;                          // Request ID
    row[1]  = now;                         // Date Received
    row[2]  = source;                      // Source
    row[3]  = beneficiary;                 // Requester Name (person with the need)
    row[4]  = forSelf ? contact : ((form.beneficiaryContact || '').trim() || contact);
    row[5]  = need;                        // Need Summary
    row[8]  = urgency;                     // Urgency (tentative)
    row[9]  = duty.name;                   // Duty Deacon
    row[12] = 'New';                       // Status
    row[15] = now;                         // Last Updated
    row[16] = notesStr;                    // Update Notes
    sh.appendRow(row);

    notifyDeacons_(ss, id, beneficiary, row[4], need, urgency, source, duty, notesStr);
    return { ok: true, id: id };
  } catch (err) {
    return { ok: false, error: 'Something went wrong. Please contact a deacon directly. ('
        + err + ')' };
  }
}

/* ------------------------------- helpers ---------------------------------- */

function relaySource_(role, forSelf) {
  if (forSelf) return 'Self';
  role = (role || '').toLowerCase();
  if (role.indexOf('elder') > -1) return 'Elder';
  if (role.indexOf('shepherd') > -1) return 'Shepherd';
  if (role.indexOf('cell') > -1 || role.indexOf('group') > -1) return 'Cell leader';
  return 'Other';
}

function mapUrgency_(howSoon) {
  switch (howSoon) {
    case 'emergency': return 'Emergency';
    case 'week': return 'Urgent';
    default: return 'Routine';
  }
}

function nextRequestId_(sh, now) {
  var year = now.getFullYear();
  var prefix = year + '-';
  var ids = sh.getRange(2, 1, Math.max(sh.getLastRow() - 1, 1), 1).getValues();
  var max = 0;
  ids.forEach(function (r) {
    var v = String(r[0] || '');
    if (v.indexOf(prefix) === 0) {
      var n = parseInt(v.slice(prefix.length), 10);
      if (!isNaN(n) && n > max) max = n;
    }
  });
  return prefix + ('00' + (max + 1)).slice(-3);
}

// This week's duty deacon = the roster row with the latest Week Of on/before today.
function currentDutyDeacon_(ss) {
  var sh = ss.getSheetByName(SHEET.roster);
  var fallback = { name: '(unassigned — see roster)', contact: '', backup: '', backupContact: '' };
  if (!sh || sh.getLastRow() < 2) return fallback;
  var rows = sh.getRange(2, 1, sh.getLastRow() - 1, 6).getValues();
  var today = new Date(); today.setHours(0, 0, 0, 0);
  var best = null;
  rows.forEach(function (r) {
    var wk = r[0];
    if (wk instanceof Date && wk <= today) {
      if (!best || wk > best[0]) best = r;
    }
  });
  if (!best) return fallback;
  return { name: best[1] || fallback.name, backup: best[2] || '',
           contact: best[3] || '', backupContact: best[4] || '' };
}

function notifyDeacons_(ss, id, who, contact, need, urgency, source, duty, notesStr) {
  var recipients = CONFIG.NOTIFY_EMAILS.slice();
  // If the roster stores an email in the contact column, notify that person too.
  if (duty.contact && duty.contact.indexOf('@') > -1) recipients.push(duty.contact);
  recipients = recipients.filter(function (e, i, a) { return e && a.indexOf(e) === i; });
  if (!recipients.length) return;

  var subject = '[OIC Deacons] New request ' + id + ' (' + urgency + ') — ' + who;
  var body =
    'A new help request came in through the intake form.\n\n' +
    'Request ID: ' + id + '\n' +
    'For: ' + who + '   Contact: ' + contact + '\n' +
    'Source: ' + source + '\n' +
    'Member-stated urgency: ' + urgency + ' (confirm the tier at triage)\n\n' +
    'Need:\n' + need + '\n\n' +
    'On duty this week: ' + duty.name +
      (duty.backup ? '   (backup: ' + duty.backup + ')' : '') + '\n' +
    'Duty deacon: please acknowledge the member, complete intake, and hand off to one named owner.\n\n' +
    'Notes: ' + notesStr + '\n\n' +
    'Open the tracker: ' + ss.getUrl() + '\n';
  MailApp.sendEmail(recipients.join(','), subject, body);
}

function stamp_(d) {
  return Utilities.formatDate(d, Session.getScriptTimeZone(), 'yyyy-MM-dd');
}
