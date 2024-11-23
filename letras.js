let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 80,
});
 
typewriter
  .pauseFor(2500)
  .typeString(' UN LUGAR UNICO PARA COMPARTIR EN FAMILIA Y AMIGOS.')
  .pauseFor(4000)
  .deleteChars(30)
  .start(50);

document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section"); // Obtén todas las secciones
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link"); // Obtén los enlaces del menú

    let currentSection = ""; // Variable para guardar la sección actual
    sections.forEach((section) => {
        const sectionTop = section.offsetTop; // Distancia de la sección desde la parte superior
        const sectionHeight = section.offsetHeight; // Altura de la sección
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id"); // Obtén el ID de la sección actual
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active"); // Quita la clase activa de todos los enlaces
        if (link.getAttribute("href").includes(currentSection)) {
            link.classList.add("active"); // Agrega la clase activa al enlace correspondiente
        }
    });
});

