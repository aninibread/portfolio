function transNav() {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > $("header").height() - 300) {
      $("nav").addClass("black");
    } else {
      $("nav").removeClass("black");
    }
  });
}
