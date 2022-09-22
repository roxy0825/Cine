//PREGUNTANDO POR UN DATO QUE ESTA ALMACENADO EN MEMORIA

let datosPeliculasSeleccionada=JSON.parse(localStorage.getItem("peliculaSeleccionada"))

console.log(datosPeliculasSeleccionada)

let poster=datosPeliculasSeleccionada.poster
let nombre=datosPeliculasSeleccionada.nombre
let genero=datosPeliculasSeleccionada.genero
let idioma=datosPeliculasSeleccionada.idioma
let sinopsis=datosPeliculasSeleccionada.sinopsis
let director=datosPeliculasSeleccionada.director
let actor=datosPeliculasSeleccionada.actor




//CARGANDO DATOS
let foto = document.getElementById("foto")
foto.src=poster

let titulo = document.getElementById("titulo")
titulo.textContent=nombre

let generoPelicula = document.getElementById("genero")
generoPelicula.textContent=genero

let idiomaPelicula = document.getElementById("idioma")
idiomaPelicula.textContent=idioma

let sinopsisPelicula = document.getElementById("sinopsis")
sinopsisPelicula.textContent=sinopsis

let directorPelicula = document.getElementById("director")
directorPelicula.textContent=director

let actorPelicula = document.getElementById("actor")
actorPelicula.textContent=actor
