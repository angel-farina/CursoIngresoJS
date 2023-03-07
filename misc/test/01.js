/******************************************************************************
1)
Se desea desarrollar un programa que permita al usuario ingresar el valor en dólares de una criptomoneda
 en diferentes momentos, solicitando nombre del activo digital, valor, fecha de ingreso.

Realizar las siguientes operaciones:

A - Calcular el promedio de los valores ingresados.
B - Realizar una búsqueda para determinar si el valor de la criptomoneda en el último ingreso es 
mayor o menor al promedio calculado.
C - Encontrar el valor máximo y minimo ingresado, con la fecha en la que sucedió.
D - Si la AFIP se entero que compraron 5 unidades de este activo, calcular el 87% en impuestos sobre
 el precio pesificado. (Cotizacion 1 USD - 405 ARS) 

*******************************************************************************/

function mostrar()
{
	var cripto;
    var valor;
    var fecha;
    var continuar = true;

    var promedio;
    var totalvalores = 0;
    var flagvalor = true;
    var minvalor;
    var maxvalor;
    var impuesto;

    var primervalor;
    var ultimovalor;
    var ultimafecha;
    var ultimonombre;


    while (continuar == true) 
	{
        //PIDO DATOS
        cripto = prompt("ingrese nombre de activo digital");
		while (cripto = "") 
		{
		cripto = prompt("ERROR ingrese nombre de activo digital");
		}

        valor = prompt("ingrese el valor del activo en dolares");
		valor = parseInt(valor);
		while(isNaN(valor) == true || valor < 0)
        {
            valor = prompt("ERROR ingrese el valor del activo en dolares");
            valor = parseInt(valor);
        }

        fecha = prompt("ingrese fecha dd/mm/aaaa");
        
        //calculo maximo y minimo
        if (flagvalor == true) 
        {
            minvalor = valor;
            maxvalor = valor;
            flagvalor = false;     
        }else
        {
            if (valor < minvalor) {
                minvalor = valor;
            }
            else
            {
                if (valor > maxvalor) {
                    maxvalor = valor;
                }
            }
        }

    
        continuar = confirm("quiere continuar?");
        //FIN BUCLE PRINCIPAL
    }

     //PROMEDIO
     promedio = (cripto * valor) / 100

}