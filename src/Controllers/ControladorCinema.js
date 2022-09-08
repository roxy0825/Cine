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
        idioma:"English",
        director:"David Leitch",
        actores:"David Leitch,Bad Bunny,Joey King"

    },
    {
        nombre:"After",
        genero:"Romance",
        duracion:"1h 45mn",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinerg-2ad15.appspot.com/o/10.png?alt=media&token=3d5c692c-a9a2-4072-ae94-2de8267c21c3",
        sinopsis:"Tessa Young acaba de llegar a la universidad, y su estable y ordenada vida da un giro busco al conocer al misterioso Hardin Scott, cuyo pasado es algo oscuro. Aunque de entrada se odian, estos polos opuestos se unirán y nada volverá a ser como antes",
        clasificación:"Adulto",
        idioma:"Español",
        director:"Jenny Gage",
        actores:"Josephine Langford,Hero Fiennes Tiffin,jenny gage thomas"
    },
    {
        nombre:"Invitación al infierno",
        genero:"Terror",
        duracion:"120",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinerg-2ad15.appspot.com/o/11.png?alt=media&token=80f703d2-e4ba-485c-a386-04191c289ebd",
        sinopsis:"Tras la muerte de su madre y quedarse sin parientes conocidos, Evie se hace un test de ADN… y descubre a un primo lejano que nunca supo que tuvo. Al ser invitada por su recién encontrada nueva familia a una fastuosa boda en la campiña inglesa, se verá pronto seducida por el sexy aristócrata anfitrión.",
        clasificación:"+18",
        idioma:"Español" ,
        director:"Jessica M. Thompson",
        actores:"Robert Urich,Susan Lucci,Joanna Cassidy"
    },
    {
        nombre:"Gemelo siniestro ",
        genero:"Terror",
        duracion:"105",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinerg-2ad15.appspot.com/o/2.png?alt=media&token=5828cf5c-ccca-4cfd-a498-8e2a2c0eb0d6",
        sinopsis:"Tras la muerte de uno de sus hijos gemelos, Rachel y Anthony se instalan en el campo escandinavo para sanar las heridas anímicas. Allí, sin embargo, ella descubre que una fuerza sobrenatural y maligna quiere llevarse al pequeño que le queda.",
        clasificación:"+18",
        idioma:"Español",
        director:"Taneli Mustonen",
        actores:"Teresa Palmer,Tristan Ruggeri,Steven Cree"
    },
    {
        nombre:"Thor love and thurder ",
        genero:"Accion/Aventura",
        duracion:"159",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinerg-2ad15.appspot.com/o/3.png?alt=media&token=dee31fb0-e95c-4c30-b4ff-3a8a99bcf490",
        sinopsis:"Secuela de Thor: Ragnarok en la que el Dios del Trueno contará con Lady Thor como acompañante.",
        clasificación:"+18",
        idioma:"Subtitulos",
        director:"Taika Waititi",
        actores:"Chris Hemsworth,Natalie Portman,Taika Waititi"
    },
    {
        nombre:"Telefono negro",
        genero:"Terror/suspenso",
        duracion:"145",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinerg-2ad15.appspot.com/o/4.png?alt=media&token=a4d518b7-30b5-4e4f-976f-21e8b8c36678",
        sinopsis:"Un homicida sádico y enmascarado mantiene a Finney, un niño de 13 años, secuestrado en un sótano incomunicado. A través de un teléfono averiado que hay en la pared, Finney se comunica con otras víctimas del criminal, quienes quieren ayudarlo.",
        clasificación:"+18",
        idioma:"English",
        director:"Scott Derrickson",
        actores:"Mason Thames,miguel cazarez mora,Ethan Hawke" 
    },
    {
        nombre:"Bestia",
        genero:"Suspenso",
        duracion:"133",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinerg-2ad15.appspot.com/o/5.jpg?alt=media&token=32d9a11c-f880-4780-9746-cabdcc6b7f40",
        sinopsis:"El Doctor Nate Samuels regresa a Sudáfrica, lugar en el que conoció a su difunta mujer, con sus dos hijas para pasar unos días en la Sabana viendo la fauna del lugar.",
        clasificación:"+12",
        idioma:"Español",
        director:"Baltasar Kormákur",
        actores:"Idris Elba,Sharlto Copley,leah sava jeffries"  
    },
    {
        nombre:"El perro samurai",
        genero:"Comedia",
        duracion:"143",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinerg-2ad15.appspot.com/o/6.png?alt=media&token=943f58a8-ffe4-43dc-81ca-11c615b14d8c",
        sinopsis:"Un pueblo de gatos se encuentra en peligro y un héroe inesperado surge para ayudarlos: ¡un perro llamado Hank!",
        clasificación:"+12",
        idioma:"Español",
        director:"Rob Minkoff",
        actores:"Samuel L. Jackson,Michael Cera,Mel Brooks" 
    },
    {
        nombre:"Una madre",
        genero:"Drama",
        duracion:"143",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinerg-2ad15.appspot.com/o/7.jpg?alt=media&token=7e3739b2-ee90-4ac9-8127-bad06c099025",
        sinopsis:"cuenta la historia de cómo Amalia entreteje con su humor y su entrega particular una red de hilos invisibles con la que une y protege a los suyos. de actuar y no está dispuesta a que nada la aparte de su cometido. condición humana es capaz de demostrarse y mostrar cuando ahonda en su mejor versión.",
        clasificación:"+18",
        idioma:"Español",
        director:"Diógenes Cuevas",
        actores:"Marcela Valencia,Eva Bianco,José Restrepo"   
    },
    {
        nombre:"El demonio en el espejo",
        genero:"Terror",
        duracion:"126",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinerg-2ad15.appspot.com/o/8.jpg?alt=media&token=f6840d35-fe37-4e3a-afc8-c6bd6cb06adb",
        sinopsis:"Olivia y Clare, dos hermanas que acaban de perder a su madre, son enviadas a la casa de su tía - con la que nunca han tenido contacto - para que las cuide hasta que su padre pueda ir a buscarlas. Pero la casa está lejos de ser un lugar seguro, ya que una entidad demoniaca habita en los espejos del lugar y busca quien le pueda ayudar a ser liberado de su prisión",
        clasificación:"+20",
        idioma:"Subtitulos",
        director:"Andrew Mecham, Matthew Whedon",
        actores:"Jan Broberg,Addy Miller,elizabeth birkner" 
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
    console.log(pelicula.director)
    console.log(pelicula.actores)

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
    idioma.textContent="Idioma: " + pelicula.idioma

    //7.Creamos la sinopsis de cada pelicula 
    let sinopsis = document.createElement("p")
    //sinopsis.classList.add("d-none")
    sinopsis.textContent=pelicula.sinopsis

//7.Creamos el director de cada pelicula
    let director = document.createElement("h6")
    director.classList.add("fw-bold")
    director.textContent="Director: " + pelicula.director
    

    //7.Creamos los actores de cada pelicula
    let actores = document.createElement("h6")
    actores.classList.add("fw-bold")
    actores.textContent="Actores: " + pelicula.actores

    //padres e hijos 
    tarjeta.appendChild(poster)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(genero)
    tarjeta.appendChild(idioma)
    tarjeta.appendChild(sinopsis)
    tarjeta.appendChild(director)
    tarjeta.appendChild(actores)

    columna.appendChild(tarjeta)
    fila.appendChild(columna)
    
    
})

