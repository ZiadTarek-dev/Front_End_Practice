let toggleBtn = document.querySelector(".toggle");
let nav = document.querySelector("nav");
toggleBtn.onclick = function navHandle() {
  this.classList.toggle("active");
  nav.classList.toggle("active");
};
