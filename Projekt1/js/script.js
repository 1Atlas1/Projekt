function copyClip(value) {
	var n = value;
  /* Get the text field */
  var copyText = document.getElementsByClassName("myInput");
  copyText[n].select();
  copyText[n].setSelectionRange(0, 99999);
  document.execCommand("copy");
  
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

function outTip() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}