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
    if ($(this).scrollTop() > $("header").height() - 450) {
      $("nav").addClass("black");
      $(".navbrand img").attr("src", "./Version15.png");
    } else {
      $("nav").removeClass("black");
      element = document.querySelector("nav");
      if (!element.classList.contains("shrink")) {
        $(".navbrand img").attr("src", "./Version16.png");
      }
    }
  });
}

function onHover() {
  $(".face1")
    .parent(".card")
    .hover(
      function () {
        $(this).children(".face2").fadeIn();
      },
      function () {
        $(this).children(".face2").fadeOut();
      }
    );
}

function togglePopup(id) {
  switch (id) {
    case "pop1":
      document.getElementById("popup-1").classList.toggle("active");
      break;
    case "pop2":
      document.getElementById("popup-2").classList.toggle("active");
      break;
    case "pop3":
      document.getElementById("popup-3").classList.toggle("active");
      break;
    case "pop4":
      document.getElementById("popup-4").classList.toggle("active");
      break;
  }
}

if ($(window).width() > 920) {
  navTrans();
  navSlide();
  onHover();
}

ssm.addState({
  id: "mobile",
  query: "(max-width: 920px)",
  onEnter: function () {
    $("nav").addClass("shrink");
    navTrans();
    navSlide();
    onHover();
    $(".navbrand img").attr("src", "./Version15.png");
  },
});

ssm.addState({
  id: "desktop",
  query: "(min-width: 920px)",
  onEnter: function () {
    $("nav").removeClass("shrink");
    navTrans();
    navSlide();
    onHover();
    $(".navbrand img").attr("src", "./Version16.png");
  },
});
