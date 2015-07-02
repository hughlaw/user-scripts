// ==UserScript==
// @name          SM Template picker fixer
// @namespace     http://www.hughlaw.net
// @description   Fixes small template picker within SM inteface
// @match         *://*/terminalfour/*
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
  jQ('select[name=template-name], select[name=template-element-get], select[name=template-element-search]').css('height','250px');
}

// load jQuery and execute the main function
addJQuery(main);