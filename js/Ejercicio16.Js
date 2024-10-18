/*Palíndromos:*/
let palabra = prompt("Ingresa una palabra:");
if (palabra === palabra.split('').reverse().join('')) {
    console.log("La palabra es un palíndromo.");
} else {
    console.log("La palabra no es un palíndromo.");
}