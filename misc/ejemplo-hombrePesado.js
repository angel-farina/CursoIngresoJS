/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.
*/
function mostrar()
{
    var continuar;
    var numIngresado;
    var sumaPositivos;
    var mulNegativos;
    var flagPrimerNeg = false;

    continuar = true;
    sumaPositivos = 0; // Acumulador de numeros positivos ingresados

    while(continuar == true){
        numIngresado = prompt("Dame un numero: ");
        numIngresado = parseInt(numIngresado);

        if(numIngresado > 0){
            //POSITIVOS
            sumaPositivos += numIngresado; //sumaPositivos = sumaPositivos + numIngresado;
        }else{
            if(numIngresado < 0){
                //NEGATIVOS
                if(flagPrimerNeg == false){
                    mulNegativos = numIngresado;
                    flagPrimerNeg = true;
                }else{
                    mulNegativos *= numIngresado; //mulNegativos = mulNegativos * numIngresado;
                }
            }
        }

        continuar = confirm("Continuar?");
    }

}//FIN DE LA FUNCIÓN

function name() {
    let numIngresado;
    let max;
    let min;
    let flagPrimerIngreso = true;

    while(true){
        //Ingreso datos

        if(flagPrimerIngreso == true)
        {
            flagPrimerIngreso = false;

            max = numIngresado;
            min = numIngresado;
        }
        else
        {
            if(numIngresado > max){
                //MAX
            }else{
                if(numIngresado < min){
                    //MIN
                }
            }
        }
    }


    
    while(true){
        
        acumuladorEdades += edad;
        contadorEdades++;

        switch (SEXO) {
            case "M":
                if(flagPrimerM == true){
                    flagPrimerM = false;
                    hombreMasPesado = peso;
                }else{
                    if(peso > hombreMasPesado){
                        hombreMasPesado = peso;
                    }
                }
            break;
            case "F":
                if(flagPrimerF == true){ //MUJER CON EL PELO MAS LARGO
                    flagPrimerF = false;
                    mujerConElPeloMasLargo = largoDePelo;
                    nombreF = nombre;
                }else{
                    if(largoDePelo > mujerConElPeloMasLargo){
                        mujerConElPeloMasLargo = largoDePelo;
                        nombreF = nombre;
                    }
                }
            break;
        }
    }

    promedioEdades = acumuladorEdades / contadorEdades;

    alert(promedioEdades);
}
