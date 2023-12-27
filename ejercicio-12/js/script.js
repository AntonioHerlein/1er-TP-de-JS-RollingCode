/*
9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:

input: Hola mundo
Output: oauo
*/

let frase = prompt("Ingrese una frase y se mostrara solo las vocales");

let largoFrase = frase.length;
let i = 0;

for (i = 0; i < largoFrase; i++) {
if (frase.charAt(i) === "a" || frase.charAt(i) === "e" || frase.charAt(i) === "i" || frase.charAt(i) === "o" || frase.charAt(i) === "u") {
document.write(frase.charAt(i));
}
}