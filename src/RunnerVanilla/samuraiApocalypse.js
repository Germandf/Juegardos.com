window.startSamuraiApocalypse = () => {
    let scene = new Scene();
    let character = document.getElementById("character");
    let jumping;
    let gameOver;
    let lives;
    let canJump;
    let entities;
    let clawsCollected;
    let clawsToWin;
    let gameLoopInterval;
    let createEntityTimeout;
    let runAgainTimeout;

    scene.getPlayButton().addEventListener("click", () => {
        setUpGame();
    });

    window.addEventListener("keydown", (event) => {
        if (event.key == "ArrowUp" || event.key == "ArrowDown")
            event.preventDefault();
        if (event.key == "ArrowUp")
            jump();
    });

    // set up all variables and call necessary methods before playing
    function setUpGame() {
        lives = 3;
        clawsToWin = 6;
        clawsCollected = 0;
        canJump = true;
        gameOver = false;
        jumping = false;
        entities = [];
        scene.removeAllEntities();
        scene.updateLives(lives);
        scene.updateClawsCollected(clawsCollected);
        scene.changePauseables("running");
        scene.setPlayingUI(true);
        createEntity();
        gameLoopInterval = setInterval(gameLoop, 50);
        character.className = "running";
    }

    // makes character jump and set it's state as running after a second
    function jump() {
        if (gameOver || jumping || !canJump) 
            return;
        character.className = "jumping";
        jumping = true;
        runAgainTimeout = setTimeout(() => {
            if (gameOver) return;
            character.className = "running";
            jumping = false;
        }, 1125)
    }

    // checks collisions for all entities (enemies and collectibles)
    function gameLoop() {
        entities.forEach(entity => {
            var distance = character.offsetLeft - entity.getElement().offsetLeft;
            if (entity.isTouching(distance, jumping))
                entityTouchingPlayer(entity);
            else if (entity.getElement().offsetLeft < -200)
                removeEntityFromArray(entity);
        });
    }

    // create randomly an enemy or entity, it can be flying or not, and calls itself again 
    // after a random amount of seconds
    function createEntity() {
        if (gameOver) 
            return;
        window.clearTimeout(createEntityTimeout);
        var randomTime = Math.floor(Math.random() * 3000) + 1000;
        var randomEntity = Math.floor(Math.random() * 3);
        var randomPosition = Math.floor(Math.random() * 2);
        var entity;
        if (randomEntity == 1)
            entity = new Entity("skull", true);
        else if (randomEntity == 2)
            entity = new Entity("horse", false);
        else if (randomPosition == 1)
            entity = new Entity("claw", false);
        else
            entity = new Entity("claw", true);
        entities.push(entity);
        createEntityTimeout = setTimeout(() => { createEntity() }, randomTime);
    }

    // collision logic, if the entity is an enemy, takes 1 live and checks for game over, 
    // if it's a claw (collectible) adds one and checks for winning condition
    function entityTouchingPlayer(entity) {
        removeEntityFromArray(entity);
        if (entity.getType() == "claw"){
            clawsCollected++;
            scene.updateClawsCollected(clawsCollected);
            entity.getElement().className = "claw taking";
            if (clawsCollected >= clawsToWin){
                finishGame("attacking");
            }
        } else {
            window.clearTimeout(runAgainTimeout);
            lives--;
            scene.updateLives(lives);
            if (lives <= 0){
                finishGame("dying");
            } else {
                canJump = false;
                character.className = "taking-damage";
                jumping = false;
                setTimeout(() => {
                    if (gameOver) return;
                    character.className = "running";
                    canJump = true;
                }, 250);
            }
        }
    }

    // sets gameOver to true, pauses all elements, removes all entities and shows UI again
    function finishGame(characterAnimation) {
        gameOver = true;
        clearInterval(gameLoopInterval);
        scene.changePauseables("paused");
        scene.removeAllEntities();
        scene.setPlayingUI(false);
        character.className = characterAnimation;
        character.style.animationPlayState = 'running';
    }

    // gets the entity index from the entities array and removes it
    function removeEntityFromArray(entity) {
        const index = entities.indexOf(entity);
        if (index > -1)
            entities.splice(index, 1);
    }
}