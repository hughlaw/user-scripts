// ==UserScript==
// @name          SM Code highlighter fixes
// @namespace     http://www.hughlaw.net
// @description   Fixes code highlighting to be nicer
// @match         *://*/terminalfour/SiteManager*
// ==/UserScript==

// a function that loads jQuery and calls a callback function when jQuery has finished loading
function addJQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}

// the guts of this userscript
function main() {
  // Note, jQ replaces $ to avoid conflicts.
  jQ('.CodeMirror').css({'line-height':'1.5em','font-family':'Monaco','font-size':'12px','background-color':'aliceblue','min-height':'800px'});
  jQ('.CodeMirror-scroll').css('min-height','800px');
    }

// load jQuery and execute the main function
addJQuery(main);