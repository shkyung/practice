var terminateFlag = false,
  timer;

function setTimeoutCalc() {
    timer = setTimeout(calc, 2000);
}

function calc() {
    console.error("calc start!");
    var i = 0,
      sum = 0;

    while (i < 10000000000) {
        if (terminateFlag) {
            console.error("calc force shutdown! i : ", i);
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

// 1. calc button click -> 2. quit the calc click twice -> 3. clear the timer third time
// result:
// calc start!
// ----------------- sum : 49999999990067860000
// calc end!
// set terminateFlag true!     (twice)
// clear timer!                (third time)