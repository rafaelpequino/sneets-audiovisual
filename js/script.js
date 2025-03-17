//NAVBAR RESPONSIVO
const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.getElementById('nav');
const navLinks = document.querySelectorAll('nav a'); 

mobileMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
    mobileMenu.classList.toggle('nav-opened');
});

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            mobileMenu.classList.remove('nav-opened');
        }
    });
});


//ROLAGEM DA NAVBAR
let addHeight = 0
function scrollToSection(targetId) {
    const headerHeight = 70 + addHeight;
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
        const offset = targetSection.offsetTop - headerHeight;

        console.log(offset)

        window.scrollTo({
            top: offset,
            behavior: "smooth"
        });

        navLinks.forEach((navLink) => {
            navLink.classList.remove("active");
        });

        const correspondingNavLink = document.querySelector(`nav a[href="#${targetId}"]`);
        if (correspondingNavLink) {
            correspondingNavLink.classList.add("active");
        }
    }

    addHeight = 0
}

navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
        if (this.getAttribute("href").startsWith("#")) {
            e.preventDefault();

            if (this.getAttribute("href") == "#palestra" && window.innerWidth > 750) {
                addHeight = 100;
            }

            const targetId = this.getAttribute("href").substring(1);
            scrollToSection(targetId);

        }
    });
});