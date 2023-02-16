// Angel Farina.

// BIS
function mostrar()
{
	var claveSolicitada;
	var clave;
	var ingresar;
	var erronea;
	var bienvenido;
	var intentos;

	clave = 'utn750';
	ingresar = 'Ingresar clave:';
	erronea = '[❌ CLAVE INCORRECTA], ingresar clave:';
	bienvenido = '✅ Bienvenido';
	intentos = 3;
	
	claveSolicitada = prompt(ingresar);

	while(claveSolicitada != clave)
	{
		while(intentos > 1)
		{
			intentos--;
			claveSolicitada = prompt(`${intentos} intentos restantes. ${erronea}`);
		}
		alert('USUARIO BLOQUEADO');
			break;
	}
	if(intentos == 1)
	{
		void(0);
	}
	else
	{
		alert(bienvenido);
	}
}

// NORMAL
/*
function mostrar()
{
	var claveSolicitada;
	var clave;
	var ingresar;
	var erronea;
	var bienvenido;

	clave = 'utn750';
	ingresar = 'Ingresar clave:';
	erronea = '[❌ CLAVE INCORRECTA], ingresar clave:';
	bienvenido = '✅ Bienvenido';
	
	claveSolicitada = prompt(ingresar);

	while (claveSolicitada != clave){
		claveSolicitada = prompt(erronea);
	}
	alert(bienvenido);
}
*/