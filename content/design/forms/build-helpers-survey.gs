/**
 * OIC Helpers Directory — survey builder.
 *
 * Builds the opt-in member skills/resources survey described in
 * content/design/resource-tagging.md (Wave 2). Responses can flow into the
 * tracker workbook for deacons to review and copy (after the opt-in gate)
 * into the Helpers Directory tab.
 *
 * HOW TO USE (in the church account):
 *   1. Go to https://script.google.com (signed in as the church account).
 *   2. New project → delete the sample code → paste this whole file.
 *   3. (Optional) Set TRACKER_ID below to your tracker's spreadsheet ID so
 *      responses land in that workbook. Leave '' to let the form make its own
 *      response sheet.
 *   4. Run ▶ buildHelpersSurvey (approve the prompt).
 *   5. The log prints the live form URL (to share) and the edit URL.
 *
 * Keep it short and voluntary — an invitation to serve, not a census.
 */

var TRACKER_ID = '';  // e.g. '1x3RahWgYrSIivwzJKjNNBUqTa6Ft1tfuR9OuDXdjcKU'  (optional)

function buildHelpersSurvey() {
  var form = FormApp.create('OIC — How Can You Help? (Helpers Directory)');
  form.setDescription(
    'Our deacons care for the practical needs of our church family (Acts 6). '
    + 'If you are willing to be on a list we can call when a specific need arises, '
    + 'please share what you are able to offer. This is completely voluntary, and '
    + 'we will only contact you for things you have said yes to. Takes about 5 minutes.'
  );
  form.setCollectEmail(true);
  form.setProgressBar(true);

  form.addTextItem().setTitle('Full name').setRequired(true);
  form.addTextItem().setTitle('Preferred name');
  form.addTextItem().setTitle('Best phone number').setRequired(true);

  form.addParagraphTextItem().setTitle('Your occupation or main work / training')
    .setHelpText('Optional — helps us know who to ask for professional-type help.');

  form.addCheckboxItem().setTitle('Professional areas (check any that apply)')
    .setChoiceValues(['Medical / Nursing','Legal','Financial / Accounting','Education / Tutoring',
      'Trades (plumbing, electrical, HVAC, carpentry)','IT / Technology','Social work',
      'Counseling','None of these']);

  form.addTextItem().setTitle('Certifications or licenses')
    .setHelpText('Optional — e.g. RN, CPA, attorney, CDL, licensed electrician.');

  form.addCheckboxItem().setTitle('Practical skills you could offer')
    .setChoiceValues(['Home repair / handyman','Moving / heavy lifting','Yard work',
      'Cooking / meals','Childcare','Elder care','Tutoring / ESL','Tech / device help',
      'Driving / rides','Event setup','Other']);

  form.addTextItem().setTitle('Languages you speak (besides English)');

  form.addCheckboxItem().setTitle('Resources you would be willing to share or loan')
    .setChoiceValues(['Pickup truck','Van (7+ seats)','Standard car for rides',
      'Tools / equipment','Spare room (short-term)','Storage space','None']);

  form.addCheckboxItem().setTitle('What are you willing to be contacted to help with?')
    .setHelpText('We will only call you for what you check here.')
    .setChoiceValues(['Rides / transportation','Meals / food','Home repairs','Moving help',
      'Financial guidance','Caregiving (elder / child / disability)','Hosting / short-term housing',
      'Professional advice','Prayer / encouragement / a visit','Other']);

  form.addCheckboxItem().setTitle('General availability')
    .setChoiceValues(['Weekday mornings','Weekday afternoons','Weekday evenings',
      'Weekend mornings','Weekend afternoons','Flexible']);

  form.addMultipleChoiceItem().setTitle('How quickly can you usually respond?')
    .setChoiceValues(['Same day','Within a day','Within a few days']);

  form.addMultipleChoiceItem().setTitle('How often are you able to help?')
    .setChoiceValues(['Occasionally (a few times a year)','Regularly (about monthly)','As needed']);

  form.addParagraphTextItem().setTitle('Anything we should know about limits or preferences')
    .setHelpText('Optional — e.g. "one ride per week", "not available June–August".');

  form.addMultipleChoiceItem()
    .setTitle('May we include you in the deacons\' internal Helpers Directory and contact you '
      + 'when a matching need arises?')
    .setChoiceValues(['Yes','No'])
    .setRequired(true);

  if (TRACKER_ID) {
    form.setDestination(FormApp.DestinationType.SPREADSHEET, TRACKER_ID);
    Logger.log('Responses will appear as a new tab in the tracker workbook.');
  }

  Logger.log('Share this with members:\n' + form.getPublishedUrl());
  Logger.log('\nEdit the form here:\n' + form.getEditUrl());
  return form.getPublishedUrl();
}
