window.scrollL = (carouselId) => {
    let x = document.getElementById(carouselId).getElementsByClassName("carousel-posters")[0];
    let step = window.outerWidth / 2;
    x.scrollLeft -= step;
}

window.scrollR = (carouselId) => {
    let x = document.getElementById(carouselId).getElementsByClassName("carousel-posters")[0];
    let step = window.outerWidth / 2;
    x.scrollLeft += step;
}

window.getScrollVal = (carouselId) => {
    setTimeout(() => {
        let x = document.getElementById(carouselId).getElementsByClassName("carousel-posters")[0];
        let el = document.getElementById(carouselId).getElementsByClassName("left-arrow")[0];
        if (x.scrollLeft == 0) {
            el.style.display = "none";
        } else {
            el.style.display = "flex";
        }
        let el2 = document.getElementById(carouselId).getElementsByClassName("right-arrow")[0];
        let right = x.scrollWidth - (x.scrollLeft + x.clientWidth) + 1;
        if (right <= 2) {
            el2.style.display = "none";
        } else {
            el2.style.display = "flex";
        }
    }, 550);
}
