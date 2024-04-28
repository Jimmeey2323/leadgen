//https://www.bpwebs.com/pull-data-from-google-sheets-to-html-table/

function doGet() {
  return HtmlService.createTemplateFromFile('index').evaluate();
}
 
//GET DATA FROM GOOGLE SHEET AND RETURN AS AN ARRAY
function getData(){
  var spreadSheetId = "1VTBuoCf3mx6-zUf7oj6rGJK34dBLLuLYh4mRLC3Wvsk"; //CHANGE
  var dataRange     = "Leads!A2:W"; //CHANGE
 
  var range   = Sheets.Spreadsheets.Values.get(spreadSheetId,dataRange);
  var values  = range.values;
 Logger.log(values)
  return values;
}
 
//INCLUDE JAVASCRIPT AND CSS FILES
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}
