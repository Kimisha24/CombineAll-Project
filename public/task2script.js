console.log("hlo");

const slides = document.querySelector(".about_row");

function leftside() {
    // console.log(slides);
    slides.scrollBy({
        left: -300,
        behavior: "smooth",
    });
}

function rightside() {
    // console.log(slides);
    slides.scrollBy({
        left: 300,
        behavior: "smooth",
    });
}





// function sliders(x, y) {
//     window.scrollBy(x, y);
// }

// console.log(sliders);