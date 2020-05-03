function navSlide() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.4
        }s`;
      }
    });
    burger.classList.toggle("toggle");
  });
}

function navTrans() {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > $("header").height() - 300) {
      $("nav").addClass("black");
    } else {
      $("nav").removeClass("black");
    }
  });
}

if ($(window).width() > 768) {
  navTrans();
  navSlide();
}

ssm.addState({
  id: "mobile",
  query: "(max-width: 767px)",
  onEnter: function () {
    $("nav").addClass("shrink");
    navSlide();
  },
});

ssm.addState({
  id: "desktop",
  query: "(min-width: 767px)",
  onEnter: function () {
    $("nav").removeClass("shrink");
    navTrans();
    navSlide();
  },
});

ssm.ready();
