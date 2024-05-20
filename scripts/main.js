// Background Image Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0"; // Set initial opacity to 0
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.opacity = "1"; // Set opacity to 1 for the current slide
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    let slides = document.getElementsByClassName("slide");
    if (n < 1) {
        slideIndex = slides.length;
    } else if (n > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0"; // Set opacity to 0 for all slides
    }
    slides[slideIndex - 1].style.opacity = "1"; // Set opacity to 1 for the current slide
}
