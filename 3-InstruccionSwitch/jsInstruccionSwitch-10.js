// Angel Farina.

function mostrar()
{
	var estacion;
	var destino;
	var mensaje;
	
	estacion = txtIdEstacion.value;
	destino = txtIdDestino.value;

	switch(estacion+"|"+destino){
		default:
			mensaje = '✅ Se viaja.';
			break;
		case 'Invierno|Cataratas':
		case 'Invierno|Mar del plata':
		case 'Invierno|Cordoba':
		case 'Verano|Bariloche':
		case 'Verano|Cordoba':
		case 'Primavera|Bariloche':
			mensaje = '⛔️ No se viaja.';
	}
	alert(mensaje);
}