/*
8.- Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo: 

input: 10
input: 15
Output: El 10 es divisible por 2.
Output: El 15 no es divisible por 2.
*/

let numIngresado = parseInt(prompt("Ingrese un numero entero"));
let resto = numIngresado % 2;

if (resto == 0) {
    document.write("El " + numIngresado + " es divisible por 2");
} else {
    document.write("El " + numIngresado + " no es divisible por 2");
}