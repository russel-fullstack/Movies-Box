const menuToggle = document.querySelector(".menu-burger");
const menuHidden = document.querySelector(".menu-caché");
const liste = document.querySelector(".liste");
const links = document.querySelectorAll(".link");

menuToggle.addEventListener("click", () => {
  menuHidden.classList.toggle("remov");
});
menuHidden.addEventListener("click", () => {
  menuHidden.classList.toggle("remov");
});

