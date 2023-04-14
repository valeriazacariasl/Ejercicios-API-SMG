/* 1- 
 * Enunciado: Dado un array de enteros ordenado y sin repetidos, 
 * crea una función que calcule y retorne todos los que faltan entre
 * el mayor y el menor.
 * - Lanza un error si el array de entrada no es correcto.
 */

const encontrarNumFaltantes = (array) => {
    if (!Array.isArray(array) || array.length <= 2) {
        return "Error: Debes ingresar un array con al menos 2 elementos";
    }
    const min = array[0];
    const max = array[array.length - 1];
    const resultado = [];

    for (let i = min + 1; i < max; i++) {
        if (!array.includes(i)) {
            resultado.push(i);
        }
        // Si el indice no esta incluido en el array, se lo añade
    }
    return resultado;
}

console.log(encontrarNumFaltantes([1, 2, 10]));

/* 2- 
 * Crea una función que ordene y retorne una matriz de números.
 * - La función recibirá un listado (por ejemplo [2, 4, 6, 8, 9]) y un parámetro
 *   adicional "Asc" o "Desc" para indicar si debe ordenarse de menor a mayor
 *   o de mayor a menor.
 * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan
 *   automáticamente.
 */


const ordenarArray = (array, orden) => {
    let compararFunc;

    if (orden === "Asc") {
        compararFunc = (a, b) => {
            return a - b
        }
    } else if (orden === "Desc") {
        compararFunc = (a, b) => {
            return b - a
        };
    } else {
        return array;
    }

    array.sort(compararFunc);

    return array;
};
//(a,b)mi función me devuelve un número negativo si el primer argumento (a) es menor que el segundo argumento (b), lo que le dice que a tiene que estar antes que b en el orden. Por otro lado, devuelve un número positivo si a es mayor que b, lo que dice que b tiene que estar antes que a en el orden. Si mi funcion devuelve un num negativo sort los deja en su posicion actual, si es positivo intercambia esos elementos
const miArray = [2, 3, 5, 6, 7, 1]
console.log(ordenarArray(miArray, "Asc"));
console.log(ordenarArray(miArray, "Desc"));

// sort: para ordenar numéricamente es necesario una función de comparación que especifique cómo se deben comparar los elementos.La función de comparación recibe dos parámetros, que representan los elementos que se están comparando, y devuelve un valor que indica si el primer elemento es menor, igual o mayor que el segundo elemento.Si el valor de retorno es negativo, el primer elemento debe ir antes que el segundo elemento en la ordenación, si el valor de retorno es cero, los elementos son iguales y si el valor de retorno es positivo, el segundo elemento debe ir antes que el primer elemento en la ordenación.

/*4-
 * Crea dos funciones, una que calcule el máximo común divisor (MCD) y otra
 * que calcule el mínimo común múltiplo (mcm) de dos números enteros.
 * - No se pueden utilizar operaciones del lenguaje que 
 *   lo resuelvan directamente.
 */


//Uso el algoritmo euclides
const calcularMCD = (a, b) => {
    let resto;
    while (b !== 0) {
        resto = a % b;
        a = b;
        b = resto;
    }
    return a;
}
//asigno el valor de b a a para mover el num más chico al principio y les asigno el resto a b para continuar calculando, hasta que b no sea 0 va a seguir funcionando

console.log(calcularMCD(5,25));

const calcularMCM = (a, b) => {
    return (a * b) / calcularMCD(a, b);
}

console.log(calcularMCM(12,32));

/* 5-
 * Crea una función que reciba días, horas, minutos y segundos (como enteros)
 * y retorne su resultado en milisegundos.
 */

const convertirAMilisegundos = (dias, horas, minutos, segundos) => {
    const milisegPorSegundo = 1000;
    const milisegPorMinuto = 60 * milisegPorSegundo;
    const milisegPorHora = 60 * milisegPorMinuto;
    const milisegPorDia = 24 * milisegPorHora;

    // Convertir los tiempos a milisegundos
    const diasEnMs = dias * milisegPorDia;
    const horasEnMs = horas * milisegPorHora;
    const minutosEnMs = minutos * milisegPorMinuto;
    const segundosEnMs = segundos * milisegPorSegundo;

    // Sumar los tiempos en milisegundos
    const totalMs = diasEnMs + horasEnMs + minutosEnMs + segundosEnMs;

    return totalMs;
}


console.log(convertirAMilisegundos(1, 2, 30, 15));

/* 6-
 * Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente. son sin usar metodos o funciones
 */

const convertirPrimeraLetMayus = (string) => {

    const palabras = string.split(" "); //divido las palabras y creo un array con cada palabra

    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i][0].toUpperCase() + palabras[i].substr(1); //el primer caracter [0]de cada palabra lo convierto en mayusucla, uso el substr(1) para obtener el resto de la palabra despues del primer caracter
    }
 
    return palabras.join(" "); //se unen los array 
}


console.log(convertirPrimeraLetMayus("murcielago"));