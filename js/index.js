
  document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".navbar-toggler");
    const menu = document.querySelector(".nav-collapse");

    toggler.addEventListener("click", function () {
      menu.classList.toggle("active");
    });
  });

