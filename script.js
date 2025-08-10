
// creating dark and light mode and switching the icon of the sun and moon 

const toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", () => {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");

  const newTheme = currentTheme === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", newTheme);

  toggleBtn.textContent = newTheme === "dark" ? "🌞" : "🌙";
});

// create motion effect in the hero section
const texts = [
      " react.js",
      " JavaScript",
      " & solving problems"
    ];

    let count = 0;
    let index = 0;
    let currentText = '';
    let isDeleting = false;

    function typeEffect() {
      const element = document.getElementById('paraOfHero');

      if (count === texts.length) {
        count = 0;
      }

      currentText = texts[count];

      if (isDeleting) {
        index--;
      } else {
        index++;
      }

      element.textContent = currentText.slice(0, index);

      if (!isDeleting && index === currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000); // pause before deleting
      } else if (isDeleting && index === 0) {
        isDeleting = false;
        count++;
        setTimeout(typeEffect, 500); // pause before typing next
      } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100); // typing/deleting speed
      }
    }

    typeEffect();

              // year in the footer
        document.querySelector('.copyright').textContent = 
            `© ${new Date().getFullYear()} Anshu. All rights reserved.`;