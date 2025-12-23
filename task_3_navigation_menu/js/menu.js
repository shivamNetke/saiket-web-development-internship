const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const themeBtn = document.getElementById("themeBtn");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  themeBtn.textContent = document.body.classList.contains("dark")
    ? "Light Theme"
    : "Dark Theme";
});
