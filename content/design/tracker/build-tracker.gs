/**
 * OIC Deacon Response Tracker — one-click builder.
 *
 * HOW TO USE (in your church account, e.g. long.cheng@oic-church.com):
 *   1. Go to https://script.google.com  (signed in as the church account).
 *   2. New project → delete the sample code → paste this whole file.
 *   3. Run ▶ buildTracker  (approve the one-time permission prompt).
 *   4. The Execution log prints the URL of the new spreadsheet. Open it.
 *
 * This builds the workbook exactly per content/design/tracker-spec.md:
 * 4 tabs, headers, dropdowns, a sample row, the Reference panel, and the
 * crack-detection conditional formatting (red = overdue, amber = stale,
 * gray = closed). Safe to re-run — it always creates a NEW file.
 */

function buildTracker() {
  var ss = SpreadsheetApp.create('OIC Deacon Response Tracker');

  buildRequests_(ss);
  buildHelpers_(ss);
  buildRoster_(ss);
  buildReference_(ss);

  // Remove the default "Sheet1" that create() adds.
  var def = ss.getSheetByName('Sheet1');
  if (def) ss.deleteSheet(def);

  ss.setActiveSheet(ss.getSheetByName('Requests'));
  Logger.log('DONE. Open your tracker here:\n' + ss.getUrl());
  return ss.getUrl();
}

/* ----------------------------- Tab 1: Requests ---------------------------- */
function buildRequests_(ss) {
  var sh = ss.insertSheet('Requests', 0);
  var headers = [
    'Request ID','Date Received','Source','Requester Name','Requester Contact',
    'Need Summary','Function(s)','Sub-lane','Urgency','Duty Deacon','Owner',
    'Owner Contact','Status','Next Action','Next Action Due','Last Updated',
    'Update Notes','Resolution','Closed Date','Reopen Root Cause',
    'Elder / External Referral','Flags / Notes'
  ];
  sh.getRange(1, 1, 1, headers.length).setValues([headers]);
  styleHeader_(sh, headers.length);
  sh.setFrozenRows(1);
  sh.setFrozenColumns(1);

  // Sample row so the format is obvious; deacons overwrite/delete it.
  var sample = [
    '2026-001', new Date(), 'Elder', 'Jane Member', '555-0100',
    'Needs a ride to a Tuesday medical appointment and back.', 'Operations',
    'Drivers', 'Urgent', 'On-duty deacon', 'Helper Name', '555-0101',
    'Assigned', 'Confirm pickup time with member', new Date(), new Date(),
    '', '', '', '', '', 'Sample row — delete once real requests begin.'
  ];
  sh.getRange(2, 1, 1, sample.length).setValues([sample]);

  // Dropdowns (apply to rows 2:1000).
  dropdown_(sh, 'C', ['Self','Elder','Shepherd','Cell leader','Other']);
  dropdown_(sh, 'G', ['Administration','Operations','Communication','Finance'], true);
  dropdown_(sh, 'H', ['Welcome','Kitchen','Coffee','IT','PEP','Security','Drivers',
                      'Records','Scheduling','Correspondence','Benevolence',
                      'Announcements','Internal coordination'], true);
  dropdown_(sh, 'I', ['Emergency','Urgent','Routine']);
  dropdown_(sh, 'M', ['New','Acknowledged','Assigned','In Progress','Awaiting Member',
                      'Awaiting Elder','On Hold','Resolved','Closed','Redirected','Reopened']);

  addCrackFormatting_(sh);
  autosize_(sh, headers.length);
}

