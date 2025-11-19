const tabs = [...document.querySelectorAll(".tabs li")];
const contents = [...document.querySelectorAll(".content div")];

tabs.forEach((tab) => {
  tab.addEventListener("click", (tab) => {
    if (tab.target.classList.contains("active")) {
      tab.target.classList.remove("active");
      contents.forEach((content) => content.classList.remove("active"));
    } else {
      tabs.forEach((tab) => tab.classList.remove("active"));
      tab.target.classList.add("active");

      contents.forEach((content) => content.classList.remove("active"));
      setTimeout(() => {
        document
          .querySelector(`.content ${tab.target.dataset.con}`)
          .classList.add("active");
      }, 250);
    }
  });
});
