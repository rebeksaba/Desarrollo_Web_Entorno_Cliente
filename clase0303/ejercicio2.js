// Requisitos:
//....1. Declara una variable con la edad.
//....2. Usa if /else if/ else para clasificar:
//        -Bebe: 0-2
//        -Niño: 3-12
//        -Adolescente: 13-17
//        -Adulto: 18-64
//        -Senior: 65+
//....3. Si la edad es negativa o > 120, muestra error.
//....4. Muestra la clasificación por consola.
//
//*******************************************************

const edad = 25;
if (edad < 0 || edad > 120) {
    console.log("Error: Edad no válida");
} else if (edad <= 2) {
    console.log("Bebé");
} else if (edad <=12) {
    console.log("Niño");
} else if (edad <=17) {
    console.log("Adolescente");
}else if (edad <=64) {
    console.log("Adulto");
}else {
    console.log("Senior");
}



switch (true) {
    case edad < 0 || edad > 120:
        console.log("Error: Edad no válida");
        break;
    case edad <= 2:
        console.log("Bebé");
        break;
    case edad <= 12:
        console.log("Niño");
        break;
    case edad <= 17:
        console.log("Adolescente");
        break;
    case edad <= 64:
        console.log("Adulto");
        break;
    default:
        console.log("Senior");
}
