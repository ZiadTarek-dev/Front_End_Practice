let sectionThree = document.querySelector("section.three");
let progressSpan = [...document.querySelectorAll(".skills .progress span")];

window.onscroll = () => {
  if (window.scrollY > sectionThree.offsetTop - 250) {
    progressSpan.forEach((prog) => {
      prog.style.width = prog.dataset.width;
    });
  }
};
