let lastScroll = 0;

window.addEventListener("scroll", function () {
    if (window.scrollY > lastScroll) {
        document.getElementById("navbar").classList.add("hide");
    } else {
        document.getElementById("navbar").classList.remove("hide");
    }

    lastScroll = window.scrollY;
});
