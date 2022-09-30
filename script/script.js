//Variables y Tipos de Datos:

// "strings"
// 1223334
// true
// false

// alert("hola mundo");

// let nombre = "lucas";
// nombre = "jose";
// alert(nombre);

// let edad = 30;
// let telefono = "930848207";

// let mensajeFinal = "nombre: "+nombre+", Edad: "+edad+", Telefono: "+telefono;

// alert(mensajeFinal);

// let nombre = prompt("Ingrese el nombre");
// let edad = prompt("ingrese su edad");
// let telefono = prompt("ingrese su telefono");

// let mensajeFinal = "nombre: "+nombre+", Edad: "+edad+", Telefono: "+telefono;

// alert(mensajeFinal);



//Operaciones aritméticas:
// let numero = 100;
// numero = (numero + 10 - 5) * 2 / 4.12;
// alert(numero);

//calcular indice de masa corporal
//IMC = peso [kg] / estatura [m2])

// let estatura = prompt("ingresa tu estatura en metros");
// let peso = prompt("ingrese su peso en kg");

// let resultado = peso / estatura;
// alert ("su indice de masa corporal es: "+resultado);

// let contador = 0;
// contador = contador + 1;
// contador++; //suma 1 
// contador--; //dismunuye 1

// contador += 10; //estoy sumando 10 (contacdor + 10)

// contador -= 10; //estoy dismunuyendo 10 (contador - 10)

// contador *= 2; //mutiplicar x2 (contador * 2)

// contador /= 2; //dividir por 2 (contador / 2)

//flujo condicional (if)

// > mayor
// < menor
// >= mayor igual
// <= menor igual
// == igual
// != distinto
// && y además
// || o sino


// let edad = prompt("ingrese su edad:");

// if (edad >= 13) {
//     alert("mayor de edad");
// }else{
//     alert("menor de edad");
// };

// let edad = prompt("ingrese su edad:");
// let estatura = prompt("ingrese su estatura en metros");

// if (edad >= 13) {
//     if (estatura >= 1.2) {
//         alert("puede ingresar al juego");
//     }else{
//         alert("no puede ingresar a juego");
//     }
// }else{
//     alert("no puede ingresar a juego");
// };

// let edad = prompt("ingrese su edad:");
// let estatura = prompt("ingrese su estatura en metros");

// if (edad >= 13 && estatura >= 1.2 ) {
//     alert("puede ingresar al juego");
//     }else{
//         alert("no puede ingresar a juego");
// };

// let edad = prompt("ingrese su edad:");
// let estatura = prompt("ingrese su estatura en metros");
// let hijoDelDueno = prompt("es hijo del dueno?")

// if (edad >= 13 && estatura >= 1.2 || hijoDelDueno.toLocaleLowerCase() =="si") {
//     alert("puede ingresar al juego");
// }else{
//     alert("no puede ingresar a juego");
// };


//funciones
//calcular la superficie de un terreno

// function calcularSuperficie (ancho, alto) {
//     let resultado = ancho * alto;
//     return resultado
// };

// function calcularTerreno() {
//     let inputAncho = prompt("ingresar ancho del terrno en metros");
// let inputAlto = prompt("ingresar alto del terrno en metros");

// let superficieTerreno = calcularSuperficie(inputAncho, inputAlto);
// alert("la superficie dl terreno es:"+superficieTerreno);
// };

// calcularTerreno();
// calcularTerreno();


//calculadora de IMC

// window.onload = iniciar;

// function iniciar () {
//     let btnCalcular = document.getElementById("btnCalcular");
//     btnCalcular.addEventListener("click", clickBtnCalcular);
    
// };

// function clickBtnCalcular () {
//     let txtPeso = document.getElementById("txtPeso");
//     let peso = txtPeso.value;
//     alert(peso);

//     let txtAltura = document.getElementById("txtAltura");
//     let altura = txtAltura.value;
//     alert(altura);

