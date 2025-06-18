document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const closeBtn = document.getElementById("close-menu");

  menuToggle.addEventListener("click", () => {
    mobileNav.classList.add("active");
    menuToggle.classList.add("hidden"); // hide the hamburger icon
  });

  closeBtn.addEventListener("click", () => {
    mobileNav.classList.remove("active");
    menuToggle.classList.remove("hidden"); // show the hamburger icon again
  });
});
