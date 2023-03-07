/******************************************************************************
 * Apellido:
 * Nombre:
 * Comisión:
 * Tutor:
 * 
Ejercicio 1
La Premier League de Inglaterra necesita un sistema capaz de reunir las 
estadisticas de los 
jugadores que la integran.
Para ellos se pide realizar una app.

Se debe ingresar por cada jugador

-Nombre del jugador
-Nacionalidad
-Posición (Arquero, Defensor, Mediocampista o Delantero)
-Cantidad de Tarjetas Rojas recibidas
-Goles 

Se necesita saber

a)El goleador del torneo
b)El jugador Argentino con menos rojas recibidas.
c)El porcentaje de jugadores Ingleses de la liga

NOTA: Deben poder ingresarse todos números positivos, no se deben pueden 
ingresar números negativos.

*******************************************************************************/

function mostrar()
{
	var respuesta;
	var nombre;
	var nacionalidad;
	var posicion;
	var tarjetasRojas;
	var cantidadGoles;
	//a
	var banderaMaxGoleador;
	var maximoGoles;
	var nombreMaxGoleador;
	//b
	var banderaMinimoArgentino;
	var minimoArgentinoTarjetasRojas;
	var nombreArgentinoMenosRojas;
	//c
	var contadorJugadores;
	var contadorJugadoresIngleses;
	var porcentajeJugadoresIngleses;

	contadorJugadores = 0;
	contadorJugadoresIngleses = 0;


	respuesta = true;
	banderaMaxGoleador = false;
	banderaMinimoArgentino = false;

	while (respuesta == true) 
	{
		
		nombre = prompt("Ingrese nombre");

		nacionalidad = prompt("Ingrese nacionalidad");

		posicion = prompt("Ingrese posicion (Arquero, Defensor, Mediocampista o Delantero)");
		while (posicion!= "Arquero" && posicion!= "Defensor" && posicion!= "Mediocampista" && posicion!= "Delantero") 
		{
		posicion = prompt("Reingrese posicion (Arquero, Defensor, Mediocampista o Delantero)");
		}

		tarjetasRojas = prompt("Ingrese cantidad de tarjetas rojas");
		tarjetasRojas = parseInt(tarjetasRojas);
		while(isNaN(tarjetasRojas) == true || tarjetasRojas < 0)
        {
            tarjetasRojas = prompt("Reingrese cantidad de tarjetas rojas");
            tarjetasRojas = parseInt(tarjetasRojas);
        }
		
		cantidadGoles = prompt("Ingrese cantidad de goles");
		cantidadGoles = parseInt(cantidadGoles);
		while(isNaN(cantidadGoles) == true || cantidadGoles < 0)
        {
            cantidadGoles = prompt("Reingrese cantidad de goles");
            cantidadGoles = parseInt(cantidadGoles);
        }

		//a)El goleador del torneo
		if(cantidadGoles > maximoGoles || banderaMaxGoleador == false)
		{
			maximoGoles = cantidadGoles;
			nombreMaxGoleador = nombre;
			banderaMaxGoleador = true;
		}

		//b)El jugador Argentino con menos rojas recibidas.
		switch(nacionalidad)
		{
			case "Argentino":
				if(tarjetasRojas < minimoArgentinoTarjetasRojas || banderaMinimoArgentino == false)
				{
					minimoArgentinoTarjetasRojas = tarjetasRojas;
					nombreArgentinoMenosRojas = nombre;
					banderaMinimoArgentino = true;
				}
				break;
			case "Ingles":
				contadorJugadoresIngleses++;
				break;
		}
		contadorJugadores++;
		respuesta = confirm("Continua?");
	}
	porcentajeJugadoresIngleses = (contadorJugadoresIngleses *100)/contadorJugadores;

	console.log(`el maximo goleador es: ${nombreMaxGoleador}`);

	if(banderaMinimoArgentino == true)
	{
		console.log(`el jugador argentino con menos tarjetas rojas es: ${nombreArgentinoMenosRojas}`);
	}
	else
	{
		console.log(`No hay jugadores argentinos para calcular el minimo`);
	}
	
	console.log(`el porcentaje de jugadores ingleses es: ${porcentajeJugadoresIngleses}%`);
}