//     let imc = peso / (altura * altura);
//     alert("su imc es: "+Math.round(imc));

// };



//ciclos (for while)

//let contador = 0;

// while (contador < 3) {
//     alert("valor: "+contador);
//     contador++;
// };


//se difere del while es que el do while primer ejecuta el codigo despues pregunta
// do {
//     alert("valor: "+contador);
//     contador++;
// } while (contador < 3);


//calcular la sumatoria de todos los numeros entre 1 y mil
// let sumatoria = 0;
// let contador = 0;

// while (contador <= 1000) {
//     sumatoria += contador
//     contador++;
// };
// alert(sumatoria);





//for:
// for (let i = 0; i < 10; i++) {
//     alert(i);
// };

//mostrar los numeros pares

//para saber si un numero es par hay que dividir 2 si hay sobras es impar, si no hay sobras es par
// ejemplo: 15 %(simbolo de resto) 2 hay sobrapor lo cual es impar
// 10 % 2 sobra 0 por lo cual es un numero par
//10 % 4 sobra 2 numeros, numero impar
//  

// for (let i = 0; i <= 10; i++) {
//     if (i % 2 == 0) {
//         alert("es par: "+i);
//     };
    
// };

//sumar los numeros pares entre 0 y 1000

// let sumatoria = 0;

// for (let i = 0; i < 1000; i++) {
//     if (i % 2 == 0) {
//     sumatoria += 1
//     };
// };

// alert("la sumatoria de numeros pares entre 0 y 1000 es: "+sumatoria);


//matrices:  y arreglos
//matricesguardar muchos datos en una variables

// let nombre = ["lucas", "jose", "maria", "eduardo"];
// alert(nombre[2]);
// alert(nombre[20]);

//agregar valores en un aray vacio:
// let nombre = [];

// nombre[0] = "lucas";
// nombre [1] = "papa";
// nombre [2] = "mama";
// nombre.push("maria");
// nombre.push("eduardo");

// console.log(nombre);


//Recorer un array:
// let nombres = [];

// nombres[0] = "lucas";
// nombres [1] = "papa";
// nombres [2] = "mama";
// nombres.push("maria");
// nombres.push("eduardo");

// for (let i = 0; i < nombres.length; i++) {
//     let nombre = nombres [i];
//     alert(nombre);
    
// };

// for (let nombre of nombres) {
//     alert(nombre);
// };


//ejemplo practico TO DO LIST
// window.onload = iniciar;

// const tareas = [];

// function iniciar () {
//     let btnAgregar = document.getElementById("btnAgregar");
//     btnAgregar.addEventListener("click", clickBtnAgregar);
// };

// function clickBtnAgregar () {
//     let txtTarea = document.getElementById("txtTarea");
//     let tarea = txtTarea.value;
//     tareas.push(tarea);
//     //alert(tareas);
//     mostrarTareas();
// };

// function mostrarTareas() {
//     let listado = document.getElementById("listado");
//     let html = "";
//     for (let tarea of tareas) {
//         html += tarea +"<br/>";
//     };

//     listado.innerHTML = html;

// };





//DEBUG Y DEVTOOLS
//debug serie de herracmientos de google chrome
//ayuda a identificar un error en el codigo


//objetos
//armazenas varios datos en una variable de manera ordenada

// let persona = {
//     "nombre": "lucas",
//     "apellido": "Moyano",
//     "telefono": 93094907,
//     "email": "lucas@gmailcom",
//     "direccion": "avenida rua ",
//     "emple": {
//         "nombre": "programados",
//         "localidad": "espana",
//     } 

// };

// console.log(persona);
// alert(persona.apellido);

// //modificar un elemento dentro del objeto
// persona.telefono = 123345;

// alert(persona.emple.nombre)



//ejemplo practico
// window.onload = iniciar;
// let personas = [];

