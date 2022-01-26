function updateActiveNav(e) {
    let nav = document.querySelector("nav");
    var navLinks = nav.querySelectorAll("a");

    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", function () {
            var current = document.querySelectorAll(".active");
            // current[0].className = current[0].className.replace(" active", "");
            current[0].classList.remove("active");
            this.classList.add("active");
        });
    }
}
updateActiveNav();