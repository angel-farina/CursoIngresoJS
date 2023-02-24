// Angel Farina.

// MODELO PARCIAL
function mostrar() {
    var nombreTitular;
    var lugarViaje;
    var temporada;
    var diasCant;
    var importeViaje;
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
	var costoGessel;
	var costoMadryn;
	var costoCordoba;
	var maxImporte;
	var cantidadTemporadaAlta;
	var cantidadTemporadaBaja;
	var diasGessel;
	var diasMadryn;
	var diasCordoba;
	var diasMax;
	var lugarMasDias;
	var pesoMax;
	var pesoMin;
	var pesoTrue;
	var nombrePesado;
	var nombreLiviano;
	var nombreLugarMasImporte;

	cantidadPersonas = 0;
	pesoTotalGessel = 0;
	gessel = 0;
	madryn = 0;
	cordoba = 0;
	sumaImportes = 0;
	importeGessel = 0;
	importeMadryn = 0;
	importeCordoba = 0;
	costoGessel = 1000;
	costoMadryn = 2000;
	costoCordoba = 3000;
	cantidadTemporadaAlta = 0;
	cantidadTemporadaBaja = 0;
	diasGessel = 0;
	diasMadryn = 0;
	diasCordoba = 0;
	diasMax = 0;
	lugarMasDias = "";
	pesoMax = 0;
	pesoMin = 0;
	pesoTrue = true;
	nombrePesado = "";
	nombreLiviano = "";
	maxImporte = 0;
	nombreLugarMasImporte = "";

    continuar = true;

    while (continuar) {
        nombreTitular = prompt('Ingrese nombre del nombreTitular');
        while (nombreTitular == "") {
            nombreTitular = prompt('ERROR, ingrese nombre del nombreTitular');
        }
        lugarViaje = prompt('Ingrese su destino: Puerto Madryn, Villa Gessel o Cordoba');
		lugarViaje = lugarViaje.toLowerCase();
		while (lugarViaje != "puerto madryn" && lugarViaje != "villa gessel" && lugarViaje != "cordoba" || lugarViaje == "") {
			lugarViaje = prompt('ERROR, ingrese su destino: Puerto Madryn, Villa Gessel o Cordoba');
		}

		temporada = prompt('Ingrese temporada: Alta o Baja');
		temporada = temporada.toLowerCase();
		while (temporada != "alta" && temporada != "baja" || temporada == "") {
			temporada = prompt('ERROR, ingrese temporada: Alta o Baja');
		}

		diasCant = parseInt(prompt('Ingrese cantidad de diasCant'));
		while (isNaN(diasCant) || diasCant < 0) {
			diasCant = parseInt(prompt('ERROR, ingrese cantidad de diasCant'));
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

		switch (lugarViaje) {
			case "villa gessel":
				gessel++;
				pesoTotalGessel+=peso;	
				diasGessel += diasCant;	
				importeGessel += costoGessel;
				break;
			case "puerto madryn":
				diasMadryn += diasCant;
				importeMadryn += costoMadryn;
				break;
			case "cordoba":
				diasCordoba += diasCant;
				importeCordoba += costoCordoba;
				break;
		}

		if (diasGessel > diasMax) {
			diasMax = diasGessel;
			lugarMasDias = "Villa Gessel";
		}
		
		if (diasMadryn > diasMax) {
			diasMax = diasMadryn;
			lugarMasDias = "Puerto Madryn";
		}
		
		if (diasCordoba > diasMax) {
			diasMax = diasCordoba;
			lugarMasDias = "Cordoba";
		}

		if (temporada == "alta") {
			cantidadTemporadaAlta++;
		} else {
			cantidadTemporadaBaja++;
		}

		if (pesoTrue == true) {
			pesoTrue = false
			pesoMax = peso;
			pesoMin = peso;
		} else {
			if (peso > pesoMax) {
				pesoMax = peso;
				nombrePesado = nombreTitular
			} else {
				if (peso < pesoMin) {
					pesoMin = peso;
					nombreLiviano =  nombreTitular;
				}
			}
		}

		if (importeGessel > maxImporte) {
			maxImporte = importeGessel;
			nombreLugarMasImporte = "Villa Gessel";
		}

		if (importeMadryn > maxImporte) {
			maxImporte = importeMadryn;
			nombreLugarMasImporte = "Puerto Madryn";
		}
		
		if (importeCordoba > maxImporte) {
			maxImporte = importeCordoba;
			nombreLugarMasImporte = "Cordoba";
		}

		if (temporada == "alta") {
			cantidadTemporadaAlta++;
		} else {
			cantidadTemporadaBaja++;
		}

		console.log(`
		nombreTitular: ${nombreTitular}
		lugarViaje: ${lugarViaje}
		temporada: ${temporada}
		diasCant: ${diasCant}
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

	sumaImportes = importeGessel + importeMadryn + importeCordoba;

	console.log(`
	NombreTitular: ${nombreTitular}
	LugarViaje: ${lugarViaje}
	Temporada: ${temporada}
	DiasCant: ${diasCant}
	Altura: ${altura}
	Peso: ${peso}
	Sexo: ${sexo}
	Equipaje: ${equipaje}
	Pago: ${pago}
	Cantidad de personas: ${cantidadPersonas}
	Cantidad a gessel: ${gessel}
	Cantidad personas temporada alta: ${cantidadTemporadaAlta}
	Cantidad personas temporada baja: ${cantidadTemporadaBaja}
	Peso de personas total gessel: ${pesoTotalGessel}
	Suma Importes: ${sumaImportes}
	Lugar con mas dias acumulados: ${lugarMasDias}
	Nombre persona mas pesada: ${nombrePesado}
	NOmbre persona mas liviana: ${nombreLiviano}
	`)
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