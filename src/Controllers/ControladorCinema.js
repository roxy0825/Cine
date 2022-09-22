//Declarando arreglos en JS. Un arreglo es una variable especial que me permite almacenar multiples datos es una sola variable.

// let numeros = [5,4,2,3]
// console.log(numeros[2])

// let nombres=Array("rosa","yessica","andres")
// console.log(nombres[0])

//Un objeto es una variable especial que permite que yo almacene multiples datos en una sola variable
// let persona = {
//     nombre:"juan",
//     profesion:"Ingeniero",
//     edad :33,
//     hinchasDelMejor:true,
//     materiasDictadas:["web2","avanzada","nuevas tecnologias"],
//     equiposFavoritos:["nacional", "liverpool"],
//     comida:{
//         nombres:"Bandeja paisa",
//         precio: 25000
//     }
// }
// console.log(persona.edad)
// console.log(persona.materiasDictadas[0])
// console.log(persona.equiposFavoritos[1])
// console.log(persona.comida.precio)

import {peliculas } from "../helper/baseDatos.js"
import {peliculasNuevas } from "../helper/basedatodNueva"

import {pintarPeliculas } from "../helper/pintarPeliculas.js"

//Recorriendo un arreglo en js 

let fila = document.getElementById("fila")
//Llamo a la funcion pintarPeliculas
pintarPeliculas(peliculas)


//Detectando seleccion de una pelicula
let peliculaSeleccionada={}
fila.addEventListener("click",function(evento){
    peliculaSeleccionada.poster=(evento.target.parentElement.querySelector('img').src)
    peliculaSeleccionada.nombre=evento.target.parentElement.querySelector('h1').textContent//nombre
    peliculaSeleccionada.genero=evento.target.parentElement.querySelector('h2').textContent//genero
    peliculaSeleccionada.idioma=evento.target.parentElement.querySelector('h3').textContent//idioma
    peliculaSeleccionada.sinopsis=evento.target.parentElement.querySelector('h4').textContent//sinopsis
    peliculaSeleccionada.director=evento.target.parentElement.querySelector('h5').textContent//director
    peliculaSeleccionada.actores=evento.target.parentElement.querySelector('h6').textContent//actor

    console.log(peliculaSeleccionada)

    //LLAMANDO A LA MEMORIA DEL NAVEGADOR
    localStorage.setItem("peliculaSeleccionada",JSON.stringify(peliculaSeleccionada)) 

    //rederirecciona a otra vista
   window.location.href="./src/views/ampliarInfoPelicula.html"

  
})



peliculasNuevas.forEach(function(peli){
    // console.log(pelicula)
    

    //1. creamos una columna para cada pelicula
    let columna=document.createElement("div")
    columna.classList.add("col")

    //2.Creamos una tarjeta para cada pelicula
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100")

    //3.Creamos una foto para cada pelicula
    let poster=document.createElement("img")
    poster.classList.add("card-img-top")
    poster.src=peli.poster

    //4.Creamos el nombre de la pelicula 
    let nombre = document.createElement("h3")
    nombre.classList.add("card-title")
    nombre.textContent=peli.nombre

    //5.Creamos el genero de cada pelicula 
    let genero = document.createElement("h5")
    genero.classList.add("text-star")
    genero.textContent="Genero:"+peli.genero

    //6.Creamos el idioma de cada pelicula 
    let idioma = document.createElement("h6")
    idioma.classList.add("fw-bold")
    idioma.textContent="Idioma: " + peli.idioma

    //7.Creamos la sinopsis de cada pelicula 
    let sinopsis = document.createElement("p")
    //sinopsis.classList.add("d-none")
    sinopsis.textContent=peli.sinopsis

//7.Creamos el director de cada pelicula
    let director = document.createElement("h6")
    director.classList.add("fw-bold")
    director.textContent="Director: " + peli.director
    

    //7.Creamos los actores de cada pelicula
    let actores = document.createElement("h6")
    actores.classList.add("fw-bold")
    actores.textContent="Actores: " + peli.actores

    //padres e hijos 
    tarjeta.appendChild(poster)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(genero)
    tarjeta.appendChild(idioma)
    tarjeta.appendChild(sinopsis)
    tarjeta.appendChild(director)
    tarjeta.appendChild(actores)

    columna.appendChild(tarjeta)
    fila2.appendChild(columna)



})

//Detectando seleccion de una pelicula
fila2.addEventListener("click",function(){
    alert("Estas seleccionando una pelicula")
})