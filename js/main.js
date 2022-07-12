let nombre = prompt("Ingresa tu nombre: ")

while(nombre.length < 1){
    alert("Debe ingresar su nombre.")
    nombre = prompt("Ingresa tu nombre: ")
}

let saludar = (nombre) => {alert("Bienvenido " + nombre + ", veremos si promocionas.")}

saludar(nombre)


let nota1 = parseInt(prompt("Ingresa la nota del primer parcial"))

while(nota1 > 10 || nota1 < 1){
    alert("La nota debe ser mayor a 0 y menor o igual a 10")
    nota1 = parseInt(prompt("Ingresa la nota del primer parcial"))
} 



let nota2 = parseInt(prompt("Ingresa la nota del segundo parcial"))

while(nota2 > 10 || nota2 < 1){
    alert("La nota debe ser mayor a 0 y menor o igual a 10")
    nota2 = parseInt(prompt("Ingresa la nota del segundo parcial"))
} 

let promedio = (n1,n2) => {
    let resultado = (n1+n2)/2
    return  resultado
}


let promedioNotas = promedio(nota1, nota2)

if(promedioNotas>=7){
    alert("Felicidades " + nombre + "! Promocionaste con un promedio de: " + promedioNotas)
}else{ alert("Lo siento " + nombre + ", tu promedio es de " + promedioNotas + " y no promocionaste.") }
