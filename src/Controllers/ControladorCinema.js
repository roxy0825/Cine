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

let peliculas = [
    {
        nombre:"Tren Bala",
        genero:"Acción",
        duracion:220,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinerg-2ad15.appspot.com/o/1.jpg?alt=media&token=5868913c-86b2-4681-b5aa-a0048f4579c3",
        sinopsis:"Cinco asesinos a sueldo se encuentran a bordo de un tren bala que viaja de Tokio a Morioka. Los sicarios descubrirán que sus misiones no son ajenas entre sí.",
        clasificación:"+18",
        idioma:"English"

    },
    {
        nombre:"After",
        genero:"Romance",
        duracion:"1h 45mn",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinerg-2ad15.appspot.com/o/10.png?alt=media&token=3d5c692c-a9a2-4072-ae94-2de8267c21c3",
        sinopsis:"Tessa Young acaba de llegar a la universidad, y su estable y ordenada vida da un giro busco al conocer al misterioso Hardin Scott, cuyo pasado es algo oscuro. Aunque de entrada se odian, estos polos opuestos se unirán y nada volverá a ser como antes",
        clasificación:"Adulto",
        idioma:"Español"
    },
    {
        nombre:"Invitación al infierno",
        genero:"Terror",
        duracion:"120",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinerg-2ad15.appspot.com/o/11.png?alt=media&token=80f703d2-e4ba-485c-a386-04191c289ebd",
        sinopsis:"Tras la muerte de su madre y quedarse sin parientes conocidos, Evie se hace un test de ADN… y descubre a un primo lejano que nunca supo que tuvo. Al ser invitada por su recién encontrada nueva familia a una fastuosa boda en la campiña inglesa, se verá pronto seducida por el sexy aristócrata anfitrión.",
        clasificación:"+18",
        idioma:"Español" 
    },
    {
        nombre:"Gemelo siniestro ",
        genero:"Terror",
        duracion:"105",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinerg-2ad15.appspot.com/o/2.png?alt=media&token=5828cf5c-ccca-4cfd-a498-8e2a2c0eb0d6",
        sinopsis:"Tras la muerte de uno de sus hijos gemelos, Rachel y Anthony se instalan en el campo escandinavo para sanar las heridas anímicas. Allí, sin embargo, ella descubre que una fuerza sobrenatural y maligna quiere llevarse al pequeño que le queda.",
        clasificación:"+18",
        idioma:"Español"
    },
    {
        nombre:"Thor love and thurder ",
        genero:"Accion/Aventura",
        duracion:"159",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinerg-2ad15.appspot.com/o/3.png?alt=media&token=dee31fb0-e95c-4c30-b4ff-3a8a99bcf490",
        sinopsis:"Secuela de Thor: Ragnarok en la que el Dios del Trueno contará con Lady Thor como acompañante.",
        clasificación:"+18",
        idioma:"Subtitulos"  
    },
    {
        nombre:"Telefono negro",
        genero:"Terror/suspenso",
        duracion:"145",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinerg-2ad15.appspot.com/o/4.png?alt=media&token=a4d518b7-30b5-4e4f-976f-21e8b8c36678",
        sinopsis:"Un homicida sádico y enmascarado mantiene a Finney, un niño de 13 años, secuestrado en un sótano incomunicado. A través de un teléfono averiado que hay en la pared, Finney se comunica con otras víctimas del criminal, quienes quieren ayudarlo.",
        clasificación:"+18",
        idioma:"English"  
    },
    {
        nombre:"Bestia",
        genero:"Suspenso",
        duracion:"133",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinerg-2ad15.appspot.com/o/5.jpg?alt=media&token=32d9a11c-f880-4780-9746-cabdcc6b7f40",
        sinopsis:"El Doctor Nate Samuels regresa a Sudáfrica, lugar en el que conoció a su difunta mujer, con sus dos hijas para pasar unos días en la Sabana viendo la fauna del lugar.",
        clasificación:"+12",
        idioma:"Español"  
    },
    {
        nombre:"El perro samurai",
        genero:"Comedia",
        duracion:"143",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinerg-2ad15.appspot.com/o/6.png?alt=media&token=943f58a8-ffe4-43dc-81ca-11c615b14d8c",
        sinopsis:"Un pueblo de gatos se encuentra en peligro y un héroe inesperado surge para ayudarlos: ¡un perro llamado Hank!",
        clasificación:"+12",
        idioma:"Español" 
    },
    {
        nombre:"Una madre",
        genero:"Drama",
        duracion:"143",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinerg-2ad15.appspot.com/o/7.jpg?alt=media&token=7e3739b2-ee90-4ac9-8127-bad06c099025",
        sinopsis:"cuenta la historia de cómo Amalia entreteje con su humor y su entrega particular una red de hilos invisibles con la que une y protege a los suyos. de actuar y no está dispuesta a que nada la aparte de su cometido. condición humana es capaz de demostrarse y mostrar cuando ahonda en su mejor versión.",
        clasificación:"+18",
        idioma:"Español"   
    },
    {
        nombre:"El demonio en el espejo",
        genero:"Terror",
        duracion:"126",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinerg-2ad15.appspot.com/o/8.jpg?alt=media&token=f6840d35-fe37-4e3a-afc8-c6bd6cb06adb",
        sinopsis:"Olivia y Clare, dos hermanas que acaban de perder a su madre, son enviadas a la casa de su tía - con la que nunca han tenido contacto - para que las cuide hasta que su padre pueda ir a buscarlas. Pero la casa está lejos de ser un lugar seguro, ya que una entidad demoniaca habita en los espejos del lugar y busca quien le pueda ayudar a ser liberado de su prisión",
        clasificación:"+20",
        idioma:"Subtitulos" 
    }
]

//Recorriendo un arreglo en js 

let fila = document.getElementById("fila")

peliculas.forEach(function(pelicula){
    // console.log(pelicula)
    console.log(pelicula.nombre)
    console.log(pelicula.genero)
    console.log(pelicula.duracion)
    console.log(pelicula.poster)
    console.log(pelicula.sinopsis)
    console.log(pelicula.clasificación)
    console.log(pelicula.idioma)

    //traversing crear etiquetas de html desde javaScrip.

    //1. creamos una columna para cada pelicula
    let columna=document.createElement("div")
    columna.classList.add("col")

    //2.Creamos una tarjeta para cada pelicula
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100")

    //3.Creamos una foto para cada pelicula
    let poster=document.createElement("img")
    poster.classList.add("card-img-top")
    poster.src=pelicula.poster

    //4.Creamos el nombre de la pelicula 
    let nombre = document.createElement("h3")
    nombre.classList.add("card-title")
    nombre.textContent=pelicula.nombre

    //5.Creamos el genero de cada pelicula 
    let genero = document.createElement("h5")
    genero.classList.add("text-star")
    genero.textContent="Genero:"+pelicula.genero

    //6.Creamos el idioma de cada pelicula 
    let idioma = document.createElement("h6")
    idioma.classList.add("fw-bold")
    idioma.textContent=pelicula.idioma

    //7.Creamos la sinopsis de cada pelicula 
    let sinopsis = document.createElement("p")
    //sinopsis.classList.add("d-none")
    sinopsis.textContent=pelicula.sinopsis

    //padres e hijos 
    tarjeta.appendChild(poster)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(genero)
    tarjeta.appendChild(idioma)
    tarjeta.appendChild(sinopsis)

    columna.appendChild(tarjeta)
    fila.appendChild(columna)
    
    
})

//Detectando seleccion de una pelicula
fila.addEventListener("click",function(){
    alert("Estas seleccionando una pelicula")
})
