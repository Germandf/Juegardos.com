class Timer {
    constructor(timerElement) {
        this.timerElement = timerElement;
        this.time = null;
        this.remainingSeconds = 0;
    }

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

    stopTimer() {
        clearInterval(this.time);
    }

    isTimeOver(){
        if (this.remainingSeconds > 0)
            return false;
        return true;
    }

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