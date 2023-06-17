const nav = document.querySelector(".navbar");
const btn = document.querySelector(".go2Top");
const aboutSec = document.getElementById("about");
const servicesSec = document.getElementById("services");

window.onscroll = function () {
  // Handle Navbar backgroundColor When Scroll
  if (window.scrollY >= 300) {
    nav.classList.remove("bg-transparent");
    nav.style.backgroundColor = "rgb(0 0 0 / 92%)";
  }

  // Show/Hide Back To Top Btn
  if (this.scrollY >= 600) {
    btn.style.display = "flex";
  } else {
    btn.style.display = "none";
  }
};

// TypeWritter Effect
let typed_strings = document
  .querySelector(".typed")
  .getAttribute("data-typed-items");
typed_strings = typed_strings.split(",");
let typed = new Typed(".typed", {
  strings: typed_strings,
  typeSpeed: 90,
  startDelay: 100,
  backSpeed: 80,
  loop: true,
});

// Back To Top Button
btn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
