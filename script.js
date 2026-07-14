const html = document.documentElement;
const toggle = document.querySelector(".fa-moon");
const hamburgerIcon = document.getElementById("hamburgerIcon");
const navLinks = document.getElementById("navLinks");

toggle.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");

  if (currentTheme === "dark") {
    html.setAttribute("data-theme", "light");
  } else {
    html.setAttribute("data-theme", "dark");
  }

  toggle.classList.toggle("fa-moon");
  toggle.classList.toggle("fa-sun");
});

hamburgerIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  //swap bars icon <-> X icon
  const icon = hamburgerIcon.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
});

//Close mobile menu when a nav link is clicked
document.querySelectorAll(".nav-links .link").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    const icon = hamburgerIcon.querySelector("i");
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-xmark");
  });
});
