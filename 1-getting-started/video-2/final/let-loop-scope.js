'use strict';

(function initLoop() {
  function doLoop(x) {
    console.log('loop:', x);
  }
  
  for (let i = 0; i < 10; i++) { //block level scoping, let wont get assigned to the outer context
    doLoop(i + 1);
  }
})();