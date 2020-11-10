class Timer {
  constructor(specs) {
    this.selector = selector;
    this.targetDate = specs.targetDate;
    this.startCountdown();
  }
  createTimer() {
    return new Promise((resolve, reject) => {
      const timerRef = document.querySelector(this.selector);
      timerRef && timerRef.children.length === 0
        ? resolve(timerRef)
        : reject("the timer cannot be found by id");
    });
  }
  parseTimerHTML(timerRef) {
    console.log(timerRef);
  }
  startTimer({ timerRef, titleRef, ValueRef, LabelRef }) {}
  animateTimer({ target }) {}
  startTimer() {
    return this.createTimer()
      .then(this.parseTimerHTML)
      .then(this.startTimer.bind(this))
      .catch.warn(err);
  }
}
