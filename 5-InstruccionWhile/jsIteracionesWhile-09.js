// Angel Farina.
// version con flag y isNaN
function mostrar()
{
	var ingreso;
	var nummax;
	var nummin;
	//var contador;
	var continuar;
	var flag; //para saber por unica vez si es la primera vuelta en el bucle
	// y asi poder asignar los primeros valores a maximo y minimo.

	//contador = 0;
	continuar = true;
	flag = true;

	//while(isNaN(ingreso) == true)

	while(continuar){
		//contador++;
		ingreso = parseInt(prompt('Ingrese un numero'));
		console.log(ingreso);
		
		while(isNaN(ingreso)){
            ingreso = parseInt(prompt('El valor ingresado no es un número. Ingrese un número válido:'));
        }

		if(/*contador == 1*/flag){
			nummax = ingreso;
			nummin = ingreso;
			flag = false;
		}else{
			if(ingreso > nummax){
				nummax = ingreso;
			}else{
				if(ingreso < nummin){
					nummin = ingreso;
				}
			}		
		}
		continuar = confirm('quiere ingresar mas numeros?');
	}
	txtIdMaximo.value=nummax;
	txtIdMinimo.value=nummin;
}