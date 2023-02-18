// Angel Farina.

function mostrar()
{
	var contador;
	var acumulador;
	var continuar;
	
	contador = 0;
	acumulador = 0;
	continuar = true;

	while (continuar == true){
		contador++;
		acumulador = acumulador + parseInt(prompt('Ingrese un número'));

		continuar = confirm('quiere ingresar otro numero?');
	}

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;
}