class Scene {
    constructor() {
        this.livesHtml = document.getElementById("lives");
        this.clawsHtml = document.getElementById("claws");
        this.playButton = document.getElementById("play");
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

    showPlayButton(show) {
        if (show) {
            this.playButton.innerHTML = "Volver a jugar";
            this.playButton.style.display = "initial";
        } else {
            this.playButton.style.display = "none";
        }
    }

    getPlayButton() {
        return this.playButton;
    }
}