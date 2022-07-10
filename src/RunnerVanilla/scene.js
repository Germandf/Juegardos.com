class Scene {
    constructor() {
        this.livesHtml = document.getElementById("lives");
        this.clawsHtml = document.getElementById("claws");
        this.playButton = document.getElementById("play");
        this.changeBackgroundButton = document.getElementById("change-background");
        this.changeBackgroundButton.addEventListener("click", () => this.changeBackground());
        this.changeCharacterButton = document.getElementById("change-character");
        this.changeCharacterButton.addEventListener("click", () => this.changeCharacter());
        this.skins = ["skin-1", "skin-2", "skin-3", "skin-4"];
        this.currentBackground = "skin-1";
        this.currentCharacter = "skin-1";
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
        var index = this.skins.indexOf(this.currentBackground);
        if(index >= 0 && index < this.skins.length - 1)
            this.currentBackground = this.skins[index + 1]
        else
            this.currentBackground = "skin-1";
        var layers = document.querySelectorAll(".layer");
        layers.forEach(e => e.className = "layer " + this.currentBackground);
    }

    changeCharacter() {
        var index = this.skins.indexOf(this.currentCharacter);
        if(index >= 0 && index < this.skins.length - 1)
            this.currentCharacter = this.skins[index + 1]
        else
            this.currentCharacter = "skin-1";
        var character = document.querySelector("#character");
        character.dataset.skin = this.currentCharacter;
    }
}