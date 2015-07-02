// ==UserScript==
// @name          SM Title fixes
// @namespace     http://www.hughlaw.net
// @description   Changes the browser tab title to reflect what page you are on
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
  function getUrlVars() {
      var vars = {};
      var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
          vars[key] = value;
      });
      return vars;
  }
  
  //var currentTask = "";
  currentTask = getUrlVars()["ctfn"];
  if(currentTask !== undefined) {
    currentTask = currentTask.toUpperCase();
    document.title = currentTask;
  }
  else {
    currentTask = jQ('#content h1').text().toUpperCase();
    document.title = currentTask;
  }
}

// load jQuery and execute the main function
addJQuery(main);