let input = document.querySelector(".input");
let progress = document.querySelector(".progress");
let counter = document.querySelector(".counter");

let currentOutput = "";

input.addEventListener("input", () => {
  counter.innerHTML = 30 - input.value.length;

  if (counter.innerHTML === "0") {
    counter.classList.add("zero");
  } else {
    counter.classList.remove("zero");
  }

  progress.style.width = `${(input.value.length / 30) * 100}%`;
});
