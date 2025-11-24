/* ---Load Sentences Table To Main.js--- */
let sentences = [];
fetch("./SENTENCES_TABLE.json")
  .then((res) => res.json())
  .then((data) => {
    sentences = data.sentences;
  });
/* ---Load Sentences Table To Main.js--- */

/* ---Global Variables--- */
let display = document.querySelector("#sentence");
let input = document.querySelector("#input");
let startBtn = document.querySelector("#start");
let progressBar = document.querySelector("#progress-bar");
let progressText = document.querySelector("#progress-text");
let footer = document.querySelector(".footer");
let result = document.querySelector(".footer .result");
let currentInput = "";
let timeNow;
/* ---Global Variables--- */

/* ---Main Code--- */
// Start On Click Handling //
startBtn.onclick = function () {
  input.value = "";
  footer.style.opacity = "0";
  display.innerHTML = "";
  display.innerHTML = spanEachLetter(sentences);
  input.removeAttribute("disabled");
  input.focus();
  let letters = [...document.querySelectorAll("#sentence span")];
  letters[0].classList.add("current");
  timeNow = new Date().getTime();
};

// After Pressing Start Button, Start Listening For KeyInputs
input.onkeyup = function () {
  let letters = [...document.querySelectorAll("#sentence span")];
  if (display.innerHTML !== "") {
    currentInput = input.value;
    colorNextLetter(letters);
  }

  // When User Finish, We Check If The Input Is C
  if (isCompleted(currentInput, letters)) {
    input.setAttribute("disabled", "");
    let timeAfter = new Date().getTime();
    result.textContent = calculateWPM(input.value, timeAfter);
    footer.style.opacity = "1";
  }
  progressBarHandler(letters);
};
/* ---Main Code--- */

/* ---FrameWork--- */
// Spanify Every Letter In Given Array
function spanEachLetter(sentences) {
  let sentence = [...sentences[Math.floor(Math.random() * sentences.length)]];

  return sentence
    .map((char) => {
      return `<span>${char}</span>`;
    })
    .join("");
}

// Handle Coloring Based On State
function colorNextLetter(letters) {
  letters.forEach((span, i) => {
    const typedChar = currentInput[i];
    const actualChar = span.textContent;

    // Remove previous current highlight
    span.classList.remove("current");

    if (typedChar == null) {
      // Not typed yet
      span.classList.remove("correct", "wrong");
    } else if (typedChar === actualChar) {
      span.classList.add("correct");
      span.classList.remove("wrong");
    } else {
      span.classList.add("wrong");
      span.classList.remove("correct");
    }
  });

  // Highlight the next letter
  if (letters[currentInput.length]) {
    letters[currentInput.length].classList.add("current");
  }
}

// Function That Returns Boalean Value Based On The Difference Between Main And Current UserInput
function isCompleted(current, mainArray) {
  let completed = false;
  let main = "";
  mainArray.forEach((span) => {
    main += span.textContent;
  });
  if (current === main) {
    completed = true;
  }
  return completed;
}

// For Hanling Progress Bar
function progressBarHandler(spanArray) {
  progressText.textContent = `${Math.floor(
    (currentInput.length / spanArray.length) * 100
  )}%`;
  progressBar.style.width = `${Math.floor(
    (currentInput.length / spanArray.length) * 100
  )}%`;
}

// Calculate words
function calculateWPM(text, timeAfter) {
  let words = text.trim().split(/\s+/).length;
  let minutes = (timeAfter - timeNow) / 60000; // convert ms to minutes
  return `${Math.round(words / minutes)} WPM`;
}
/* ---FrameWork--- */
