document.querySelectorAll('.navlink').forEach(link => {
    link.addEventListener('click', function(e) {

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (!targetSection) return;

        const h2 = targetSection.querySelector('h2');
        if (!h2) return;

        h2.classList.add('glow');

        setTimeout(() => {
            h2.classList.remove('glow');
        }, 2000);
    });
});
