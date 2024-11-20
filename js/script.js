document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) { // Adjust threshold as needed
            header.classList.add("shrink");
        } else {
            header.classList.remove("shrink");
        }
    });
});