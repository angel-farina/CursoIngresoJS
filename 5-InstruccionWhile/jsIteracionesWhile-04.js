// Angel Farina.

function mostrar()
{
	var num;

	num = parseInt(prompt("ingrese un número entre 0 y 9."));

	while (num > 9){
		alert('Numero Invalido');
		num = parseInt(prompt('ingrese un número entre 0 y 9.'));
	}
	txtIdNumero.value=num;
}