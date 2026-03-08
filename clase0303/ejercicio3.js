//Requisitos:
//....1. Crea un array con al menos 8 notas (0-10).
//....2. Calcula la media aritmética iusando .reduce().
//....3. Obtén la nota máxima con Math.max(...array).
//....4. Obtén la nota mínima con Math.min(...array).
//....5. Cuenta cuantas notas son >=5 usando .filter().
//....6. Clasifica el rendimiento según la media:
//...........Suspenso (<5), Aprobado (5-6.99),
//...........Notable (7-8.99), Sobresaliente (9-10).
//....7. muestra un resumen completo por consola.
//*******************************************************

const notas = [2, 6, 9, 7, 0, 5, 10, 8];

let suma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
let promedio = suma / notas.length;
let notaMax = Math.max(...notas)
let notaMin = Math.min(...notas)
let upTo5 = notas.filter((nota) => nota >=5).length

if (promedio < 5) {
    console.log("Suspenso");
} else if (promedio >= 5 && promedio < 7) {
    console.log("Aprobado");
} else if (promedio >= 7 && promedio < 9) {
    console.log("Notable");
} else {
    console.log("Sobresaliente");
}

console.log(`Promedio: ${promedio.toFixed(2)}`);
console.log(`Nota máxima: ${notaMax}`);
console.log(`Nota mínima: ${notaMin}`);
console.log(`Notas >= 5: ${upTo5}`);
console.log(`Rendimiento: ${rendimiento}`);
