//NOMBRE: Angel
//APELLIDO: Farina

var problema_1 = `Se desea desarrollar un programa que permita al usuario ingresar 10 valores en 
dólares de una criptomoneda ("BTC" y "ETH") en diferentes momentos, <br>
solicitando el nombre de la criptomoneda y su valor.<br>
Realizar las siguientes operaciones:<br>
<br>
A - Calcular el promedio total de los valores ingresados.<br>
B - Realizar una búsqueda para determinar si el valor de la criptomoneda en el último ingreso es mayor o 
menor al promedio calculado anteriormente e informar que moneda fue.<br>
"ej: La ultimo ingreso fue BTC de XXX y su valor supera al promedio de ingresos YYY"<br>
C - Encontrar el valor máximo y minimo ingresado, para cada criptomoneda.<br>`

function mostrar() 
{
    var cripto;
    var valor;
    var ingresos = 1;
    var promedio;
    var valorestotal;
    var ultimovalor;
    var contadortotal;
    var ultimacripto;
    var ultimovalor;
    var maxbtc;
    var maxbtcnombre;
    var maxeth;
    var maxethnombre;
    var minbtc;
    var mineth;
    var flagingreso = true;

    while (ingresos <= 10) {
        
        //pido datos
        cripto = prompt("ingrese cripto: btc o eth")

        valor = prompt("ingrese valor en dolares");
		valor = parseInt(valor);
		while(isNaN(valor) == true)
        {
            valor = prompt("ERROR ingrese valor en dolares");
            valor = parseInt(valor);
        }

        valorestotal += valor;
        contadortotal++;
        console.log(`${valorestotal}`);

        if (flagingreso == true) 
        {
            ultimovalor = valor;
            flagingreso = false;
        }

        ultimovalor = valor;
        ultimacripto = cripto;

        switch(cripto)
        {
            case "btc":
                if (valor < minbtc) {
                    minbtc = valor;
                }
                else
                {
                    if (valor > maxbtc) 
                    {
                        maxbtc = valor;
                        maxbtcnombre = cripto;
                    }
                }
                break;
            case "eth":
                if (valor < mineth) 
                {
                    mineth = valor;  
                }
                else
                {
                    if (valor > maxeth) {
                        maxeth = valor;
                        maxethnombre = cripto;
                    }
                }
                break;
        }

        ingresos++;
    }

    promedio = valorestotal / contadortotal;
    console.log(`el promedio es ${promedio}`);

    if (ultimovalor > promedio) {
        console.log(`ultimo ingreso fue ${ultimacripto} de ${ultimovalor} y su valor supera al promedio de ingresos ${promedio}`);

    }

    console.log(`el minimo de btc es ${minbtc}`);
    console.log(`el maximo de btc es ${maxbtc}`);
    console.log(`el minimo de eth es ${mineth}`);
    console.log(`el maximo de eth es ${maxeth}`);

}