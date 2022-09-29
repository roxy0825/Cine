import { pintarSilla } from "../helper/pintarSilla.js"

let asientos =[
    [{id:"a1",estado:0},{id:"b1",estado:0},{id:"c1",estado:0},{id:"d1",estado:0}],
    [{id:"a2",estado:0},{id:"b2",estado:2},{id:"c2",estado:0},{id:"d2",estado:0}],
    [{id:"a3",estado:0},{id:"b3",estado:0},{id:"c3",estado:0},{id:"d3",estado:2}]
]

//PINTAR DESDE JS MI SALA DE CINE 
let cinema=document.getElementById("salacinema")

//recorrer los asientos y aplicar traversing

pintarSilla(asientos,cinema)

//evento de click en la sala de cine

cinema.addEventListener("click",function(evento){
    if(evento.target.tagName=="IMG"){
        let idAsintoSeleccionado=evento.target.id

        asientos.forEach(function(hilera){
            hilera.forEach(function(asientos){
                if(asientos.id==idAsintoSeleccionado){
                    //encontre el asiento donde el usuario se quiere sentar
                    if(asientos.estado==0){
                        asientos.estado=2
                        evento.target.src="../../assets/img/silla3.png"

                    }else if(asientos.estado==2){
                        evento.target.src="../../assets/img/silla.png"

                    }
                }

            })
        })
    }
})