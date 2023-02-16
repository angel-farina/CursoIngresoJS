// Angel Farina.

function mostrar()
{
	var destino;
	var mensaje;
	
	destino = txtIdDestino.value;

	switch(true){
		default:
			void(0);
		break;
		case ["Bariloche", "Ushuaia"].includes(destino):
			mensaje = `🥶 En ${destino} hace frio.`;
		break;
		case ["Cataratas", "Mar del plata"].includes(destino):
			mensaje = `🔥 En ${destino} hace calor.`;
		break;
	}
	alert(mensaje);
}