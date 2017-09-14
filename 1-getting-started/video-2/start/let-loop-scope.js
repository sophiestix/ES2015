'use strict';

(function initLoop() {
  function doLoop(x) {
    i = 3;
    console.log('loop:', x);
  }
  
  for (var i = 0; i < 10; i++) {
    doLoop(i + 1);
  }
})();

//this will result in an infinite loop