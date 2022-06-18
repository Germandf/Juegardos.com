class Timer {
    constructor(timerElement) {
        this.timerElement = timerElement;
        this.time = null;
        this.remainingSeconds = 0;
    }

    setUpTimer(minutesToAdd, callback) {
        this.stopTimer();
        this.remainingSeconds = minutesToAdd * 60;
        this.time = setInterval(() => {
            this.remainingSeconds--;
            let minutes = Math.floor(this.remainingSeconds / 60);
            let seconds = this.remainingSeconds - minutes * 60;
            this.timerElement.innerHTML = minutes + ":" + seconds;
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
}