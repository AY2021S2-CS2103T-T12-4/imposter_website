$(document).ready(function() {
  console.log('ready');

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 400) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
    a = new Image()
  };
  
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Handle click events
  $("#main_button").click(function(evt) {
     window.location.href = "https://github.com/AY2021S2-CS2103T-T12-4/tp/releases/download/v1.4/imPoster.jar";
  }); 

  $('#nav_title').click(function(evt) {
      evt.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    },700);
  });
  $('#nav_home').click(function(evt) {
      evt.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    },700);
  });
  $('#nav_features').click(function(evt) {
      evt.preventDefault();
    $('html, body').animate({
      scrollTop: ($('#features').offset().top)
    },700);
  });
  $('#nav_about').click(function(evt) {
      evt.preventDefault();
    $('html, body').animate({
      scrollTop: ($('#about').offset().top)
    },700);
  });
  $('#nav_timeline').click(function(evt) {
      evt.preventDefault();
    $('html, body').animate({
      scrollTop: ($('#timeline').offset().top)
    },700);
  });
  $('#nav_team').click(function(evt) {
      evt.preventDefault();
    $('html, body').animate({
      scrollTop: ($('#team').offset().top)
    },700);
  });
});
