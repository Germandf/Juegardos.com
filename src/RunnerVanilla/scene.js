class Scene {
    constructor() {
        this.livesHtml = document.getElementById("lives");
        this.clawsHtml = document.getElementById("claws");
        this.playButton = document.getElementById("play");
        this.changeBackgroundButton = document.getElementById("change-background");
        this.changeBackgroundButton.addEventListener("click", () => this.changeBackground());
        this.changeCharacterButton = document.getElementById("change-character");
        this.changeCharacterButton.addEventListener("click", () => this.changeCharacter());
    }
    
    updateLives(lives){
        this.livesHtml.innerHTML = lives;
    }

    updateClawsCollected(clawsCollected) {
        this.clawsHtml.innerHTML = clawsCollected;
    }

    changePauseables(state) {
        const animations = document.querySelectorAll('[data-pauseable');
        animations.forEach(animation => {
            animation.style.animationPlayState = state;
        });
    }

    removeAllEntities() {
        var elementsToRemove = document.querySelectorAll('.skull, .horse, .claw');
        elementsToRemove.forEach(e => e.remove());
    }

    showButtons(show) {
        if (show) {
            this.playButton.innerHTML = "Volver a jugar";
            this.playButton.style.display = "initial";
            this.changeBackgroundButton.style.display = "initial";
            this.changeCharacterButton.style.display = "initial";
        } else {
            this.playButton.style.display = "none";
            this.changeBackgroundButton.style.display = "none";
            this.changeCharacterButton.style.display = "none";
        }
    }

    getPlayButton() {
        return this.playButton;
    }

    changeBackground() {
        console.log("TODO: change background");
    }

    changeCharacter() {
        console.log("TODO: change character");
    }
}