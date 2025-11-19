function randomColor() {
  const hexa = "0123456789abcdef";
  let myRandomArr = [];

  for (let i = 0; i < 6; i++) {
    myRandomArr.push(hexa[Math.floor(Math.random() * hexa.length)]);
  }
  return myRandomArr.join("");
}
let clickEle = document.querySelector(".click");
let counterEle = document.querySelector(".counter");
const savedClicks = localStorage.getItem("clicks");
let counter = 0;

// Reset clicks from local storage with animation
let i = setInterval(() => {
  +counterEle.textContent++;
  counter++;
  if (counterEle.textContent == savedClicks) {
    clearInterval(i);
  }
}, 10);

// Wait for the animation to end then handle onclick function
setTimeout(() => {
  document.body.style.cursor = "pointer";
  // Set random color on page's background
  document.body.onclick = function () {
    document.body.style.backgroundColor = `#${randomColor()}`;

    // Set random color on both clicker and counter
    let color = `#${randomColor()}`;
    clickEle.style.color = color;
    counterEle.style.color = color;

    counter++;
    counterEle.textContent = counter;
    localStorage.setItem("clicks", `${counter}`);
  };
}, 12 * savedClicks);
