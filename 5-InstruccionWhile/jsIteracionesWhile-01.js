// Angel Farina.

// MODELO PARCIAL
function mostrar() {
    var nombreTitular;
    var lugarViaje;
    var temporada;
    var diasCant;
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
	var pesoInicial;
	var nombrePesado;
	var nombreLiviano;
	var lugarMasImporte;
	var mujerInicial;
	var mujerAlta;
	var mujerBaja;
	var nombreMujerAlta;
	var nombreMujerBaja;
	var contadorMp;
	var contadorTarjeta;
	var contadorEfectivo;
	var formaPagoMasUtilizada;
	var contadorMaxPago;
	var nombreMaxTemporada;
	var lugarMaxPasajeros;
	var lugarMasPasajerosNombre;
	var equipajeSi;
	var equipajeNo;
	var porcentajeEquipajeMano;
	var sexoF;
	var sexoM;
	var sexoNb;
	var porcentajeSexoF;
	var porcentajeSexoM;
	var porcentajeSexoNb;

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
	pesoInicial = true;
	nombrePesado = "";
	nombreLiviano = "";
	maxImporte = 0;
	lugarMasImporte = "";
	mujerInicial = true;
	mujerAlta = 0;
	mujerBaja = 0;
	nombreMujerAlta = "";
	nombreMujerBaja = "";
	contadorMp = 0;
	contadorTarjeta = 0;
	contadorEfectivo = 0;
	formaPagoMasUtilizada = "";
	contadorMaxPago = 0;
	nombreMaxTemporada = "";
	lugarMaxPasajeros = 0;
	lugarMasPasajerosNombre = "";
	equipajeSi = 0;
	equipajeNo = 0;
	porcentajeEquipajeMano = 0;
	sexoF = 0;
	sexoM = 0;
	sexoNb = 0;
	porcentajeSexoF = 0;
	porcentajeSexoM = 0;
	porcentajeSexoNb = 0;


    continuar = true;

    while (continuar) {
        nombreTitular = prompt('Ingrese nombre del Titular');
        while (nombreTitular == "") {
            nombreTitular = prompt('ERROR, ingrese nombre del Titular');
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

		diasCant = parseInt(prompt('Ingrese cantidad de dias'));
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

		//datos segun el lugar
		switch (lugarViaje) {
			case "villa gessel":
				gessel++;
				pesoTotalGessel+=peso;	
				diasGessel += diasCant;	
				importeGessel += costoGessel;
				break;
			case "puerto madryn":
				madryn++;
				diasMadryn += diasCant;
				importeMadryn += costoMadryn;
				break;
			case "cordoba":
				cordoba++;
				diasCordoba += diasCant;
				importeCordoba += costoCordoba;
				break;
		}
		//lugar con mas dias
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
		//temporada
		if (temporada == "alta") {
			cantidadTemporadaAlta++;
		} else {
			cantidadTemporadaBaja++;
		}
		//nombre mas pesado y mas liviano
		if (pesoInicial == true) {
			pesoInicial = false
			pesoMax = peso;
			pesoMin = peso;
		} else {
			if (peso > pesoMax) {
				pesoMax = peso;
				nombrePesado = nombreTitular;
			} else {
				if (peso < pesoMin) {
					pesoMin = peso;
					nombreLiviano =  nombreTitular;
				}
			}
		}
		//lugar con mas importe
		if (importeGessel > maxImporte) {
			maxImporte = importeGessel;
			lugarMasImporte = "Villa Gessel";
		}

		if (importeMadryn > maxImporte) {
			maxImporte = importeMadryn;
			lugarMasImporte = "Puerto Madryn";
		}
		
		if (importeCordoba > maxImporte) {
			maxImporte = importeCordoba;
			lugarMasImporte = "Cordoba";
		} 

		//nombre mujer mas alta
		if (sexo == "f") {
			if (mujerInicial == true) {
				mujerInicial = false
				mujerAlta = altura;
				mujerBaja = altura;
			} else {
				if (altura > mujerAlta) {
					mujerAlta = altura;
					nombreMujerAlta = nombreTitular;
				} else {
					if (altura < mujerBaja) {
						mujerBaja = altura;
						nombreMujerBaja =  nombreTitular;
					}
				}
			}
		}

		//forma de pago mas utilizada
		switch (pago) {
			case "mp":
				contadorMp++;
				break;
			case "efectivo":
				contadorEfectivo++;
				break;
			case "tarjeta":
				contadorTarjeta++;
				break;
		}

		if (contadorMp > contadorMaxPago) {
			contadorMaxPago = contadorMp;
			formaPagoMasUtilizada = "mp";
		}

		if (contadorTarjeta > contadorMaxPago) {
			contadorMaxPago = contadorTarjeta;
			formaPagoMasUtilizada = "tarjeta";
		}
		
		if (contadorEfectivo > contadorMaxPago) {
			contadorMaxPago = contadorEfectivo;
			formaPagoMasUtilizada = "efectivo";
		} 

		//temporada que se viajo mas
		if (cantidadTemporadaAlta > cantidadTemporadaBaja) {
			nombreMaxTemporada = "Alta";
		} else {
			nombreMaxTemporada = "Baja";
		}

		//Lugar con mas pasajeros
		if (gessel > lugarMaxPasajeros) {
			lugarMasPasajerosNombre = "Villa Gessel";
		}

		if (madryn > lugarMaxPasajeros) {
			lugarMasPasajerosNombre = "Puerto Madryn";
		}

		if (cordoba > lugarMaxPasajeros) {
			lugarMasPasajerosNombre = "Cordoba";
		}

		//Porcentaje con equipaje de mano
		switch (equipaje) {
			case "si":
				equipajeSi++;
				break;
			case "no":
				equipajeNo++;
				break;
		}

		//Porcentaje en cada sexo
		switch (sexo) {
			case "f":
				sexoF++;
				break;
			case "m":
				sexoM++;
				break;
			case "nb":
				sexoNb++;
				break;
		}

		//datos por cada ingreso
		console.log(`
		Datos por ingreso:
		Nombre del Titular: ${nombreTitular}
		Lugar de Viaje: ${lugarViaje}
		Temporada: ${temporada}
		Cantidad de dias: ${diasCant}
		Altura: ${altura}
		Peso: ${peso}
		Sexo: ${sexo}
		Equipaje: ${equipaje}
		Metodo de pago: ${pago}
		Cantidad de personas ingresadas: ${cantidadPersonas}
		`)

        continuar = confirm('Quiere ingresar otro Pasajero?');
    }

	sumaImportes = importeGessel + importeMadryn + importeCordoba;
	porcentajeEquipajeMano = equipajeSi * (cantidadPersonas / 100);
	porcentajeSexoF = sexoF * (cantidadPersonas / 100);
	porcentajeSexoM = sexoM * (cantidadPersonas / 100);
	porcentajeSexoNb = sexoNb * (cantidadPersonas / 100);

	console.log(`
	Datos:
	Cantidad de personas ingresadas: ${cantidadPersonas}
	Cantidad de personas a Villa Gessel: ${gessel}

	1a:
	Cantidad personas temporada alta: ${cantidadTemporadaAlta}
	Cantidad personas temporada baja: ${cantidadTemporadaBaja}

	1b:
	Peso de personas total gessel: ${pesoTotalGessel}

	1c:
	Lugar con mas dias acumulados: ${lugarMasDias}

	1d:
	Suma Importes: ${sumaImportes}
	
	2e:
	Nombre persona mas pesada: ${nombrePesado}
	Nombre persona mas liviana: ${nombreLiviano}

	2f:
	Lugar con mas importe: ${lugarMasImporte}

	2g:
	Nombre mujer mas alta: ${nombreMujerAlta}

	3h:
	Forma de pago mas utilizada: ${formaPagoMasUtilizada}

	3i:
	Temporada que se viajo mas: ${nombreMaxTemporada}

	3j:
	Lugar con mas pasajeros: ${lugarMasPasajerosNombre}

	4k:
	Porcentaje con equipaje de mano: ${porcentajeEquipajeMano.toFixed(2)}

	4l:
	Porcentaje en cada sexo: F: ${porcentajeSexoF}, M: ${porcentajeSexoM}, Nb: ${porcentajeSexoNb}
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