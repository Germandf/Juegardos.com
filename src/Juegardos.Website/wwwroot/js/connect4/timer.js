class Timer {
    constructor(timerElement) {
        this.timerElement = timerElement;
        this.time = null;
        this.remainingSeconds = 0;
    }

    // prepares timer to call a callback method when seconds equals zero
    setUpTimer(seconds, callback) {
        this.stopTimer();
        this.remainingSeconds = seconds;
        let timeParsed = this.getTimeParsed();
        this.timerElement.innerHTML = timeParsed.minutes + ":" + timeParsed.seconds;
        this.time = setInterval(() => {
            this.remainingSeconds--;
            let timeParsed = this.getTimeParsed();
            this.timerElement.innerHTML = timeParsed.minutes + ":" + timeParsed.seconds;
            if (this.remainingSeconds <= 0) {
                this.stopTimer();
                callback();
            }
        }, 1000);
    }

    // stops timer counting
    stopTimer() {
        clearInterval(this.time);
    }

    // gets time parsed correctly for both checking time remaining and update timerElement's innerHtml
    getTimeParsed() {
        let minutes = Math.floor(this.remainingSeconds / 60);
        let seconds = this.remainingSeconds - minutes * 60;
        if (minutes < 10) minutes = "0" + minutes;
        if (seconds < 10) seconds = "0" + seconds;
        return {
            minutes, seconds
        }
    }
}