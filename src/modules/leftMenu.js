const hamburger = document.querySelector(".fa-bars");
export const leftMenu = document.createElement("div");

hamburger.addEventListener("click", () => {
   if (leftMenu.classList.contains("hide")) {
      leftMenu.classList.remove("animate__slideOutLeft");
      leftMenu.classList.add("animate__slideInLeft");
      leftMenu.classList.remove("hide");
      leftMenu.classList.add("show");
   } else {
      leftMenu.classList.remove("animate__slideInLeft");
      leftMenu.classList.add("animate__slideOutLeft");
      setTimeout(() => {
         leftMenu.classList.remove("show");
         leftMenu.classList.add("hide");
      }, 850);
   }
});

leftMenu.classList.add("left-menu", "hide", "animate__animated");