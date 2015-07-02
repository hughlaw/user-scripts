// ==UserScript==
// @name          SM Reordering
// @namespace     http://www.hughlaw.net
// @description   Allows reordering of table rows in Site Manager
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
  
  // add styling for the flash class
  jQ("<style type='text/css'> @-webkit-keyframes invalid {from { background-color: #ffffa5; } to { background-color: inherit; }}@-moz-keyframes invalid {from { background-color: red; } to { background-color: inherit; }}@-o-keyframes invalid {from { background-color: red; } to { background-color: inherit; }}@keyframes invalid {from { background-color: red; } to { background-color: inherit; }}.invalid {-webkit-animation: invalid 1s 1; /* Safari 4+ */ -moz-animation:    invalid 1s 2; /* Fx 5+ */ -o-animation:      invalid 1s 3; /* Opera 12+ */ animation:invalid 1s 4; /* IE 10+ */} </style>").appendTo("head");
  
  // add a data element to each link
  jQ('#oElementsTable tr td:last-child a:last-child').each(function() {
    var currentElement = jQuery(this).parent().siblings('td:first-child').find('input:first-child').attr('value');
    jQ(this).attr('data-element',currentElement);
    jQ(this).attr('href','#');
    //console.log(currentElement);
    
    // prevent the default click action for the move buttons
    jQ(this).click(function(e) {
      e.preventDefault;
      jQ('#oElementsTable tr').removeClass('invalid');
      moveMuliple(currentElement,"up");
      // flash row to the user
      jQ(this).parents('tr').addClass('invalid');
    })
  });
  
  jQ('#oElementsTable tr td:last-child a:first-child').each(function() {
    var currentElement = jQuery(this).parent().siblings('td:first-child').find('input:first-child').attr('value');
    jQ(this).attr('data-element',currentElement);
    jQ(this).attr('href','#');
    //console.log(currentElement);
    
    // prevent the default click action for the move buttons
    jQ(this).click(function(e) {
      e.preventDefault;
      moveMuliple(currentElement,"down");
    })
  });
  
  
  function moveMuliple(element, direction) {
      // ask how many places
      var x;
      var offsetUp = prompt("How many?",1);
      if (offsetUp !=null) {
        x = offsetUp;
        console.log("Move " + x + " places");
        if(direction === "up") {
          for (var i=0;i<x;i++) {
            moveUp(element);
          }
        }
        else {
          for (var i=0;i<x;i++) {
            moveDown(element);
          }
        }
      }
  } // End of moveMultiple()
  
}

// load jQuery and execute the main function
addJQuery(main);
