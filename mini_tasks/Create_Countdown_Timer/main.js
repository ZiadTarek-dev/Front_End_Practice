let wantedTime = new Date("Apr 10, 2026 00:00:00").getTime();

let myTimer = setInterval(() => {
  // Get Date Now
  let timeNow = new Date().getTime();

  // Get The Time Difference Between Now and Countdown date
  let diff = wantedTime - timeNow;

  // Get Time Units
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Set Time On Page
  document.querySelector(".days span").innerHTML = days
    .toString()
    .padStart(3, "0");
  document.querySelector(".hours span").innerHTML = hours
    .toString()
    .padStart(2, "0");
  document.querySelector(".minutes span").innerHTML = minutes
    .toString()
    .padStart(2, "0");
  document.querySelector(".seconds span").innerHTML = seconds
    .toString()
    .padStart(2, "0");

  // End Countdown When It Reachs Zero
  if (diff <= 0) {
    clearInterval(myTimer);
  }
}, 1000);
