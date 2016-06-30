// lib/sleep.js

function sleep (amountOfSeconds, theCallback) {
  function whenTimerStops () {
    theCallback();
  }

  setTimeout(whenTimerStops, amountOfSeconds * 1000);
}

module.exports = sleep;




