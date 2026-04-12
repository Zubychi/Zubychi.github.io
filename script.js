document.querySelectorAll(".site-nav__link").forEach(link => {
    link.addEventListener("click", function () {
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (!targetSection) return;

        const heading = targetSection.querySelector(".section__title");
        if (!heading) return;

        heading.classList.add("section__title--glow");

        setTimeout(() => {
            heading.classList.remove("section__title--glow");
        }, 2000);
    });
});
