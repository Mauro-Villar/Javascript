//array de objetos para cada producto
let productos = [
    {
        nombre: "Pizza",
        precio: 500,
    },
    {
        nombre: "Nuggets",
        precio: 50,
    },
    {
        nombre: "Empanadas",
        precio: 100,
    },
    {
        nombre: "Franui",
        precio: 400,
    },
  ];

//inicio de los ingresos de usuario, no me funciona el isNaN(opcion) para evitar el ingreso de texto el prompt
let opcion = parseInt(prompt("Que queres comprar? \n 1. Pizza \n 2. Nuggets \n 3. Empanadas \n 4. Franui "));
while (opcion < 1 || opcion > 4){
    opcion = prompt("Que queres comprar? \n 1. Pizza \n 2. Nuggets \n 3. Empanadas \n 4. Franui ");
}


let buscarProducto = (opcion) => {

    //declaro las variables de la funcion
    let resultado = [];
    let cantidad = 0;
    let total = 0;
    let totalPersonas = 0;
    let totalDivision = 0;

    switch(opcion){
        case 1:
            resultado = productos.find(productos => productos.nombre == "Pizza");

            cantidad = parseInt(prompt(`Cuanta ${resultado.nombre} queres comprar?`));

            total = resultado.precio * cantidad;

            totalPersonas = parseInt(prompt("Entre cuantas personas se divide la compra?"));

            if(totalPersonas == 0 || totalPersonas == 1){
                return `El total a pagar es de: $${total}`;
            }else{
                    totalDivision = totalPagar(total, totalPersonas);
                    return `El total a pagar es de $${total} y cada uno debe pagar $${totalDivision}`;
                }
            
        case 2:
            resultado = productos.find(productos => productos.nombre == "Nuggets");

            cantidad = parseInt(prompt(`Cuantas ${resultado.nombre} queres comprar?`));

            total = resultado.precio * cantidad;

            totalPersonas = parseInt(prompt("Entre cuantas personas se divide la compra?"));

            if(totalPersonas == 0 || totalPersonas == 1){
                return `El total a pagar es de: $${total}`;
            }else{
                    totalDivision = totalPagar(total, totalPersonas);
                    return `El total a pagar es de $${total} y cada uno debe pagar $${totalDivision}`;
                }
        
        case 3:
            resultado = productos.find(productos => productos.nombre == "Empanadas");

            cantidad = parseInt(prompt(`Cuantas ${resultado.nombre} queres comprar?`));

            total = resultado.precio * cantidad;

            totalPersonas = parseInt(prompt("Entre cuantas personas se divide la compra?"));

            if(totalPersonas == 0 || totalPersonas == 1){
                return `El total a pagar es de: $${total}`;
            }else{
                    totalDivision = totalPagar(total, totalPersonas);
                    return `El total a pagar es de $${total} y cada uno debe pagar $${totalDivision}`;
                }

        
        case 4:
            resultado = productos.find(productos => productos.nombre == "Franui");

            cantidad = parseInt(prompt(`Cuantos ${resultado.nombre} queres comprar?`));

            total = resultado.precio * cantidad;

            totalPersonas = parseInt(prompt("Entre cuantas personas se divide la compra?"));

            if(totalPersonas == 0 || totalPersonas == 1){
                return `El total a pagar es de: $${total}`;
            }else{
                    totalDivision = totalPagar(total, totalPersonas);
                    return `El total a pagar es de $${total} y cada uno debe pagar $${totalDivision}`;
                }

    }
}

//funcion para dividir el total a pagar entre las personas que van a pagar
let totalPagar = (total,personas) => {
    return total/personas;
}

//busca el producto y calcular el total
alert(buscarProducto(opcion));

