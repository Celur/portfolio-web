const nav = document.querySelector("#nav");
const abrir = document.querySelector("#btn--abrir");
const cerrar = document.querySelector("#btn--cerrar");

abrir.addEventListener("click", () =>{
    nav.classList.add("nav--visible");
})

cerrar.addEventListener("click", () =>{
    nav.classList.remove("nav--visible");
})

const iconsGroup = document.querySelector(".nav__icons");
const background = document.querySelector(".background");

const themes = ["ghost", "rocket", "fire"];

iconsGroup.addEventListener("change", (e) => {
  if (e.target.name === "option") {
    
    // limpiar temas anteriores
    themes.forEach(theme => {
      background.classList.remove(`background--${theme}`);
    });

    // agregar nuevo tema
    background.classList.add(`background--${e.target.value}`);
  }
});