import { Leon, Lobo, Oso, Serpiente, Aguila } from '../modulo/hijas.js';
import Animal from '../modulo/animal.js'
//Concultar la lista de animales

const getAnimales = (async ()  => {
    let respuesta = await fetch('/animales.json');
    let datos = await respuesta.json();
    console.log(datos)

})();

let animal = document.getElementById('animal');
let edad = document.getElementById('edad');
let comentarios = document.getElementById('comentarios');
let btnRegistrar = document.getElementById('btnRegistrar');

if (animal && edad && comentarios) {
        
} else {
    alert('Por favor, ingresar los datos solicitados');
};

animal.addEventListener('change', () => {
    let animalSeleccionado = animal.value
    let animalResult = Animal.find(animalSeleccionado)
    console.log(animalResult)
    let imagenAnimal = animalResult.img;
    
});
    



btnRegistrar.addEventListener('click', () => {
    let nombre = animal.value 
    let edad = edad.value
    // let img = 
    let comentarios = comentarios.value;
});
