/******************************************************************************
 3)
Se desea desarrollar un programa que permita al usuario ingresar la forma del ovni avistado
 (circular, triangular, hexagonal), la fecha del avistamiento, el lugar donde se observó y el 
 horario en que ocurrió el avistamiento, para luego realizar las siguientes operaciones:

A - Encontrar la forma de ovni más avistada en el conjunto de datos ingresado.
B - Buscar los avistamientos que se hayan producido en horarios nocturnos (entre las 20:00 y las 06:00).
C - Cual es la primer y ultima ciudad donde se produjo los avistamiento registrado.
D - Porcentaje sobre el total ingresado para cada forma observada. 

*******************************************************************************/

function mostrar() 
{
	var forma;
    var fecha;
    var ciudad;
    var horario;
    var continuar = true;

    var contCircular = 0;
    var contTriangular = 0;
    var contHexagonal = 0;
    var contNocturno = 0;

	var flagprimerciudad = true;
    var primerciudad;
    var ultimaciudad;

    var conttotalvistos = 0;
    var porcentajecircular;
    var porcentajetriangular;
    var porcentajehexagonal;

    while (continuar == true) 
	{
        //PIDO forma VALIDANDO
        forma = prompt("ingrese forma de ovni: circular, triangular, hexagonal");
		while (forma != "circular" && forma != "triangular" && forma != "hexagonal") 
		{
		forma = prompt("ERROR, ingrese forma de ovni: circular, triangular, hexagonal");
		}

        //PIDO fecha VALIDANDO
        fecha = prompt("ingrese fecha de avistamiento DD/MM/AA:");
        console.log(`fecha de avistamiento: ${fecha}`);

        //PIDO ciudad VALIDANDO
        ciudad = prompt("ingrese ciudad donde se avisto");
		while (ciudad == "") 
		{
		ciudad = prompt("ERROR, ingrese ciudad donde se avisto");
		}

        //PIDO hora VALIDANDO
        horario = prompt("ingrese horario de avistamiento HH:");
        horario = parseInt(horario);
		while(isNaN(horario) == true)
        {
            horario = prompt("ERROR, ingrese horario de avistamiento HH:");
            horario = parseInt(horario);
        }

         //CUENTO LAS FORMAS MAS AVISTADAS
		switch (forma) 
        {
            case "circular":
                contCircular++;
                break;
            case "triangular":
                contTriangular++;
                break;
            case "hexagonal":
                contHexagonal++;
                break;
            default:
                break;
        }

        //HORARIO NOCTURNO
        if (horario >= 20 || horario < 6) 
		{
            contNocturno++;
        }

        //primer y ultima ciudad
        if (flagprimerciudad == true) {
            primerciudad = ciudad;
			ultimaciudad = ciudad;
			flagprimerciudad = false;
        }
        else
        {
            ultimaciudad = ciudad;
        }

        conttotalvistos++;
    
        continuar = confirm("quiere continuar?");
        //FIN BUCLE PRINCIPAL
    }

    //VEO CUAL FUE EL MAS AVISTADO
    if (contCircular > contTriangular && contCircular > contHexagonal) {
        console.log(`el mas avistado fue circular: ${contCircular}`); 
    }
    else
    {
        if (contTriangular > contCircular && contTriangular > contHexagonal) {
            console.log(`el mas avistado fue triangular: ${contTriangular}`);
        }
        else
        {
            console.log(`el mas avistado fue hexagonal: ${contHexagonal}`);
        }
    }

	console.log(`los avistamientos nocturnos fueron: ${contNocturno}`);
	console.log(`la primer ciudad fue: ${primerciudad} y la ultima fue: ${ultimaciudad}`)

    //porcentajes
    porcentajecircular = (contCircular * 100) / conttotalvistos;
    porcentajetriangular = (contTriangular * 100) / conttotalvistos;
    porcentajehexagonal = (contHexagonal * 100) / conttotalvistos;

    console.log(`porcentaje circular: ${porcentajecircular.toFixed(2)}`);
    console.log(`porcentaje triangular: ${porcentajetriangular.toFixed(2)}`);
    console.log(`porcentaje hexagonal: ${porcentajehexagonal.toFixed(2)}`);
}