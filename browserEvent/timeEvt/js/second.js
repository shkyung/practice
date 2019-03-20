var terminateFlag = false,
  targetNum = 10000000000,
  delayTime = 2000,
  sum = 0,
  unit = 10000,
  timer;

function setTimeoutCalc() {
    timer = setTimeout(calc, delayTime, 1);
}

// 1-10000
// 10001-20000
// ....
function calc() {
    var startNumber = arguments[0],
      j = startNumber,
      max = startNumber + unit;

    console.error("calc start!");
    console.error("arguments : ", arguments);

    for (j; j < max; j++) {
        if (terminateFlag || j > targetNum) {
            console.error("calc force shutdown! j : ", j);
            terminateFlag = false;
            clearTimeout(timer);
            return;
        }
        sum += j;
    }

    timer = setTimeout(calc, delayTime, j);

    console.error("----------------- sum : ", sum);
    console.error("calc end!");
}

function forceQuit() {
    console.error("set terminateFlag true!");
    terminateFlag = true;
}

function clearTimer() {
    console.error("clear timer!");
    clearTimeout(timer);
}

// second try
// To stop while calculating in timer callback function, use this way.
// split calculating range, and set and call setTimeout
// then you change the terminateFlag, setTimout cb use this changed variable.