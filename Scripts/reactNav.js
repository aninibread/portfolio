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
          index / 5 + 0.8
        }s`;
      }
    });
    burger.classList.toggle("toggle");
  });
}

function navTrans() {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > $("header").height() - 335) {
      $("nav").addClass("black");
    } else {
      $("nav").removeClass("black");
    }
  });
}

$(".panel-heading").mouseenter(function () {
  $(".panel-collapse").fadeIn();
});
$(".panel-collapse").mouseleave(function () {
  $(".panel-collapse").fadeOut();
});

if ($(window).width() > 940) {
  navTrans();
  navSlide();
}

ssm.addState({
  id: "mobile",
  query: "(max-width: 940px)",
  onEnter: function () {
    $("nav").addClass("shrink");
    navTrans();
    navSlide();
  },
});

ssm.addState({
  id: "desktop",
  query: "(min-width: 940px)",
  onEnter: function () {
    $("nav").removeClass("shrink");
    navTrans();
    navSlide();
  },
});
