// Archivo js para probar los errores de la actividad 2.7

// Ejercicio 1

/*
let a = 5;
let b = 10;
let result = a + b;
console.log("Resultado es: " + result);
*/

// Ejercicio 2

let edad = 16;
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}


// Ejercicio 3

function multiplicar(a, b) {
    let ofthejedi= a * b;
    return ofthejedi;
}
 
let total = multiplicar(3, 4);
console.log("Total: " + total);

// Ejercicio 4

function saludar(nombre) {
    console.log("Hola " + nombre);
}
 
saludar("Ana");


// Ejercicio 5

let numeros = [1, 2, 3, 4];
let suma = 0;
 
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}
 
console.log("Suma total: " + suma);

// Ejercicio 6

function esPar(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
 
console.log(esPar(3));
console.log(esPar(4));

// Ejercicio 7
function procesarDatos(datos, callback) {
    callback(datos);
}
 
procesarDatos([1,2,3], function(d) {
    console.log("Datos recibidos:", d);
});

// Ejercicio 8 se encuentra en el HTML del repo llamado 2.7.8.html

// Ejercicio 9

function calcularPrecio(base, descuento) {
    let precioFinal = base;
    if (descuento) {
        precioFinal = base - base * descuento;
    }
    return precioFinal.toFixed(2);
}
 
console.log(calcularPrecio(100, 0.2));
console.log(calcularPrecio(100, 60));




