window.scrollL = () => {
    let x = document.getElementsByClassName("carousel-posters")[0];
    let step = window.outerWidth / 2;
    x.scrollLeft -= step;
}

window.scrollR = () => {
    let x = document.getElementsByClassName("carousel-posters")[0];
    let step = window.outerWidth / 2;
    x.scrollLeft += step;
}

window.getScrollVal = () => {
    setTimeout(() => {
        let x = document.getElementsByClassName("carousel-posters")[0];
        let el = document.getElementsByClassName("left-arrow")[0];
        if (x.scrollLeft == 0) {
            el.style.display = "none";
        } else {
            el.style.display = "flex";
        }
        let el2 = document.getElementsByClassName("right-arrow")[0];
        let right = x.scrollWidth - (x.scrollLeft + x.clientWidth) + 1;
        if (right <= 2) {
            el2.style.display = "none";
        } else {
            el2.style.display = "flex";
        }
    }, 550);
}
