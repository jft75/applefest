$(document).ready(function () {
  //if window opens as wide as 870px
  if (window.matchMedia("(max-width: 870px)").matches) {
    //remove .hidden from #nav-button
    $("#nav-button").removeClass("hidden");
    //add .hidden to #nav
    $("#nav").addClass("hidden");
  }
  //if window opens as wider than 870px
  else {
    //remove .hidden from #nav
    $("#nav").removeClass("hidden");
    //add .hidden to #nav-button
    $("#nav-button").addClass("hidden");
  }
});

$(window).on("resize", function () {
  //if window is resized to up to as wide as 870px
  if (window.matchMedia("(max-width: 870px)").matches) {
    //remove .hidden from #nav-button
    $("#nav-button").removeClass("hidden");
    //add .hidden to #nav
    $("#nav").addClass("hidden");
  }
  //if window is resized to wider than 870px
  else {
    //remove .hidden from #nav
    $("#nav").removeClass("hidden");
    //add .hidden to #nav-button
    $("#nav-button").addClass("hidden");
  }
});

// when #nav-button is clicked:
$("#nav-button").on("click", function () {
  // if #nav is hidden:
  if ($("#nav").hasClass("hidden")) {
    //remove .hidden from #nav
    $("#nav").removeClass("hidden");
  }
  //if #nav is not hidden
  else {
    //add .hidden to #nav
    $("#nav").addClass("hidden");
  }
});
