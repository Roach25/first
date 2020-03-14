'use strict'
document.getElementById('progress').value = 50;

var counter = 0;
function progress() {
  counter++;
  document.getElementById( 'progress' ).value = counter;
  if( counter == 100 ) {
 clearInterval( timer );
  }
}
var timer = setInterval( progress, 100 );