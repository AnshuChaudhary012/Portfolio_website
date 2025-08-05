const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");

  const newTheme = currentTheme === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", newTheme);

  toggleBtn.textContent = newTheme === "dark" ? "🌞" : "🌙";
});
