let lastScroll = 0;

window.addEventListener("scroll", function () {
    if (window.scrollY > lastScroll) {
        document.getElementById("navbar").classList.add("hide");
        document.getElementById("mobileMenuButton").classList.add("hide");
    } else {
        document.getElementById("navbar").classList.remove("hide");
        document.getElementById("mobileMenuButton").classList.remove("hide");
    }

    lastScroll = window.scrollY;
});


const mobileMenuButton = document.getElementById("mobileMenuButton");
const mobileMenu = document.getElementById("mobileMenu");


mobileMenuButton.addEventListener("click", function () {

    mobileMenu.classList.toggle("active");
    mobileMenuButton.classList.toggle("active");

});

