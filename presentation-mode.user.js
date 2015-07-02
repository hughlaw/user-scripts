// ==UserScript==
// @name          Presentation Mode
// @namespace     http://www.hughlaw.net
// @description   Allows increased saturation when presenting
// @match         *://*/sm8*
// ==/UserScript==

// the guts of this user script
function main() {
  var isPresentationMode = isPresentationMode || false;

  document.addEventListener('keydown', checkKeys, false);

  function checkKeys(e) {
    var body = document.getElementsByTagName('body');
    if(e.altKey && e.keyCode === 80) {
      if(isPresentationMode === false) {
        body[0].setAttribute('style', '-webkit-filter:saturate(200%)');
      } else {
        body[0].setAttribute('style', '-webkit-filter:saturate(100%)');
      }
      isPresentationMode = !isPresentationMode;
      console.log('presentation mode: ' + isPresentationMode);
    }
  }
}

main();