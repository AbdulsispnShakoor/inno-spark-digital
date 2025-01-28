// const cursor = document.querySelector(".custom-cursor");

// document.addEventListener("mousemove", (e) => {
//   cursor.style.left = `${e.pageX}px`;
//   cursor.style.top = `${e.pageY}px`;
// });

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
  hamburger.classList.toggle("active");
});

// document.addEventListener("mousemove", (e) => {
//   const cursor = document.querySelector(".cursor");
//   const trail = document.querySelector(".cursor-trail");
//   // console.log("x" + e.clientX, "y" + e.clientY);
//   cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
//   trail.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
// });

// tabs start here
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs
    tabs.forEach((t) => t.classList.remove("active"));
    // Add active class to clicked tab
    tab.classList.add("active");

    // Hide all content
    contents.forEach((content) => content.classList.remove("active"));
    // Show content related to the clicked tab
    const activeContent = document.getElementById(tab.dataset.tab);
    activeContent.classList.add("active");
  });
});
// tabs start here

// filtration
document.addEventListener("DOMContentLoaded", () => {
  const filterCards = (category) => {
    const cards = document.querySelectorAll(".custom-card");
    cards.forEach((card) => {
      if (category === "All" || card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    const tabs = document.querySelectorAll(".custom-tab");
    tabs.forEach((tab) => tab.classList.remove("active"));
    document.getElementById(category).classList.add("active");
  };

  document.querySelectorAll(".custom-tab").forEach((tab) => {
    tab.addEventListener("click", () => filterCards(tab.id));
  });
});

// slidder script start here
let index = 0;
const slider = document.getElementById("slider");
const totalSlides = document.querySelectorAll(".testimonial").length;
const visibleSlides = 3;

function updateSlidePosition() {
  const offset = -(index * (100 / visibleSlides));
  slider.style.transform = `translateX(${offset}%)`;
}
function nextSlide() {
  index = (index + 1) % (totalSlides - visibleSlides + 1);
  updateSlidePosition();
}
function prevSlide() {
  index =
    (index - 1 + (totalSlides - visibleSlides + 1)) %
    (totalSlides - visibleSlides + 1);
  updateSlidePosition();
}
setInterval(nextSlide, 8000);
// slidder script end here
