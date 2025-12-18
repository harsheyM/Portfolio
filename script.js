console.log("JavaScript loaded ✅");

document.addEventListener("DOMContentLoaded", function () {
    const scrollBtn = document.getElementById("scrollDownBtn");
    const navbar = document.getElementById("navbar");
    const darkModeBtn = document.getElementById("darkModeBtn");

    // DARK MODE TOGGLE
    if (darkModeBtn) {
        darkModeBtn.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
        });
    }

    // NAV LINK SMOOTH SCROLL
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const sectionId = this.getAttribute("href");
            document.querySelector(sectionId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // EXPLORE BUTTON CLICK
    scrollBtn.addEventListener("click", function () {
    if (navbar) {
        navbar.classList.add("visible");  // Show navbar
    }

    const aboutSection = document.getElementById("about");
    if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
    }
    });

});
