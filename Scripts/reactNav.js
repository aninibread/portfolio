function navEffect() {
  const navSlide = () => {
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
  };
  navSlide();
}

if ($(window).width() < 768) {
  $("nav").addClass("shrink");
  navEffect();
} else {
  $("nav").removeClass("shrink");
}

$(window).on("resize", function () {
  if ($(window).width() < 768) {
    $("nav").addClass("shrink");
    navEffect();
  } else {
    $("nav").removeClass("shrink");
  }
});
