//736
let myEle = document.querySelector(".up");

myEle.addEventListener("click", () => scrollTo("smooth", 0));

window.onscroll = () =>
  window.scrollY > 736
    ? myEle.classList.add("active")
    : myEle.classList.remove("active");
