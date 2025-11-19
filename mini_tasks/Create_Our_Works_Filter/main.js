const selections = [...document.querySelectorAll(".switcher li")];
const imgs = [...document.images];
selections.forEach((ele) => {
  // Handle Selection State
  ele.addEventListener("click", (ele) => {
    if (ele.target.classList.contains("active")) {
      console.log("Already Clicked");
    } else {
      selections.forEach((ele) => {
        ele.classList.remove("active");
      });
      ele.target.classList.add("active");

      // Filter Through Images Based On Seletion
      // Fade Out Handling
      imgs.forEach((img) => {
        img.style.opacity = 0;
        setTimeout(() => {
          img.style.display = "none";
        }, 400);
      });
      // Fade In Handling
      document
        .querySelectorAll(`.gallery ${ele.target.dataset.cat}`)
        .forEach((img) => {
          setTimeout(() => {
            img.style.display = "block";

            setTimeout(() => {
              img.style.opacity = 1;
            }, 10);
          }, 400);
        });
    }
  });
});
