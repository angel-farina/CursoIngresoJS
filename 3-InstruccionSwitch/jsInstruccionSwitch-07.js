// Angel Farina.

function mostrar()
{
	var destino;
	var mensaje;
	
	destino = txtIdDestino.value;

	switch(destino){
		default:
			void(0);
		break;
		case 'Bariloche':
			mensaje = `${destino} se encuentra al Oeste`;
		break;
		case 'Cataratas':
			mensaje = `${destino} se encuentra al Norte`;
		break;
		case 'Mar del plata':
			mensaje = `${destino} se encuentra al Este`;
		break;
		case 'Ushuaia':
			mensaje = `${destino} se encuentra al Sur`;
	}
	alert(mensaje);
}