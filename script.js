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
});

hamburgerIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
