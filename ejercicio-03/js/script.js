/*
Ejercicio 3: Conversión de Grados Celsius a Fahrenheit

Crea una variable llamada gradosCelsius y asígnale un valor en grados Celsius. Luego, utiliza la fórmula de conversión para calcular los grados Fahrenheit y almacénalos en una variable llamada gradosFahrenheit. Muestra ambos valores en la pantalla.
*/

let gradosCelsius = 25;
let gradosFahrenheit;

/* Formula de Grados Celcius a Fahrenheit = (grados centígrados × 9/5) +32. */
gradosFahrenheit = (gradosCelsius * (9/5)) +32;

document.write(gradosFahrenheit + " grados Fahrenheit");