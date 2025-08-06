// ============================
// Section-Based Nav Highlighting
// ============================

// Grab all sections and nav links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

// Mark 'Home' as active by default
document.querySelector('.nav-link[href="index.html"]').classList.add('active');

window.addEventListener("scroll", () => {
  let currentSectionId = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    // Check if section is currently in view
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSectionId = section.getAttribute("id");
    }
  });

  // Highlight the active nav link
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(currentSectionId)) {
      link.classList.add("active");
    }
  });
});


// ============================
// Slide-Out Mobile Menu Toggle
// ============================

// Toggle hamburger side menu open/close
function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  menu.style.width = (menu.style.width === "250px") ? "0" : "250px";
}

// Close side menu (on link click)
function closeMenu() {
  document.getElementById("sideMenu").style.width = "0";
}
