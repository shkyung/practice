var terminateFlag = false,
  targetNum = 10000000000,
  delayTime = 2000,
  timer;

function setTimeoutCalc() {
    timer = setTimeout(calc, delayTime);
}

function calc() {
    var i = 0,
      sum = 0;

    console.error("calc start!");

    while (i < targetNum) {
        if (terminateFlag) {
            console.error("calc force shutdown! i : ", i);
            terminateFlag = false;
            return;
        }

        sum += i;
        i++;
    }
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

// 1. calc div click -> 2. after delay time, "quit the calc" div click -> 3. "clear the timer" div
// result:

// calc start!
// ----------------- sum : 49999999990067860000
// calc end!
// set terminateFlag true!     (twice)
// clear timer!                (third time)

// try whatever you want with this example
