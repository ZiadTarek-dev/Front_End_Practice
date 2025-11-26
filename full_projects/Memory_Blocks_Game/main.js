// ---Global Variables--- //
let cards = [...document.querySelectorAll(".game-body div")];
let moveCount = document.querySelector(".moves span");
let timerEle = document.querySelector(".timer span");
let restart = document.querySelector(".restart");
let timeNow = new Date().getTime();
let current = [];
// ---Global Variables--- //

// ---Main Code--- //
// Call shuffelCardes function On Page load
shuffleCardes();

// Handle In-Page Timer
let t = setInterval(() => {
  timerEle.textContent = timer();
}, 1000);

// Reload The Page When "Restart" Is Clicked
restart.onclick = () => {
  location.reload();
};

// Handle Main Game Logic
// Loop Over Every Card
cards.forEach((card) => {
  // Add Event Listener For Each Card
  card.addEventListener("click", (e) => {
    // Prevent Clicking On Already Active Card
    if (e.target.classList.contains("flipped") !== true) {
      e.target.classList.add("flipped"); // Flip The Card On Click
      current.push(e.target); // Add The Clicked To An Array Called Current So We Can Compare Them Later
      // When Total Clicked Cards Is 2, We Start Comparing The Two Cards
      if (current.length === 2) {
        // If The Two Cards Equal Each Other, Then Leave Them As They Are
        if (current[0].classList[0] === current[1].classList[0]) {
          console.log("Good");
          // If The Two Cards DO NOT Equal Each Other...
        } else {
          console.log("Bad");
          // Loop Over Them...
          current.forEach((ele) => {
            setTimeout(() => {
              ele.classList.remove("flipped"); // And Unflip Them After 600ms So We Can let The Animation Play First
            }, 600);
          });
        }
        moveCount.textContent++; // Increase Total Moves By One For Each Two Cards Pressed
        current = []; // Reset Our Current Array After Each Two Cards, So We Can Start Checking Next Two Cards Again
      }
      // Check If Game Is Ended Every Click
      if (checkGameEnd()) {
        clearInterval(t); // If So, Stop The Timer
        console.log("END");
        let span = document.createElement("span");
        span.className = "lock-layer";
        document.querySelector(".game-body").appendChild(span); // And Make A Lock Layer On "game-body" So User Can't Click Again
      }
    }
  });
});
// ---Main Code--- //

//---My FrameWork---//
function shuffleCardes() {
  let range = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  cards.forEach((card) => {
    let randomIndex = Math.floor(Math.random() * range.length);
    card.style.order = range[randomIndex];
    range.splice(randomIndex, 1);
  });
}

function timer() {
  let timeCurrent = new Date().getTime();
  let diff = timeCurrent - timeNow;
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

function checkGameEnd() {
  let isCompleted = true;
  cards.forEach((card) => {
    if (card.classList.contains("flipped") !== true) {
      isCompleted = false;
    }
  });
  return isCompleted;
}
//---My FrameWork---//
