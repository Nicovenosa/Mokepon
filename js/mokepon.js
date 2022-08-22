let ataqueJugador = ""
let ataqueEnemigo = ""
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){//llamado de boton para cuando se de clik vaya a la fun para traer las mascota jugador

   let sectionAtaque = document.getElementById("ataques")
   sectionAtaque.style.display = "none"
   
    let botonMascotaJugador=document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click' ,seleccionarMascotaJugador)
    
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)

    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)

    let botonReset = document.getElementById("boton-reset")
    botonReset.addEventListener("click", reset)
    
    let sectionReset = document.getElementById("boton-reset")
   sectionReset.style.display = "none" //quitamos el botn de reset!

}

    function seleccionarMascotaJugador(){ //seleccion de mascota jugador

        let sectionAtaque = document.getElementById("ataques")
        sectionAtaque.style.display = "flex"
        
        let sectionMascotas = document.getElementById("mascotas")
        sectionMascotas.style.display = "none"

        let inputTanjiro = document.getElementById('Tanjiro')
        let inputRengoku = document.getElementById('Rengoku')
        let inputShinobu = document.getElementById('Shinobu')
        let spanMascotaJugador = document.getElementById("nombreSelecion1")
        
    
    
        if(inputTanjiro.checked){ // selecion mascota jugador manual 
            spanMascotaJugador.innerHTML = "Tanjiro💧"
            
            }
            else if(inputRengoku.checked){
            spanMascotaJugador.innerHTML = "Rengoku🔥"
            
            }
            else if(inputShinobu.checked){
            spanMascotaJugador.innerHTML = "Shinobu🌱"

            }
            else {alert('Selecciona una mascota')
            }

            seleccionarMascotaEnemigo()
    }

    function seleccionarMascotaEnemigo(){ //seleccion de mascota enemigo

        let numeroAleatorio = aleatorio(1,3)
        let mascotaEnemigo = document.getElementById("nombreSelecion2")

        if (numeroAleatorio == 1){
            mascotaEnemigo.innerHTML = "Tanjiro💧"
            
        } else if (numeroAleatorio == 2){
            mascotaEnemigo.innerHTML = "Rengoku🔥"

        }else{
            mascotaEnemigo.innerHTML = "Shinobu🌱"

        }
        

    }


    // ataque jugador
    function ataqueAgua(){
        ataqueJugador = "Agua💧"
        ataqueAleEnemigo()
    }
    function ataqueFuego(){
        ataqueJugador = "Fuego🔥"
        ataqueAleEnemigo()
    }
    function ataqueTierra(){
        ataqueJugador = "Tierra🌱"
        ataqueAleEnemigo()
    }
    
    
    function ataqueAleEnemigo(){
        let ataqueAleatorio = aleatorio(1,3)
       

        if(ataqueAleatorio == 1){
            ataqueEnemigo = "Agua💧"
        }else if (ataqueAleatorio == 2){
            ataqueEnemigo= "Fuego🔥"
        }else {
            ataqueEnemigo = "Tierra🌱"
    
        }


        vs()
    }
    function vs (){
            let   vidaJugador = document.getElementById("mascota1")
            let   vidaEnemigo = document.getElementById("mascota2")


        
            if ( ataqueJugador == ataqueEnemigo) {
                crearMesnsaje("EMPATE")
            } else if ( ataqueJugador == "Agua💧" && ataqueEnemigo == "Fuego🔥") {
                crearMesnsaje("Ganaste")
                vidasEnemigo --
                vidaEnemigo.innerHTML = vidasEnemigo
                
            } else if ( ataqueJugador == "Fuego🔥" && ataqueEnemigo == "Tierra🌱") {
                crearMesnsaje("Ganaste")
                vidasEnemigo --
                vidaEnemigo.innerHTML = vidasEnemigo
                
            } else if (ataqueJugador == "Tierra🌱" && ataqueEnemigo  == "Agua💧") {
                crearMesnsaje("Ganaste")
                vidasEnemigo --
                vidaEnemigo.innerHTML = vidasEnemigo

            } else {
                crearMesnsaje("Perdiste")
                vidasJugador --
                vidaJugador.innerHTML = vidasJugador
                
            }
            vidasRestantes()

        }
    function vidasRestantes(){
        if (vidasJugador == 0 ){
            crearMesnsajeFinal("PERDISTE😒😔😱😱")
        }else if (vidasEnemigo == 0){
            crearMesnsajeFinal("GANASTEEE🎉🎉🥳🪅")
        }

    }
    
    
    
    function crearMesnsajeFinal(resultadoFinal){
        let sectionMensajes = document.getElementById("resultado")
        
        sectionMensajes.innerHTML = resultadoFinal
   
        let botonAgua = document.getElementById("boton-agua")
        botonAgua.disabled = true
    
        let botonFuego = document.getElementById("boton-fuego")
        botonFuego.disabled = true
    
        let botonTierra = document.getElementById("boton-tierra")
        botonTierra.disabled= true
        
        let sectionReset = document.getElementById("boton-reset")
        sectionReset.style.display = "flex"// reacparece el boton de reset
     
    }




    function crearMesnsaje(resultado){
        let sectionMensajes = document.getElementById("resultado")
        let ataqueDelJugador = document.getElementById("ataque-Jugador")
        let ataqueMaquina = document.getElementById("ataqueMaquina")

        let nuevoAtaqueDelJugador = document.createElement("p")
        let nuevoAtaqueEnemigo = document.createElement("p")

        sectionMensajes.innerHTML = resultado
        nuevoAtaqueDelJugador.innerHTML = ataqueJugador
        nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

        ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
        ataqueMaquina.appendChild(nuevoAtaqueEnemigo)

    }
 

    function reset (){
        location.reload()
    }

    function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
        


   
   


window.addEventListener('load',iniciarJuego) // esta funcion hace q carge todo el html y luego lea la funcion inicial de js