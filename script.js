// Smooth scroll
document.querySelectorAll('a').forEach(link => {
    link.onclick = function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
        .scrollIntoView({ behavior: 'smooth' });
    }
});

// Fade-in animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
        }
    });
});

sections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(50px)";
    sec.style.transition = "0.6s";
});
