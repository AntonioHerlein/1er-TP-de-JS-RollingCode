/*
6 - Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 

input: 15 , 3


Output: El 15 es el número más grande
*/

let num1 = parseInt(prompt("Ingrese un numero"));
let num2 = parseInt(prompt("Ingrese un numero diferente"));

if(num1 > num2){
    document.write("El " + num1 + " es el numero mas grande");
} else if(num2 > num1){
    document.write("El " + num2 + " es el numero mas grande");
} else{
    document.write("Ambos numeros son iguales");
}