/* ------------------------- Tab 2: Helpers Directory ----------------------- */
function buildHelpers_(ss) {
  var sh = ss.insertSheet('Helpers Directory', 1);
  var headers = [
    'Member Name','Preferred Name','Phone','Email','Fellowship Group',
    'Ministry / Department','Occupation / Job Title','Professional Domain',
    'Certifications / Licenses','Skill Tags','Languages','Vehicle Type',
    'Other Resources','Willingness Flags','General Availability',
    'Seasonal Constraints','Response Window','Frequency Willing to Help',
    'Capacity Notes','Opt-in Confirmed','Consent Date','Consent Method','Current Status'
  ];
  sh.getRange(1, 1, 1, headers.length).setValues([headers]);
  styleHeader_(sh, headers.length);
  sh.setFrozenRows(1);

  // Dropdowns for the controlled columns.
  dropdown_(sh, 'Q', ['Same day','Within 24 h','Within a few days']);          // Response Window
  dropdown_(sh, 'R', ['Occasionally','Regularly','As needed']);                 // Frequency
  dropdown_(sh, 'T', ['Yes','No']);                                             // Opt-in Confirmed
  dropdown_(sh, 'V', ['Survey','Direct request','Ministry leader referral']);   // Consent Method
  dropdown_(sh, 'W', ['Active','Temporarily unavailable','Retired from directory']); // Current Status

  // Privacy banner note on the header.
  sh.getRange('A1').setNote('DEACONS ONLY. Never share this tab with the congregation. '
    + 'Only rows with Opt-in Confirmed = Yes may be used for routing.');
  autosize_(sh, headers.length);
}

/* --------------------------- Tab 3: Duty Roster --------------------------- */
function buildRoster_(ss) {
  var sh = ss.insertSheet('Duty Roster', 2);
  var headers = ['Week Of','Duty Deacon','Backup','Duty Deacon Contact','Backup Contact','Notes'];
  sh.getRange(1, 1, 1, headers.length).setValues([headers]);
  styleHeader_(sh, headers.length);
  sh.setFrozenRows(1);
  autosize_(sh, headers.length);
}

/* ---------------------------- Tab 4: Reference ---------------------------- */
function buildReference_(ss) {
  var sh = ss.insertSheet('Reference', 3);
  var rows = [
    ['OIC DEACON RESPONSE TRACKER — REFERENCE',''],
    ['',''],
    ['URGENCY TIERS','Acknowledge / First action / In-progress stall'],
    ['Emergency','Same day / Same day / no update > 2 days'],
    ['Urgent','Within 24h / 2-3 days / no update > 5 days'],
    ['Routine','2-3 days / 1-2 weeks / no update > 14 days'],
    ['',''],
    ['FUNCTION MAP','Sub-lanes'],
    ['Administration','Records, Scheduling, Correspondence'],
    ['Operations','Welcome, Kitchen, Coffee, IT, Security, Drivers'],
    ['Communication','PEP, Announcements, Internal coordination'],
    ['Finance','Benevolence, Budget expenditure'],
    ['',''],
    ['ESCALATE TO AN ELDER ONLY WHEN',''],
    ['1. Spiritual in nature (soul care, grief counseling, prayer that is pastoral)',''],
    ['2. Requires spiritual authority (discipline, restoration, membership status)',''],
    ['3. Benevolence that would materially reduce the fund',''],
    ['4. Building spend over $12,500 (requires elder concurrence)',''],
    ['Split mixed requests: deacons keep the tangible parts; only the spiritual part goes to a named elder.',''],
    ['',''],
    ['STATUS VALUES',''],
    ['New','Logged; member not yet acknowledged'],
    ['Acknowledged','Member contacted; receipt confirmed'],
    ['Assigned','Named owner accepted person-to-person handoff'],
    ['In Progress','Owner actively working the need'],
    ['Awaiting Member','Waiting on info/response from member'],
    ['Awaiting Elder','Spiritual part handed off; tangible side held/monitored'],
    ['On Hold','Paused by external block; needs a resume date in Next Action Due'],
    ['Resolved','Member confirmed need met; not yet formally closed'],
    ['Closed','Outcome logged; complete (final)'],
    ['Redirected','Fully handed to elder/external; no deacon action remains'],
    ['Reopened','Re-activated after a stall; Reopen Root Cause required'],
    ['',''],
    ['COLOR KEY (Requests tab)',''],
    ['Red','Overdue — past acknowledge/first-action deadline (or On Hold past resume date)'],
    ['Amber','Stale — no update within the tier window (or Resolved-not-Closed > 7 days)'],
    ['Gray','Closed or Redirected — excluded from active monitoring'],
    ['',''],
    ['LINKS',''],
    ['Member-facing site','https://trustlong.github.io/oic-deacon-system/'],
    ['Repo / internal design notes','https://github.com/trustlong/oic-deacon-system'],
    ['Internal SOP','content/design/deacon-playbook.md (in the Obsidian vault)']
  ];
  sh.getRange(1, 1, rows.length, 2).setValues(rows);
  sh.getRange('A1').setFontWeight('bold').setFontSize(13);
  ['A3','A8','A14','A21','A35','A40'].forEach(function(a){
    sh.getRange(a).setFontWeight('bold');
  });
  sh.setColumnWidth(1, 320);
  sh.setColumnWidth(2, 520);
  sh.setFrozenRows(1);
}

