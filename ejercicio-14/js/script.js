/*
11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
Ejemplo: 

input: 20
input: 210

Output: El 20 es divisible por 2 y por 5.
Output: El 210 es divisible por 2, por 3, por 5 y por 7.
*/

let numIngresado = parseInt(prompt("Ingrese un numero"));

// if (numIngresado % 2 == 0){
//     document.write("El " + numIngresado + " es divisible por 2");
// } else if (numIngresado % 3 == 0){
//     document.write("El " + numIngresado + " es divisible por 3");
// } else if (numIngresado % 5 == 0){
//     document.write("El " + numIngresado + " es divisible por 5");
// } else if (numIngresado % 7 == 0){
//     document.write("El " + numIngresado + " es divisible por 7");
// } else {
//     document.write("El " + numIngresado + " no es divisible por 2, 3, 5 o 7");
// }

if (numIngresado % 2 == 0 || numIngresado % 3 == 0 || numIngresado % 5 == 0 || numIngresado % 7 == 0){

    if (numIngresado % 2 == 0) {
    }
    document.write("El numero ingresado es divisible por 2" + "<br>");
    if (numIngresado % 3 == 0) {
        document.write("El numero ingresado es divisible por 3" + "<br>");
    }
    if (numIngresado % 5 == 0) {
        document.write("El numero ingresado es divisible por 5" + "<br>");
    }
    if (numIngresado % 7 == 0) {
        document.write("El numero ingresado es divisible por 7" + "<br>");
    }
}else{
    document.write("El numero ingresado NO es divisible ni por 2, ni por 3, ni por 5, ni por 7");
}
