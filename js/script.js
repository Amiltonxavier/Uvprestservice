document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".toggle-button");
  const overlay = document.querySelector(".overlay");
  const navbar = document.querySelector(".navbar");
  const navbarLinks = document.querySelectorAll(".navbar-links a");

  // Função para fechar o menu
  function closeMenu() {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  }

  toggleButton.addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", function () {
    closeMenu();
  });

  // Adiciona um ouvinte de evento de clique para cada link do menu
  navbarLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      closeMenu();
    });
  });
});

//Mudar de cor navbar

document.addEventListener("DOMContentLoaded", function () {
  const navbarLinks = document.querySelectorAll(".navbar-links a");

  function highlightNavItem() {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    navbarLinks.forEach(function (link) {
      const sectionId = link.getAttribute("href").substring(1);
      const section = document.getElementById(sectionId);

      if (section) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          navbarLinks.forEach(function (link) {
            link.classList.remove("active-section");
          });

          link.classList.add("active-section");
        }
      }
    });
  }

  document.addEventListener("scroll", highlightNavItem);
  window.addEventListener("resize", highlightNavItem);
});

//Button back to Top
document.addEventListener("DOMContentLoaded", function () {
  var backToTopButton = document.getElementsByClassName("back-to-top");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
