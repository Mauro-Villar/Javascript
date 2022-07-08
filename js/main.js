let i, output,int,mult,d,s,numb

const Intput =prompt("Ingresa un numero para saber tu numero de la suerte")

int = parseInt(Intput)
numb = 0

if(int !== 0) { 
    for(i = 1; i <= 100; i++) {
        numb++ 

        if (numb > 5) {
            mult = numb * int
            d = mult % 10
            s = mult - d * i
            output = s + d

            console.log(output)

            alert("El numero de la suerte es: " + output)
            break;
        }
        

    }
}
else{
    alert("No podes poner 0")
}

window.location.reload()
