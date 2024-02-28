import { Leon, Lobo, Oso, Serpiente, Aguila } from "../modulo/hijas.js";
import Animal from "../modulo/animal.js";
//Concultar la lista de animales

const getAnimales = (async () => {
  let respuesta = await fetch("/animales.json");
  let { animales } = await respuesta.json();
  return animales;
})();

let animal = document.getElementById("animal");
let edadSelect = document.getElementById("edad");
let comentariosSelect = document.getElementById("comentarios");
let btnRegistrar = document.getElementById("btnRegistrar");
let preview = document.getElementById("preview");

animal.addEventListener("change", async () => {
  let animalSeleccionado = animal.value;
  let animales = await getAnimales;

  let animalResult = animales.find(
    (animal) => animal.name == animalSeleccionado
  );

  preview.style.backgroundImage = `url(./assets/imgs/${animalResult.imagen})`;
});

btnRegistrar.addEventListener("click", async () => {
  let nombre = animal.value;
  let edad = edadSelect.value;
  let animalSeleccionado = animal.value;
  let animales = await getAnimales;

  let imagenResult = animales.find(
    (animal) => animal.name == animalSeleccionado
  );
  console.log(imagenResult.imagen);
  let comentarios = comentariosSelect.value;
  let img = `.assets/imgs/${imagenResult.imagen}`;
  let sonido = `.assets/sounds/${imagenResult.sonido}`;

  if (animal && edad && comentarios) {
    if (animal.value == "Leon") {
      let LeonObjeto = new Leon(nombre, edad, img, comentarios, sonido);
    } else if (animal.value == "Lobo") {
      let LoboObjeto = new Lobo(nombre, edad, img, comentarios, sonido);
    } else if (animal.value == "Oso") {
      let OsoObjeto = new Oso(nombre, edad, img, comentarios, sonido);
    } else if (animal.value == "Serpiente") {
      let SerpienteObjeto = new Serpiente(
        nombre,
        edad,
        img,
        comentarios,
        sonido
      );
    } else if (animal.value == "Aguila") {
      let AguilaObjeto = new Aguila(nombre, edad, img, comentarios, sonido);
    }
  } else {
    alert("Por favor, ingresar los datos solicitados");
  }
});
