// Basic mobile nav toggle
document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".nav-toggle");
    const siteNav = document.querySelector(".site-nav");

    if (navToggle && siteNav) {
        navToggle.addEventListener("click", () => {
            siteNav.classList.toggle("site-nav--open");
            navToggle.classList.toggle("nav-toggle--open");
        });

        // Close menu when a link is clicked (mobile)
        siteNav.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                siteNav.classList.remove("site-nav--open");
                navToggle.classList.remove("nav-toggle--open");
            });
        });
    }
});
