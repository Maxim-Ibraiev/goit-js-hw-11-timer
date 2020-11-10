import "./style.scss";

class Timer {
  constructor(specs) {
    this.selector = specs.selector;
    this.targetDate = specs.targetDate;
    this.startCountdown();
  }
  createTimer() {
    return new Promise((resolve, reject) => {
      const timerRef = document.querySelector(this.selector);
      timerRef && timerRef.children.length === 0
        ? resolve(timerRef)
        : reject("The timer cannot be found by ID");
    });
  }
  parseTimerHTML(timerRef) {
    const str = ` <div class="field">
      <span class="days" data-value="days">11</span>
      <span class="label">Days</span>
    </div>

    <div class="field">
      <span class="hours" data-value="hours">11</span>
      <span class="label">Hours</span>
    </div>

    <div class="field">
      <span class="minutes" data-value="mins">11</span>
      <span class="label">Minutes</span>
    </div>

    <div class="field">
      <span class="seconds" data-value="secs">11</span>
      <span class="label">Seconds</span>
    </div>`;
    timerRef.innerHTML = str;
    // const titleRef = timerRef.querySelector(".");
    const valueRef = {
      days: timerRef.querySelector('[data-value="days"]'),
      hours: timerRef.querySelector('[data-value="hours"]'),
      mins: timerRef.querySelector('[data-value="mins"]'),
      secs: timerRef.querySelector('[data-value="secs"]'),
    };
    // const LabelRef = timerRef.querySelector(".");
    return { timerRef, valueRef };
  }
  startTimer({ timerRef, titleRef, valueRef, LabelRef }) {
    return setInterval(() => {
      const timeNow = Date.now();
      const time = this.targetDate - timeNow;

      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((time % (1000 * 60)) / 1000);

      valueRef.days.innerText = days;
      valueRef.hours.innerText = hours;
      valueRef.mins.innerText = mins;
      valueRef.secs.innerText = secs;
    }, 1000);
  }
  animateTimer({ target }) {}
  startCountdown() {
    return this.createTimer()
      .then(this.parseTimerHTML)
      .then(this.startTimer.bind(this))
      .catch((err) => console.log(err));
  }
}

const superTimer = new Timer({
  selector: "#timer-1",
  targetDate: new Date("Jan 1, 2021"),
});

superTimer;
