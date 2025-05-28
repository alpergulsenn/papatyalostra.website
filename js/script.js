console.log("Papatya Lostra script.js yüklendi.");
const header = document.querySelector("header");
let lastScrollTop = 0;
const scrollThreshold = 50;
if (window.pageYOffset <= scrollThreshold) {
  header.classList.add("header-visible");
}
window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
    header.classList.remove("header-visible");
  } else if (scrollTop < lastScrollTop) {
    header.classList.add("header-visible");
  } else if (scrollTop <= scrollThreshold) {
    header.classList.add("header-visible");
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
const hamburgerButton = document.getElementById("hamburger-menu-button");
const mobileMenuLinks = document.getElementById("mobile-menu-links");
if (hamburgerButton && mobileMenuLinks) {
  hamburgerButton.addEventListener("click", function () {
    mobileMenuLinks.classList.toggle("mobile-menu-visible");
  });
}
