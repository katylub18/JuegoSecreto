/* let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del número secreto';
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Ingresa un número del 1 al 10' */

let numeroSecreto = 0;
let intentos= 1;
let maximoIntentos= 3;
let listaNumerosSorteados = [];
let numeroMaximo= 10;
function asignarTexto(variable, texto){
    let Elemento = document.querySelector(variable);
    Elemento.innerHTML = texto; 
    return;
}
function verificarIntento() {
        let numeroDeUsuario = parseInt (document.getElementById('valorUsuario').value) ; 
    if(numeroSecreto === numeroDeUsuario) { 
        asignarTexto('p', `Acertaste el número en ${intentos} ${intentos == 1 ?  'vez' : 'veces' } `);
        document.getElementById('reiniciar').removeAttribute('disabled');
      }
    else  {
        if (numeroSecreto > numeroDeUsuario) {
         asignarTexto('p', 'El número es mayor'); 
    }   else {
        asignarTexto('p', 'El número es menor'); }
        intentos ++;       
    }
        console.log(numeroDeUsuario)
    if (intentos > maximoIntentos) {
        asignarTexto('p', 'Lo siento no acertaste. No tienes más intentos');
        document.getElementById('reiniciar').removeAttribute('disabled'); 
    }
    limpiarCaja();
    //iniciarJuego ();
    return;
}

/*function iniciarJuego (){
document.getElementById('reiniciar').removeAttribute('disabled');
}*/

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = ''; 
    /*let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = ' ';*/ 
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()* numeroMaximo)+1; 
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }}
}

function condicionesIniciales(){
    asignarTexto('h1', 'Juego del número secreto'); 
    asignarTexto('p', `Ingresa un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
    maximoIntentos=3;
    }

function reiniciarJuego() {
    // caja limpia
    limpiarCaja();
    
    // condiciones 
    condicionesIniciales();
    console.log(numeroSecreto);
    
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();
/*function numeroEntero(entero){
 if (entero>0) {
    alert('El número es positivo');}
 else if (entero<0){
    alert('El número es negativo');}
else { alert('El número es cero');}
console.log(entero)
} 
 console.log(numeroSecreto);
    //console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);*/
 