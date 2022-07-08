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
    
    getType() {
        return this.type;
    }

    getElement() {
        return this.element;
    }
}