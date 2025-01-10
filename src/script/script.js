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
