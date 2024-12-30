const hamburger = document.querySelector(".fa-bars");
export const leftMenu = document.createElement("div");

hamburger.addEventListener("click", () => {
   toggleLeftMenu();
});

document.addEventListener("click", (event) => {
   if (!leftMenu.contains(event.target) && !hamburger.contains(event.target) && leftMenu.classList.contains("show")) {
      closeLeftMenu();
   }
});

const toggleLeftMenu = () => {
   if (leftMenu.classList.contains("hide")) {
      leftMenu.classList.remove("animate__slideOutLeft");
      leftMenu.classList.add("animate__slideInLeft");
      leftMenu.classList.remove("hide");
      leftMenu.classList.add("show");
   } else {
      closeLeftMenu();
   }
};

const closeLeftMenu = () => {
   leftMenu.classList.remove("animate__slideInLeft");
   leftMenu.classList.add("animate__slideOutLeft");
   setTimeout(() => {
      leftMenu.classList.remove("show");
      leftMenu.classList.add("hide");
   }, 850);
};

leftMenu.classList.add("left-menu", "hide", "animate__animated");