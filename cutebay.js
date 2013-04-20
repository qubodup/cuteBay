/*chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  console.log(response.farewell);
});*/

//var timestring = "3"; //$('.actPanel').div:contains("endet");
//var timestring = $('.actPanel:contains("endet")').text();
//var timetype = timestring.split(" endet in ")[1].split("Preis")[0].trim().split(" ")
//timetype = timetype[timetype.length-1].trim()
// var restzeit = $('#w1-12-_timeleft').text();
/*
chrome.runtime.onMessage.addListener(
function(request, sender, sendResponse) {
console.log(sender.tab ? 
                "from a content script:" + sender.tab.url :
                "from the extension");
if (request.greeting) {*/
var imgstr="nobid"
/*if (request.greeting == "cutebaycat-icon2.png") {
imgstr="bidfirst"
}
if (request.greeting == "cutebaycat-icon2.png") {
imgstr="bidlast"
}
if (request.greeting == "cutebaycat-icon2.png") {
imgstr="nobid"
}*/

var imgstep = 0;

// get restzeit
var restzeit = $('.u-flL.lable:contains("Restzeit:"):first').next().text();
if ($('[id$=timeLeft]')[0]) {
restzeit = $('[id$=timeLeft]').text()
};
// contains days but no 0days
if (restzeit.indexOf("T") !== -1 && restzeit.indexOf("0T") == -1) {imgstep=3}
else
// contains hours but no 0hours
if (restzeit.indexOf("Std") !== -1 && restzeit.indexOf("0Std") == -1) {imgstep=2}
else {
// contains minutes or hours
if (restzeit.indexOf("Min") !== -1 || restzeit.indexOf("Sek") !== -1 ) { imgstep=1}
else {imgstep=0};};
// contains stunden?
// else wird als weniger als stunden interpretiert

var myid = chrome.i18n.getMessage("@@extension_id");
var curimg = imgstr+imgstep+'.png'
$('.actPanel').prepend(restzeit + '<div style="text-align: right;"><img style="margin: 10px 10px -30px 0px;" id="theImg" src="chrome-extension://'+ myid + '/' + curimg + '" /></div>');// + chrome.browserAction.getTitle().text());

 //     sendResponse({farewell: "goodbye"}); }
  //});
