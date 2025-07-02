
  document.addEventListener("DOMContentLoaded", function () {
        // AOS Initialization
        AOS.init({
          duration: 800,
          once: true,
        });

        // Navbar toggler
        const toggler = document.querySelector(".nav-toggler");
        const menu = document.querySelector(".nav-collapse");

        if (toggler && menu) {
          toggler.addEventListener("click", function () {
            toggler.classList.toggle("active");
            menu.classList.toggle("active");
          });
        }

        // Splide Auto Scroll Slider
        new Splide(".myAutoScrollSlider", {
          type: "loop",
          perPage: 3,
          focus: "center",
          arrows: false,
          pagination: false,
          gap: "10px",
          drag: false,
          autoScroll: {
            speed: 2,
            pauseOnHover: false,
            pauseOnFocus: false,
          },
          breakpoints: {
            1024: {
              perPage: 3,
            },
            768: {
              perPage: 2,
            },
            480: {
              perPage: 1,
            },
          },
        }).mount(window.splide.Extensions);
      });




