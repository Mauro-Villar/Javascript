/* let nombreUsuario = prompt("ingrese su nombre ")
let apellidoUsuario = prompt("ingrese su apellido")
let salida = (nombreUsuario + " " + apellidoUsuario + " " + "ha sido ingresado")
alert(salida) */

const edadPersona = 19 
const dineroEnElBolsillo = 5000;
const dineroDeLaEntrada = 5000;
const nombreDeLaPersona = "Mauriten"

if(((edadPersona >= 18) || (dineroEnElBolsillo >=dineroDeLaEntrada)) || nombreDeLaPersona =="Mauriten"){
    console.log("Bienvenido a nuestro bar");
    if(edadPersona !=18){
        console.log("Felicidades sos mayor de 18 pero no tenes 18")
    }
}
    else{
        console.log("No podes entrar.");
    }


