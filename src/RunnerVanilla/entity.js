class Entity {
    constructor(type, bottom = null) {
        this.type = type;
        /** @type {HTMLDivElement} */
        this.element = null;
        const newEntity = document.createElement("div");
        newEntity.classList.add(type);
        if (bottom != null)
            newEntity.style.bottom = bottom;
        newEntity.dataset.pauseable = "";
        document.querySelector(".runner-container").appendChild(newEntity);
        this.element = newEntity;
    }

    isTouching(distance, jumping) {
        return (this.type === "skull" && distance > -150 && distance < 20 && jumping) ||
            (this.type === "horse" && distance > -180 && distance < 70 && !jumping) || 
            (this.type === "claw" && distance > -150 && distance < 20);
    }
    
    getType() {
        return this.type;
    }

    getElement() {
        return this.element;
    }
}