class Entity {
    constructor(type, flying) {
        this.type = type;
        /** @type {HTMLDivElement} */
        this.element = null;
        const newEntity = document.createElement("div");
        newEntity.classList.add(type);
        this.flying = flying;
        if (this.type == "claw"){
            if (flying)
                newEntity.style.bottom = "225px";
            else
                newEntity.style.bottom = "100px";
        }
        newEntity.dataset.pauseable = "";
        document.querySelector(".runner-container").appendChild(newEntity);
        this.element = newEntity;
    }

    // returns if entity is touching character
    isTouching(distance, jumping) {
        return ((this.flying && jumping) || (!this.flying && !jumping)) && (
            (this.type == "skull" && distance > -100 && distance < 0) ||
            (this.type == "horse" && distance > -150 && distance < 50) || 
            (this.type == "claw" && distance > -125 && distance < -50));
    }
    
    // returns entity's type (skull, horse or claw currently)
    getType() {
        return this.type;
    }

    // returns entity's html element
    getElement() {
        return this.element;
    }
}