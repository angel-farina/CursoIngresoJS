//NOMBRE: Angel
//APELLIDO: Farina

/*Se desea desarrollar un programa que permita al usuario ingresar la forma del ovni 
avistado (circular, triangular, hexagonal), la fecha del avistamiento, el lugar donde se 
observó y el horario en que ocurrió el avistamiento, para luego realizar las siguientes operaciones:

A - Encontrar la forma de ovni más avistada en el conjunto de datos ingresado.
B - Buscar los avistamientos que se hayan producido en horarios nocturnos (entre las 20:00 y las 06:00).
C - Cual es la primer y ultima ciudad donde se produjo los avistamiento registrado.
D - Porcentaje sobre el total ingresado para cada forma observada. */
var problema_3 = `PROBLEMA 3`

function mostrar() 
{
    var forma;
    var fecha;
    var ciudad;
    var horario;
    var continuar = true;

    var contcircular = 0;
    var conttriangular = 0;
    var conthexagonal = 0;
    var contnocturno = 0;

    var flagprimerciudad = 0;
    var primerciudad;
    var ultimaciudad;

    var conttotalvistos = 0;
    var porcentajecircular;
    var porcentajetriangular;
    var porcentajehexagonal;

    while (continuar == true) 
	{
        //pido forma validando
        forma = prompt ("ingrese forma de ovni: circular, triangular, hexagonal");
        while (forma != "circular" && forma != "triangular" && forma != "hexagonal")
        {
            forma = prompt ("ERROR, ingrese forma de ovni: circular, triangular, hexagonal");
        }

        //pido fecha
        fecha = prompt("ingrese fecha de avistamiento: dd/mm/aaaa");
		console.log(`fecha de avistamiento: ${fecha}`);

        //pido ciudad validando
        ciudad = prompt ("ingrese ciudad de avistamiento");
        while (ciudad == "")
        {
            ciudad = prompt ("ERROR, ingrese ciudad de avistamiento");
        }

        //pido hora validando
        horario = prompt("ingrese horario de avistamiento hh:");
		horario = parseInt(horario);
		while(isNaN(horario) == true)
        {
            horario = prompt("ERROR ingrese horario de avistamiento hh:");
            horario = parseInt(horario);
        }

        //cuento las formas avistadas
        switch (forma) {
            case "circular":
                contcircular++;
                break;
            case "triangular":
                conttriangular++;
                break;
            case "hexagonal":
                conthexagonal++;
                break;
        }

        //horario nocturno
        if (horario >= 20 || horario < 6) 
        {
            contnocturno++;
        }

        if (flagprimerciudad == true) 
        {
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

    //veo cual fue el mas avistado
    if (contcircular > conttriangular && contcircular > conthexagonal)
    {
        console.log(`el mas avistado fue ${contcircular}`);
    }
    else
    {
        if (conttriangular > contcircular && conttriangular > conthexagonal)
        {
            console.log(`el mas avistado fue ${conttriangular}`);
        }
        else
        {
            console.log(`el mas avistado fue ${conthexagonal}`);  
        }
    }

    console.log(`los avistamientos nocturnos fueron: ${contnocturno}`);

    //porcentajes
    porcentajecircular = (contcircular * 100) / conttotalvistos;
    porcentajetriangular = (conttriangular * 100) / conttotalvistos;
    porcentajehexagonal = (conthexagonal * 100) / conttotalvistos;

    console.log(`porcentaje circular: ${porcentajecircular.toFixed(2)}`);
    console.log(`porcentaje triangular: ${porcentajetriangular.toFixed(2)}`);
    console.log(`porcentaje hexagonal: ${porcentajehexagonal.toFixed(2)}`);
    
}