//Detectando seleccion de una pelicula
fila.addEventListener("click",function(){
    alert("Estas seleccionando una pelicula")
})

let peliculasNuevas = [
    {
        nombre:"Caceria de brujas",
        genero:"Terror",
        duracion:92,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinerg-2ad15.appspot.com/o/12.png?alt=media&token=ee23c529-21f2-4f97-bfbc-ae61bc1b5929",
        sinopsis:"Cacería de Brujas está situada en un Estados Unidos moderno en el que las brujas son reales y la brujería es ilegal, una adolescente debe enfrentarse a sus propios demonios y prejuicios mientras ayuda a dos brujas a evitar a las fuerzas de la autoridad y a cruzar la frontera sur para refugiarse en México.",
        clasificación:"+12",
        idioma:"Español",
        director:"DavidElle Callahan",
        actores:"Elizabeth Mitchell, Gideon Adlon, Ashley Bell"

    },
    {
        nombre:"Vertigo",
        genero:"Suspenso",
        duracion:"107min",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinerg-2ad15.appspot.com/o/13.png?alt=media&token=6a7d0bef-3e06-4e68-9ca2-abb22aae19a5",
        sinopsis:"Para las mejores amigas Becky (Grace Caroline Currey) y Hunter (Virginia Gardner), la vida consiste en conquistar los miedos y superar los límites. Pero después de escalar 600 metros hasta la cima de una remota torre de radio abandonada, se encuentran atrapadas e incomunicadas. Ahora, las habilidades de escalada de Becky y Hunter serán puestas a prueba mientras luchan desesperadamente por sobrevivir. Thriller cargado de adrenalina, coprotagonizado por Jeffrey Dean Morgan (The Walking Dead / Rampage / Watchmen). De los mismos productores de Terror a 47 metros y dirigida por Scott Mann (Final Score).",
        clasificación:"+12",
        idioma:"Español",
        director:"Scott Mann",
        actores:"Grace Caroline Currey, Virginia Gardner, Jeffrey Dean Morgan"
    },
    {
        nombre:"Lo que arde",
        genero:"Drama",
        duracion:"86",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinerg-2ad15.appspot.com/o/14.png?alt=media&token=fd22eca1-d166-491c-b14c-a85f87d16639",
        sinopsis:"La historia se desarrolla en la sierra de Ancares lucense y cuenta la historia de Amador Coro, un vecino pirómano que sale de la prisión y regresa a casa, con su madre Benedicta, su perra Luna y sus vacas. Sus vidas normalmente transcurren en medio de la naturaleza de su pueblo hasta que un día un incendio arrasa la región.",
        clasificación:"+18",
        idioma:"Español" ,
        director:"Oliver Laxe.",
        actores:"Amador Arias, Benedicta Sánchez."
    },
    ,
    {
        nombre:"Peliando por mi vida",
        genero:"Drama, Biografia",
        duracion:"129",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinerg-2ad15.appspot.com/o/15.png?alt=media&token=25a213c6-b1ec-44cc-9d90-e8f2f83a7857",
        sinopsis:"Una aventura fantástica donde una mujer, Alithea(Tilda Swinton) descubre un genio (Idris Elba) en una lámpara. Ella es consciente que ninguna historia sobre deseos concedidos tiene un final feliz, así se niega a pedir sus 3 deseos que liberarían al genio. Él, en un esfuerzo por convencerla, le cuenta sus aventuras a través del tiempo entre épocas de reyes y faraones y cómo el haber amado a la mujer equivocada lo obligó a convertirse en prisionero de esta botella, solo, por la eternidad. Él anhela libertad, ella anhela compañía, quizás encuentran en el otro lo que siempre anhelaron y necesitaron.",
        clasificación:"+12",
        idioma:"Ingles" ,
        director:"Barry Levinson.",
        actores:"Ben Foster, Billy Magnussen, Vicky Krieps."
    },
    ,
    {
        nombre:"Erase una vez un genio",
        genero:"Fantasia",
        duracion:"108",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinerg-2ad15.appspot.com/o/16.png?alt=media&token=c12e653c-4ac6-4d6b-9292-ac42b14e16d2",
        sinopsis:"La historia se desarrolla en la sierra de Ancares lucense y cuenta la historia de Amador Coro, un vecino pirómano que sale de la prisión y regresa a casa, con su madre Benedicta, su perra Luna y sus vacas. Sus vidas normalmente transcurren en medio de la naturaleza de su pueblo hasta que un día un incendio arrasa la región.",
        clasificación:"+18",
        idioma:"Español" ,
        director:"George Miller.",
        actores:"Idris Elba, Tilda Swinton, Alyla Browne, Pia Thunderbolt."
    }
   
   
]


let fila2 = document.getElementById("fila2")

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