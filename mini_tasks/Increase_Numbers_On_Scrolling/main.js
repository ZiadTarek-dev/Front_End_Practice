let nums = document.querySelectorAll(".nums .num");
let sectionThree = document.querySelector("section.three");
let isCompleted = false;

window.onscroll = () => {
  if (window.scrollY > sectionThree.offsetTop - 200) {
    if (!isCompleted) {
      nums.forEach((num) => startCounter(num));
      isCompleted = true;
    }
  }
};

function startCounter(num) {
  let goal = num.dataset.goal;
  let count = setInterval(() => {
    num.textContent++;
    if (num.textContent == goal) {
      clearInterval(count);
    }
  }, 1500 / goal);
}
