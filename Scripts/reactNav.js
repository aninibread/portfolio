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

// $(".face1")
//   .parent(".card")
//   .hover(
//     function () {
//       $(this).children(".face2").collapse("show");
//     },
//     function () {
//       $(this).children(".face2").collapse("hide");
//     }
//   );

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

  const button = document.querySelectorAll(".readMore");
  buttons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      let x = e.clientX - e.target.offsetLeft;
      let y = e.clinentY - e.target.offsetTop;

      let ripples = document.createElement("span");
      ripples.style.left = x + "px";
      ripples.style.top = y + "px";
      this.appendChild(ripples);

      setTimeout(() => {
        ripples.remove();
      }, 1000);
    });
  });
}

if ($(window).width() > 940) {
  navTrans();
  navSlide();
  onHover();
}

ssm.addState({
  id: "mobile",
  query: "(max-width: 940px)",
  onEnter: function () {
    $("nav").addClass("shrink");
    navTrans();
    navSlide();
    onHover();
  },
});

ssm.addState({
  id: "desktop",
  query: "(min-width: 940px)",
  onEnter: function () {
    $("nav").removeClass("shrink");
    navTrans();
    navSlide();
    onHover();
  },
});
