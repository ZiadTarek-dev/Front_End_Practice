// Collect all images inside the slider container and convert NodeList to Array
let sliderImages = Array.from(
  document.querySelectorAll(".slider-container img"),
);

// Total number of slides
let slidesCount = sliderImages.length;

// Track the currently active slide (1-based index)
let currentSlide = 1;

// Elements for displaying slide number and navigation buttons
let sliderNumberElement = document.getElementById("slide-number");
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");

// Attach click events to navigation buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create the pagination <ul> element
let paginationElement = document.createElement("ul");

// Assign an id to the pagination list
paginationElement.setAttribute("id", "pagination-ul");

// Create pagination items based on the number of slides
for (let i = 1; i <= slidesCount; i++) {
  let paginationItem = document.createElement("li");

  // Store slide index as a data attribute
  paginationItem.setAttribute("data-index", i);

  // Display slide number inside the pagination item
  paginationItem.appendChild(document.createTextNode(i));

  // Add pagination item to the pagination list
  paginationElement.appendChild(paginationItem);
}

// Add the pagination list to the indicators container
document.getElementById("indicators").appendChild(paginationElement);

// Get the created pagination <ul>
let paginationCreatedUl = document.getElementById("pagination-ul");

// Initialize the slider state
checker();

// Add click event to each pagination item
Array.from(paginationCreatedUl.children).forEach((ele) => {
  ele.addEventListener("click", () => {
    // Set current slide based on clicked pagination number
    currentSlide = +ele.textContent;
    checker();
  });
});

// Move to the next slide
function nextSlide() {
  if (currentSlide < slidesCount) {
    ++currentSlide;
    checker();
  }
}

// Move to the previous slide
function prevSlide() {
  if (currentSlide > 1) {
    --currentSlide;
    checker();
  }
}

// Main function that updates slider state
function checker() {
  // Remove active class from all images
  sliderImages.forEach((img) => {
    img.classList.remove("active");
  });

  // Update slide counter text
  sliderNumberElement.textContent =
    "Slide " + currentSlide + " / " + slidesCount;

  // Activate the current slide image
  sliderImages[currentSlide - 1].classList.add("active");

  // Remove active class from all pagination items
  Array.from(paginationCreatedUl.children).forEach((ele) => {
    ele.classList.remove("active");
  });

  // Activate the current pagination item
  paginationCreatedUl.children[currentSlide - 1].classList.add("active");

  // Enable both navigation buttons by default
  prevButton.classList.remove("disabled");
  nextButton.classList.remove("disabled");

  // Disable next button if on last slide
  if (currentSlide === slidesCount) {
    nextButton.classList.add("disabled");
  }
  // Disable previous button if on first slide
  else if (currentSlide === 1) {
    prevButton.classList.add("disabled");
  }
}
