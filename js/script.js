const nav = document.querySelector("#nav");
const abrir = document.querySelector("#btn--abrir");
const cerrar = document.querySelector("#btn--cerrar");
const iconsGroup = document.querySelector(".nav__icons");
const background = document.querySelector(".background");
const form = document.querySelector(".formulario");
const mensaje = document.querySelector(".formulario__msj");
const button = document.querySelector(".formulario__btn");

const themes = ["ghost", "rocket", "fire"];

/* Abrir/cerrar la navbar */
abrir.addEventListener("click", () =>{
    nav.classList.add("nav--visible");
})

cerrar.addEventListener("click", () =>{
    nav.classList.remove("nav--visible");
})

/* Cambio de theme */
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

/* manejo de formulario */
if(form){
form.addEventListener("submit", async (evento) => {
  evento.preventDefault();

  mensaje.textContent = "";
  button.disabled = true;
  button.textContent = "Enviando...";

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
      mensaje.textContent = "Mensaje enviado correctamente";
      mensaje.style.color = "green";
      form.reset();
    } else {
      mensaje.textContent = "Error al enviar el mensaje";
      mensaje.style.color = "red";
    }

  } catch (error) {
    mensaje.textContent = "Error de conexión";
    mensaje.style.color = "red";
  } finally {
    button.disabled = false;
    button.textContent = "Enviar";
  }
});
}