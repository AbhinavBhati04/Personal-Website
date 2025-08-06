const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

// Set Home as active on initial load
document.querySelector('.nav-link[href="index.html"]').classList.add('active');


window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

