class Scene {
    constructor() {
        this.livesHtml = document.getElementById("lives");
        this.clawsHtml = document.getElementById("claws");
        // this.playButton = document.getElementById("play");
        this.playButton = document.querySelector(".play");
        this.changeBackgroundButton = document.getElementById("change-background");
        this.changeBackgroundButton.addEventListener("click", () => this.changeBackground());
        this.changeCharacterButton = document.getElementById("change-character");
        this.changeCharacterButton.addEventListener("click", () => this.changeCharacter());
        this.skins = ["default", "skin-2", "skin-3", "skin-4"];
        this.currentBackground = "default";
        this.currentCharacter = "default";
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
            this.playButton.innerHTML = "Reiniciar";
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
        var index = this.skins.indexOf(this.currentBackground);
        if(index >= 0 && index < this.skins.length - 1)
            this.currentBackground = this.skins[index + 1]
        else
            this.currentBackground = "default";
        var layers = document.querySelectorAll(".layer");
        layers.forEach(e => e.className = "layer " + this.currentBackground);
    }

    changeCharacter() {
        console.log("TODO: change character");
    }
}