let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = genererNumeroSecreto();
let intentos = 1;

function asignarTextoElemento(elemento, texto){ //se establecen por parametros 
    let elementoHTML = document.querySelector(elemento); //se declara una variable general
    elementoHTML.innerHTML=texto; //se incerta el texto por parametro
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    // console.log(numeroDeUsuario);
    // console.log(numeroSecreto);

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos == 1)? "vez" : "veces"}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor')
        }else{
            asignarTextoElemento('p', 'El numero secreto es mayor')
        }
        intentos++;
        limpiarCaja()
    }
    return;
}

function limpiarCaja(){
    valorCaja = document.querySelector('#valorUsuario').value = "";
}

function genererNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;    
    //si esta generado hacemos algo sino otra cosa
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMaximo){
        

    }else{

        if(listaNumerosSorteados.includes(numeroGenerado)){
            return genererNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
            
        }


    }
    
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto'); //se pasa x parametro los elementos a usar
    asignarTextoElemento('p', `Indica un numero del 1 a ${numeroMaximo}`);
    numeroSecreto = genererNumeroSecreto();
    intentos =1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true)

}

condicionesIniciales()
