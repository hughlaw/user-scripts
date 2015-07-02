// ==UserScript==
// @name          SM Table row highlighter - Nav objects
// @namespace     http://www.hughlaw.net
// @description   Fixes small template picker within SM inteface
// @match         *://*/terminalfour/SiteManager?ctfn=navigation&fnno=50*
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
  jQ('table tr').mouseenter(function() {
      jQ(this).css('background-color','aliceblue');
    });
  jQ('table tr').mouseleave(function() {
      jQ(this).css('background-color','inherit');
      });
    }

// load jQuery and execute the main function
addJQuery(main);