let pagoConTarjeta = prompt('¡Muchas gracias por elegirnos! \n ¿Con qué tarjeta desea efecuar el pago?')

let pagoConcretado = "El pago efectuado con su tarjeta "

let realizado = " se ha concretado exitosamente "

while(pagoConTarjeta!="Aceptar"){

    pagoConcretado = pagoConcretado + pagoConTarjeta + realizado

    pagoConTarjeta = parseInt(prompt('Ingrese el número de su tarjeta de credito'))    

    pagoConTarjeta = parseInt(prompt('¿En cuántas cuotas (Podes hacerlo hasta 6 cuotas sin interes)? '))    

    pagoConTarjeta = prompt('Tu compra esta a punto de ser concretada. Ingresa Aceptar para finalizar ')

}

console.log(pagoConcretado)

