/*
7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 

input: 15 , 3, 9


Output: El 15 es el número más grande
*/

let num1 = parseInt(prompt("Ingrese el 1er numero"));
let num2 = parseInt(prompt("Ingrese el 2do numero"));
let num3 = parseInt(prompt("Ingrese el 3er numero"));



if (num1 > num2 && num1 > num3) {
    document.write("El " + num1 + " es el numero ingresado mas grande");
    
}else if( num2 > num1 && num2 > num3){
    document.write("El " + num2 + " es el numero ingresado mas grande");
} else{
    document.write("El " + num3 + " es el numero ingresado mas grande");
}