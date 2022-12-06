class Cliente {
    constructor(nombre, edad, celular,nacionalidad) {
    this.nombre = nombre
    this.edad = edad
    this.celular = celular
    }

    datosDelCliente() {
    alert(`Resumen 
            Nombre: ${this.nombre}
            Edad: ${this.edad}
            Celular: ${this.celular}
            Nacionalidad: ${this.nacionalidad}
    `)
    }
}

function validaStringVacios(promp) {
    while (promp === '' || !isNaN(promp)) {
        promp = prompt('Error: Campo en blanco u los datos son numéricos, vuelve a intentarlo!')
    }
    return promp
}

function validaNumerosVacios(promp) {
    let num = promp
    while (num <= 0 || isNaN(num)) {
        num = prompt('Escribe un valor numérico, no lo dejes en blanco ni incluyas letras, ¡inténtalo de nuevo!')
    }
    return num
}

function monto(){
    let monto = parseInt(prompt("ingresar cantidad a prestar"));
        alert("La cantidad es = " + monto)
        return monto
    
}

function cuotas(){
    let cuotas1 = parseInt(prompt("En cuantas cuotas quiere pagar, elija de 1 a 12"));
        if(cuotas1 !== 0 || cuotas1>12){
            alert("Desea el prestamo en " + cuotas1 + " cuotas?")
            return cuotas1
        }else{
            alert("los ingresos de las coutas son incorrectos")
        }
} 

function dividir(dato1, dato2){
    let resultado = dato1 / dato2;
    return resultado
}

let cantidad = monto()
let cuotas1 = cuotas()

console.log("La cantidad es: " + cantidad)
console.log("Las cuotas son:" + cuotas1)

let division = dividir(cantidad, cuotas1)

console.log("Usted debe pagar " + cuotas1 + " cuotas de " + division)

