// navbar button
const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("#navbar .nav-wrapper ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

// solid nav if scroll
$(window).scroll(function () {
  if ($(window).scrollTop() > 2) $("#navbar").addClass("scroll-nav");
  else $("#navbar").removeClass("scroll-nav");
});
