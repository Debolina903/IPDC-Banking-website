
  document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".nav-toggler");
    const menu = document.querySelector(".nav-collapse");

    toggler.addEventListener("click", function () {
      toggler.classList.toggle("active");
      menu.classList.toggle("active");
    });
  });



