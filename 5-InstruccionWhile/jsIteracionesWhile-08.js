// Angel Farina.

function mostrar()
{
	var continuar;
	var numero;
	var sumaPositivos;
	var multNegativos;
	var flagPrimerNegativo;

	continuar = true;
	sumaPositivos = 0;
	flagPrimerNegativo = false;

	while(continuar == true){
		numero = prompt("ingrese un numero");
		numero = parseInt(numero);

		if(numero > 0){
			sumaPositivos += numero;
		}else{
			if(numero < 0){
				if(flagPrimerNegativo == false){
					multNegativos = numero;
					flagPrimerNegativo = true;
				}else{
					multNegativos *= numero;
				}
			}
		}

		continuar = confirm("quiere continuar?");
	}
}

//original
/*function mostrar()
{
	var num;
	var positivo;
	var negativo;
	
	positivo = 0;
	negativo = 1;

	while (confirm('Quiere ingresar mas numeros?')){
		num = parseInt(prompt(''));

		if (num > 0){
			positivo+=num;
		}else {
			negativo*=num;
		}
	}
	
	txtIdSuma.value=positivo;
	txtIdProducto.value=negativo;
}*/