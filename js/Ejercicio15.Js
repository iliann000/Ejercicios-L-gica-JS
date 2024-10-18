/*Validación de entrada:*/
let entrada = prompt("Ingresa un número:");
if (!isNaN(entrada)) {
    console.log("Has ingresado el número:", entrada);
} else {
    console.log("Error: No has ingresado un número válido.");
}
