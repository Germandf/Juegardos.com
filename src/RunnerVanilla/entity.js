class Entity {
    constructor(type, container, bottom = null) {
        this.type = type;
        this.container = container;
        /** @type {HTMLDivElement} */
        this.element = null;
        const newEntity = document.createElement("div");
        newEntity.classList.add(type);
        if (bottom != null)
            newEntity.style.bottom = bottom;
        newEntity.dataset.pauseable = "";
        document.querySelector(".runner-container").appendChild(newEntity);
        container.push(newEntity);
    }
    
    getType() {
        return this.type;
    }
}