function copyClip(value) {
	var n = value;
  /* Get the text field */
  var copyText = document.getElementsByClassName("myInput");
  copyText[n].select();
  copyText[n].setSelectionRange(0, 99999);
  document.execCommand("copy");
  
  var tooltip = document.getElementsByClassName("tooltiptext");
  tooltip[n].innerHTML = "Copied: " + copyText[n].value;


}

function outTip(value) {
  var n = value;
  var tooltip = document.getElementsByClassName("tooltiptext");
  tooltip[n].innerHTML = "Copy to clipboard";
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}