alert('Por favor ingresar los precios de los productos a continuacion')

class producto{
    constructor(categorias,precio){
        this.categoria= categorias;
        this.precio= parseInt(precio);
    }
}

//Defino Arrays
const categorias = ['Pizzas', 'Empanadas', 'Nuggets'];
const productos = [];

//Recorro el array categorias y pido ingresar los precios
categorias.forEach( (categorias) => {

    let precioIngresado = prompt(`Precio de las ${categorias}: `);

    //Validacion del ingreso por prompt
    while(precioIngresado.length < 1 || !isNaN(precioIngresado) == false){
        alert(`Debe ingresar el precio de las ${categorias}.`)
        precioIngresado = prompt(`Precio de las ${categorias}: `);
    }

    productos.push(new producto(categorias,precioIngresado));
});

//Muestro el array de objetos y calculo la cantidad de productos y el precio promedio.
console.log(productos);

let precioTotal = 0;
productos.forEach( (productos) => {
    precioTotal += productos.precio;   
});

let promedio = precioTotal/productos.length;

alert(`Hay un total de ${productos.length} productos.\n El precio promedio es: ${promedio}`)

