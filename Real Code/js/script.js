console.log("JavaScript file loaded");

document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slides img');
    let autoSlideInterval;
    const autoSlideDelay = 7000;  // 7 seconds between automatic slides
    const userInteractionDelay = 10000;  // 10 seconds delay after user interaction

    function showSlide(index) {
        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }

        const newTranslateValue = -currentIndex * 100;
        document.querySelector('.slides').style.transform = `translateX(${newTranslateValue}%)`;
    }

    function changeSlide(direction) {
        const newIndex = currentIndex + direction;
        showSlide(newIndex);
        resetAutoSlide();
    }

    function startAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(() => {
            showSlide(currentIndex + 1);
        }, autoSlideDelay);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        setTimeout(() => {
            startAutoSlide();
        }, userInteractionDelay);
    }

    document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
    document.querySelector('.next').addEventListener('click', () => changeSlide(1));

    showSlide(currentIndex);
    startAutoSlide();
});