/* ------------------------------- helpers ---------------------------------- */
function styleHeader_(sh, n) {
  sh.getRange(1, 1, 1, n)
    .setFontWeight('bold').setBackground('#284b63').setFontColor('#ffffff')
    .setWrap(true).setVerticalAlignment('middle');
  sh.setRowHeight(1, 38);
}

function dropdown_(sh, col, values, allowInvalid) {
  var rule = SpreadsheetApp.newDataValidation()
    .requireValueInList(values, true)
    .setAllowInvalid(allowInvalid === true)
    .build();
  sh.getRange(col + '2:' + col + '1000').setDataValidation(rule);
}

function autosize_(sh, n) {
  for (var c = 1; c <= n; c++) sh.autoResizeColumn(c);
}

/**
 * Crack-detection conditional formatting on the Requests tab.
 * Order matters: gray (closed) first wins, then red (overdue), then amber (stale).
 * All rules guard on $A2<>"" so empty rows are never flagged.
 */
function addCrackFormatting_(sh) {
  var range = sh.getRange('A2:V1000');
  var RED = '#f4c7c3', AMBER = '#fce8b2', GRAY = '#d9d9d9';
  var rules = [];

  function rule(formula, color) {
    rules.push(SpreadsheetApp.newConditionalFormatRule()
      .whenFormulaSatisfied('=' + formula)
      .setBackground(color)
      .setRanges([range]).build());
  }

  // 1) Gray: closed/redirected (must be first so it wins).
  rule('AND($A2<>"",OR($M2="Closed",$M2="Redirected"))', GRAY);

  // 2) Red: overdue acknowledge / first action, by tier; plus On Hold past resume date.
  rule('AND($A2<>"",$I2="Emergency",$M2="New",$B2<TODAY())', RED);
  rule('AND($A2<>"",$I2="Emergency",$M2="Acknowledged",$B2<TODAY())', RED);
  rule('AND($A2<>"",$I2="Urgent",$M2="New",$B2<TODAY()-1)', RED);
  rule('AND($A2<>"",$I2="Urgent",$M2="Acknowledged",$B2<TODAY()-3)', RED);
  rule('AND($A2<>"",$I2="Routine",$M2="New",$B2<TODAY()-3)', RED);
  rule('AND($A2<>"",$I2="Routine",$M2="Acknowledged",$B2<TODAY()-14)', RED);
  rule('AND($A2<>"",$M2="On Hold",$O2<>"",$O2<TODAY())', RED);

  // 3) Amber: in-progress stale by tier; resolved-not-closed; on-hold without resume date.
  rule('AND($A2<>"",$I2="Emergency",OR($M2="In Progress",$M2="Assigned"),$P2<TODAY()-2)', AMBER);
  rule('AND($A2<>"",$I2="Urgent",OR($M2="In Progress",$M2="Assigned"),$P2<TODAY()-5)', AMBER);
  rule('AND($A2<>"",$I2="Routine",OR($M2="In Progress",$M2="Assigned"),$P2<TODAY()-14)', AMBER);
  rule('AND($A2<>"",$M2="Resolved",$S2="",$P2<TODAY()-7)', AMBER);
  rule('AND($A2<>"",$M2="On Hold",$O2="")', AMBER);

  sh.setConditionalFormatRules(rules);
}
