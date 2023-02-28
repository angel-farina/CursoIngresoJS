/*
//.................. DECLARACION DE VARIABLES.........................................................

//DECLARO VARIABLES
var VARIABLE;

VARIABLE = ALGO;

//.....................................................................................................

//.................. BUCLE PRINCIPAL PARA PEDIR DATOS MIENTRAS SE ACEPTE EL CONFIRM....................

//BUCLE PRINCIPAL PIDO DATOS Y VALIDO
var continuar;

continuar = true;

    while (continuar == true) 
	{
        //PEDIDO DE DATOS


    
        continuar = confirm("quiere continuar?");
    }

//......................................................................................................

//....................... PEDIDO DE DATOS SIN VALIDACION................................................

        //PIDO DATOS SIN VALIDAR
        VARIABLE = prompt("TEXTO");

//......................................................................................................

//....................... PEDIDO DE DATOS CON PROMPT Y VALIDACION (TEXTO)...............................

        //PIDO DATOS TEXTO VALIDANDO
        VARIABLE = prompt("TEXTO)");
		while (VARIABLE != "TEXTO" && VARIABLE != "TEXTO2" && VARIABLE != "TEXTO3") 
		{
		VARIABLE = prompt("ERROR TEXTO");
		}

//......................................................................................................

//....................... PEDIDO DE DATOS CON PROMPT Y VALIDACION (NUMEROS).............................

        //PIDO DATOS NUMEROS VALIDANDO
        VARIABLE = prompt("TEXTO");
		VARIABLE = parseInt(VARIABLE);
		while(isNaN(VARIABLE) == true || VARIABLE < 0)
        {
            VARIABLE = prompt("ERROR TEXTO");
            VARIABLE = parseInt(VARIABLE);
        }

//......................................................................................................

//....................... OBTENER UN MAXIMO.............................................................

        //DECLARO UNA FLAG AL INICIO Y OBTENGO UN MAXIMO
		if(VARIABLE1 > VARIABLE2 || FLAG == false)
		{
			VARIABLE2 = VARIABLE1;
			VARIABLE3 = VARIABLE;
			FLAG = true;
		}

        //EJEMPLO
        //a)El goleador del torneo
		if(cantidadGoles > maximoGoles || FLAG == false)
		{
			maximoGoles = cantidadGoles;
			nombreMaxGoleador = nombre;
			FLAG = true;
		}

//......................................................................................................

//.............................OBTENER UN MINIMO........................................................

        //SE INICIALIZA FLAG ARRIBA EN FALSE
        if(tarjetasRojas < minimoArgentinoTarjetasRojas || banderaMinimoArgentino == false)
				{
					minimoArgentinoTarjetasRojas = tarjetasRojas;
					nombreArgentinoMenosRojas = nombre;
					banderaMinimoArgentino = true;
				}
//......................................................................................................

//....................... INFORMAR DATOS OBTENIDOS......................................................

//INFORMO POR DOCUMENT.WRITE()

document.write(`
TEXTO: ${VARIABLE}
TEXTO: ${VARIABLE}
TEXTO: ${VARIABLE}
`);

//INFORMO POR ALERT()

alert(`
TEXTO: ${VARIABLE}
TEXTO: ${VARIABLE}
TEXTO: ${VARIABLE}
`);

//INFORMO POR CONSOLE.LOG()

console.log(`
TEXTO: ${VARIABLE}
TEXTO: ${VARIABLE}
TEXTO: ${VARIABLE}
`);


//INFORMO VALIDANDO SI ALGUNA VEZ PASO POR LA FLAG O SINO MUESTRO OTRO MENSAJE

if(FLAG == true)
	{
		console.log(`TEXTO: ${VARIABLE}`);
	}
	else
	{
		console.log(`TEXTO DICIENDO QUE NO HUBO NADA`);
	}

//......................................................................................................

//...............................OPERACION PARA SABER QUE NUMEROS SON PARES.............................
        //OPERACION MATEMATICA
        NUMERO % 2 == 0


        //EJEMPLO

        if (NUMERO % 2 == 0)
        {
            //ES PAR
        }
        else
        {
            //ES IMPAR
        }

//.........................................PROMEDIO.....................................................

        PROMEDIO = (CONTADORindividual * CONTADORtotal) / 100

//......................................................................................................

//.........................................PORCENTAJE...................................................

        PORCENTAJE = (CONTADORindividual * 100) / CONTADORtotal

//......................................................................................................

//..............................CONTADOR................................................................
       
        var contador = 0;       //SIEMPRE SE INICIALIZA AL INICIO

        //CONTADOR

        //SUMA
        contador++;

        //RESTA
        contador--;

//......................................................................................................

//..............................ACUMULADOR..............................................................
 
        var acumulador = 0;   //SIEMPRE SE INICIALIZA AL INICIO

        //ACUMULADOR
        
        //SUMA
        acumulador += valor;
        acumulador = acumulador + valor;

        //RESTA
        acumulador -= valor;
        acumulador = acumulador - valor;

//......................................................................................................

//.............................CONDICIONAR QUE SOLO ENTRE AL BUCLE X VECES..............................

    var ingresoUnicaVez = 0; //SIEMPRE SE INICIALIZA AL INICIO

    
    while (ingresoUnicaVez != 5) {
        alert("hola");

		ingresoUnicaVez++;
    }
    
    alert("chau");

//......................................................................................................

//............................COMPARAR FUERA DEL BUCLE AL FINAL.........................................

            if (contadorGatos > contadorPerros && contadorGatos > contadorHamster) 
            {
                tipoConMasProblemasDigestivos = "gato";
            }
            else
            {
                if(contadorPerros > contadorGatos && contadorPerros > contadorHamster)
                {
                tipoConMasProblemasDigestivos = "perro";         
                }
                else
                {
                    tipoConMasProblemasDigestivos = "hamster";
                }
            }
//......................................................................................................

*/