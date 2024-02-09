const arrow = document.querySelector(".arrow");
const aboutMe = document.querySelector(".about-me");
const projects = document.querySelector(".projects");

aboutMe.addEventListener("click", (e) => {
  window.scrollTo({
    top: 1960,
    behavior: "smooth",
  });
});

projects.addEventListener("click", (e) => {
  window.scrollTo({
    top: 2860,
    behavior: "smooth",
  });
});
