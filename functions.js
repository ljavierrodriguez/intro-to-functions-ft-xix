/* 

Funciones:

function functionName(param1, param2, ...paramN){
    sentencias
}

const variableName = function(param1, param2, ...paramN){
    sentencias
}

const functionName = (param1, param2, ...paramN) => {
    sentencias
}

const functionName = (param1, param2, ...paramN) => sentencia;

*/

let name = "Luis";



saludo(); // Ejecutando una funcion


function saludo(){ // declarando una funcion
    console.log("Hola desde una funcion");
}


/* function sumar(num1, num2){
    let result = num1 + num2;
    //console.log(result);
    return result;
}

function restar(num1, num2){
    return num1 - num2;
}

function empleado(nombre = "John", apellido = "Doe", direccion = "Elm Street"){
    return `${nombre} ${apellido} vive en: ${direccion}`;
} */
const sumar = function(num1, num2){
    return num1 + num2;
}

/* 
const restar = (num1, num2) => {
    return num1 - num2;
}  
*/

const restar = (num1, num2) => num1 - num2;

/* const empleado = function(nombre = "John", apellido = "Doe", direccion = "Elm Street"){
    return `${nombre} ${apellido} vive en: ${direccion}`;
} */

const empleado = (nombre = "John", apellido = "Doe", direccion = "Elm Street") => {
    return `${nombre} ${apellido} vive en: ${direccion}`;
}

console.log("Resultado Sumar: ", sumar(10, 10));
console.log("Resultado Restar: ", restar(10, 10));
console.log("Resultado Restar: ", restar(20, 10));

console.log("Datos del Empleado: ", empleado())


let nombres = ["Hugo", "Paco", "Luis", "Donald", "Mickey", "Goffy", "Pluto"];
let nombres2 = ["Elsa", "Yurbanis", "Alan", "Ricardo", "Aguntin", "Giannina", "Benjamin"];


function listarAlumnos(callbackfn, students){
    for(let i = 0; i < students.length; i++){
        console.log(callbackfn(students[i]));
    }
}

function studentIdentification(name){
    return `Student: ${name}`;
}


listarAlumnos(studentIdentification, nombres);
listarAlumnos(studentIdentification, nombres2);

listarAlumnos((name) => {
    return `Student: ${name}`;
}, ["Elsa", "Yurbanis", "Alan", "Ricardo", "Aguntin", "Giannina", "Benjamin"]);


function multiplicarPorDos(num){
    console.log(num*2)
}

[1, 2, 3, 4].forEach(multiplicarPorDos)