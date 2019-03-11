var terminateFlag = false,
  targetNum = 10000000000,
  sum = 0,
  timer;

function setTimeoutCalc() {
    timer = setTimeout(calc, 2000, 1, 10000);
}

function calc() {
    var startNumber = arguments[0],
      unit = arguments[1],
      j = startNumber,
      max = startNumber + unit;

    console.error("calc start!");
    console.error("arguments : ", arguments);

    for (j; j < max; j++) {
        if (terminateFlag || j > targetNum) {
            console.error("calc force shutdown! j : ", j);
            clearTimeout(timer);
            return;
        }
        sum += j;
    }

    timer = setTimeout(calc, 2000, j, 10000);

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