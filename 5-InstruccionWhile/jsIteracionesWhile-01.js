// Angel Farina.

// MODELO PARCIAL
function mostrar() {
    var titular;
    var lugar;
    var temporada;
    var dias;
    var importe;
    var altura;
    var peso;
    var sexo;
    var equipaje;
    var pago;
    var continuar;
	var cantidadPersonas;
	var pesoTotalGessel;
	var gessel;
	var madryn;
	var cordoba;
	var sumaImportes;
	var importeGessel;
	var importeMadryn;
	var importeCordoba;
	var cantidadTemporadaAlta;
	var cantidadTemporadaBaja;

	cantidadPersonas = 0;
	pesoTotalGessel = 0;
	gessel = 0;
	madryn = 0;
	cordoba = 0;
	sumaImportes = 0;
	importeGessel = 1000;
	importeMadryn = 2000;
	importeCordoba = 3000;
	cantidadTemporadaAlta = 0;
	cantidadTemporadaBaja = 0;

    continuar = true;

    while (continuar) {
        titular = prompt('Ingrese nombre del titular');
        while (titular == "") {
            titular = prompt('ERROR, ingrese nombre del titular');
        }
        lugar = prompt('Ingrese su destino: Puerto Madryn, Villa Gessel o Cordoba');
		lugar = lugar.toLowerCase();
		while (lugar != "puerto madryn" && lugar != "villa gessel" && lugar != "cordoba" || lugar == "") {
			lugar = prompt('ERROR, ingrese su destino: Puerto Madryn, Villa Gessel o Cordoba');
		}

		temporada = prompt('Ingrese temporada: Alta o Baja');
		temporada = temporada.toLowerCase();
		while (temporada != "alta" && temporada != "baja" || temporada == "") {
			temporada = prompt('ERROR, ingrese temporada: Alta o Baja');
		}

		dias = parseInt(prompt('Ingrese cantidad de dias'));
		while (isNaN(dias) || dias < 0) {
			dias = parseInt(prompt('ERROR, ingrese cantidad de dias'));
		}

		altura = parseFloat(prompt('Ingrese su altura'));
		while (isNaN(altura)) {
			altura = parseFloat('ERROR, ingrese su altura');
		}

		peso = parseFloat(prompt('Ingrese su peso'));
		while (isNaN(peso)) {
			peso = parseFloat(prompt('ERROR, ingrese su peso'));		
		}

		sexo = prompt('Ingrese su sexo: F, M o NB');
		sexo = sexo.toLowerCase();
		while (sexo != "f" && sexo != "m" && sexo != "nb" || sexo == "") {
			sexo = prompt('ERROR, ingrese su sexo: F, M o NB');
		}

		equipaje = prompt('Viaja con equipaje de mano?: SI o NO');
		equipaje = equipaje.toLowerCase();
		while (equipaje != "si" && equipaje != "no" || equipaje == "") {
		}

		pago = prompt('Ingrese su metodo de pago: MP, Tarjeta o Efectivo');
		pago = pago.toLowerCase();
		while (pago != "mp" && pago != "tarjeta" && pago != "efectivo" || pago == "") {
			pago = prompt('ERROR, Ingrese su metodo de pago: MP, Tarjeta o Efectivo');
		}

		cantidadPersonas++;

		if (lugar == "villa gessel") {
			gessel++;
			pesoTotalGessel+=peso;
		}

		if (temporada == "alta") {
			cantidadTemporadaAlta++;
		} else {
			cantidadTemporadaBaja++;
		}

		console.log(`
		titular: ${titular}
		lugar: ${lugar}
		temporada: ${temporada}
		dias: ${dias}
		altura: ${altura}
		peso: ${peso}
		sexo: ${sexo}
		equipaje: ${equipaje}
		pago: ${pago}
		cantidad de personas: ${cantidadPersonas}
		cantidad a gessel: ${gessel}
		cantidad personas temporada alta: ${cantidadTemporadaAlta}
		cantidad personas temporada baja: ${cantidadTemporadaBaja}
		peso de personas total gessel: ${pesoTotalGessel}`)

        continuar = confirm('Quiere ingresar otro Pasajero?');
    }

	
}

// BLACKJACK
/*
function mostrar(){
	var carta;
	var acumulador;
	var maximo;

	maximo = 21;
	acumulador = 0;

	while(acumulador < maximo && confirm('Quiere continuar?')){
		carta = parseInt(prompt('ingrese un numero entre 1 y 12'));

		while(carta < 1 || carta > 12){
			carta = parseInt(prompt('No es el valor indicado, ingrese un numero entre 1 y 12'));
		}
		acumulador = acumulador+carta;
		console.log(acumulador);
	}
	console.log(`sumo ${acumulador}`);
}*/

// NORMAL
/*
function mostrar()
{
	var num;
	
	num = 1;

	while (num < 11)
	{
		alert(num);
		num++;
	}
}*/