// function iniciar() {
//     let btnAgregar = document.getElementById("btnAgregar");
//     btnAgregar.addEventListener("click", clickBtnAgregar);

// };


// function clickBtnAgregar () {
//     let nombre = document.getElementById("txtNombre").value;
//     let apellido = document.getElementById("txtApellido").value;
//     let telefono = document.getElementById("txtTelefono").value;
//     let email = document.getElementById("txtEmail").value;

//     let persona = {
//         "nombre": nombre,
//         "apellido": apellido,
//         "telefono": telefono,
//         "email": email
//     };

//     personas.push(persona);
//     mostrarPersonas();

// };

// function mostrarPersonas() {
//     let listado = document.getElementById("listado");
//     let html = "";
//     for (let persona of personas) {
//         html += persona.nombre + " " + persona.apellido + " " + persona.telefono + " " + persona.email + "<br/>";

//     };
//     listado.innerHTML = html;
// };


//LOCALSTORAGE
//armazenamento local, permite guardar todo tipo de dato. 

// window.onload = iniciar;

// function iniciar () {
//     //boton agregar escuhca el click
//     let btnAgregar = document.getElementById("btnAgregar");
//     btnAgregar.addEventListener("click", clickBtnAgregar);

//     //renderizar la nota
//     mostrarNotas ();

// };

// function clickBtnAgregar() {
//     //traermos txtNota
//     let txtNota = document.getElementById("txtNota");
    
//     let notas = [];
//     if (localStorage.notas) {
//         notas = JSON.parse(localStorage.notas);
//     };
    

//     notas.push(txtNota.value);
//     localStorage.nota = JSON.stringify(notas);

//     mostrarNotas ();
// };

// function mostrarNotas () {
//     //trae el div notas
//     let divNotas = document.getElementById("divNotas");

//     //le asigna las notas desde el localStrage
//     let notas = [];
//     if (localStorage.notas) {
//         notas = JSON.parse(localStorage.notas);
//     };

//     let html = "";

//     for (let nota of notas) {
//         html += nota + "<br/>";
//     };
//     divNotas.innerHTML = html;

// };


//TIMERS
//temporizadores para ejecutar una funcion despues de un determinado tiempo

// let mostrarMensaje = ()=> {
//     alert("tiempo completo");
// };

// setTimeout (mostrarMensaje, 3000);

// function mostrarMensaje() {
//     alert("tiempo completo");
// };


// setTimeout(()=>{
//     alert("tiempo completo");
// }, 3000);

// setInterval(()=> alert("tiempo cumplido"), 1000);

// let timer = setInterval(()=> alert("tiempo cumplido"), 1000);

// setTimeout (()=>{
//     clearInterval (timer);
// }, 10 * 1000)


//CREAR UN RELOJ

// setInterval(()=>{
//     let reloj = document.getElementsByClassName("reloj")[0];
//     let tiempoActual = new Date();

//     let hora = tiempoActual.getHours();
//     if (hora < 10) {
//         hora = `0${segundo}`
//     }


//     let minuto = tiempoActual.getMinutes();
//     if (minuto < 10) {
//         minuto = `0${segundo}`
//     }


//     let segundo = tiempoActual.getSeconds();
//     if (segundo < 10) {
//         segundo = `0${segundo}`
//     }

//     reloj.innerHTML = `${hora}:${minuto}:${segundo} `;

// }, 1000);


//FETCH vs AJAX
//


// function cargarJason () {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(jsonCargado);
// };

// function jsonCargado(json) {
//     let spanNombrePost = document.getElementById("txtNombrePost");
//     spanNombrePost.innerHTML = json.title;

//     let spanCompleto = document.getElementById("txtCompleto");
//     if (json.complete) {
//         spanCompleto.innerHTML = "Esta completo";
//     }else{
//         spanCompleto.innerHTML = "Esta incompleto";
//     };
    
//     console.log(json);
// }

// cargarJason ();


































