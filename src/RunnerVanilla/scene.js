class Scene {
    constructor() {
        this.livesHtml = document.getElementById("lives");
        this.clawsHtml = document.getElementById("claws");
        this.playButton = document.querySelector(".play");
        this.gameLogo = document.getElementById("gameLogo");
        this.changeBackgroundButton = document.getElementById("change-background");
        this.changeBackgroundButton.addEventListener("click", () => this.changeBackground());
        this.changeCharacterButton = document.getElementById("change-character");
        this.changeCharacterButton.addEventListener("click", () => this.changeCharacter());
        this.skins = ["skin-1", "skin-2", "skin-3", "skin-4"];
        this.currentBackground = "skin-1";
        this.currentCharacter = "skin-1";
    }
    
    // updates lives in html
    updateLives(lives){
        this.livesHtml.innerHTML = lives;
    }

    // updates claws in html
    updateClawsCollected(clawsCollected) {
        this.clawsHtml.innerHTML = clawsCollected;
    }

    // changes all animation play states for elements with data attribute 'pauseable'
    changePauseables(state) {
        const animations = document.querySelectorAll('[data-pauseable');
        animations.forEach(animation => {
            animation.style.animationPlayState = state;
        });
    }

    // removes all entities elements from game container
    removeAllEntities() {
        var elementsToRemove = document.querySelectorAll('.skull, .horse, .claw');
        elementsToRemove.forEach(e => e.remove());
    }

    // sets UI on or off
    showButtons(show) {
        if (show) {
            this.playButton.innerHTML = "Reiniciar";
            this.playButton.style.display = "initial";
            this.gameLogo.style.display = "initial";
            this.changeBackgroundButton.style.display = "initial";
            this.changeCharacterButton.style.display = "initial";
        } else {
            this.playButton.style.display = "none";
            this.gameLogo.style.display = "none";
            this.changeBackgroundButton.style.display = "none";
            this.changeCharacterButton.style.display = "none";
        }
    }

    // returns play button html element
    getPlayButton() {
        return this.playButton;
    }

    // changes background skin
    changeBackground() {
        var index = this.skins.indexOf(this.currentBackground);
        if(index >= 0 && index < this.skins.length - 1)
            this.currentBackground = this.skins[index + 1]
        else
            this.currentBackground = "skin-1";
        var layers = document.querySelectorAll(".layer");
        layers.forEach(e => e.className = "layer " + this.currentBackground);
    }

    // changes character skin
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