let generate = document.querySelector(".generate");
generate.onclick = function () {
  // Handling button animation
  this.classList.add("active");
  setTimeout(() => {
    this.classList.remove("active");
  }, 200);

  let display = document.querySelector(".serial");

  // Looping over chars variable and add random values to display
  const chars =
    "01234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%";
  const range = 16;
  display.textContent = "";
  for (let i = 0; i < range / 4; i++) {
    for (let k = 0; k < range / 4; k++) {
      display.textContent += chars[Math.floor(Math.random() * chars.length)];
    }
    i < range / 4 - 1 ? (display.textContent += "-") : null;
  }
};
