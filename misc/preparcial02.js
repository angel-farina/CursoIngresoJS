/******************************************************************************
 * Apellido:
 * Nombre:
 * Comisión:
 * Tutor:
 
Ejercicio 2

Dr. Gregory Cat (Diagnostico Veterinario)
Para el hospital de mascotas: Princeton-Plainsboro de Nueva Jersey.

Es necesario registrar el ingreso de las mascotas al hospital, para esto hay que considerar
los siguientes datos y encasillarlos en ciertos diagnósticos para poder derivarlos adecuadamente:

Nombre de la mascota
Edad (Validar 1 - 20)
Tipo: (Validar “gato”, “perro”, “hamster”)
Peso: (Más de 0)
Diagnostico: (Validar “problemas digestivos”, “otitis”, “alergias en la piel”, “parasitos”, 
“picazon de abeja”)
Vacuna antirrábica (validar “si”, ”no”)

Informes:

a) Nombre de la mascota más vieja con la vacuna antirrábica
b) Cantidad de mascotas sin vacuna antirrábica y con parásitos
c) El tipo de mascota con más ingresos por problemas digestivos.
d) Nombre, edad y diagnóstico de la mascota más joven ingresada.
e) Cantidad de perros ingresados por otitis.

*******************************************************************************/

function mostrar() 
{
    var nombre;
    var edad;
    var tipo;
    var peso;
    var diagnostico;
    var vacunaAntirrabica;
    var respuesta;
    var contadorNoVacunadosConParasitos;

    var edadMasViejoVacunado;
    var nombreMasViejoVacunado;
    var banderaDelMasViejoVacunado;

    var contadorPerros;
    var contadorGatos;
    var contadorHamster;
    var tipoConMasProblemasDigestivos;

    var nombreMascotaMasJoven;
    var diagnosticoMascotaMasJoven;
    var edadMascotaMasJoven;
    var banderaMascotaMasJoven;

    var contadorPerrosOtitis;

    banderaDelMasViejoVacunado = false;
    banderaMascotaMasJoven = false;
    respuesta = true;

    contadorNoVacunadosConParasitos = 0;
    contadorPerros = 0;
    contadorGatos = 0;
    contadorHamster = 0;
    contadorPerrosOtitis = 0;

    while (respuesta == true) 
	{
		nombre = prompt("Ingrese nombre");

        edad = prompt("Ingrese edad");
		edad = parseInt(edad);
		while(isNaN(edad) == true || edad < 1 || edad > 20)
        {
            edad = prompt("Reingrese edad");
            edad = parseInt(edad);
        }

		tipo = prompt("Ingrese tipo deMascota “gato”, “perro”, “hamster”");
		while (tipo!= "gato" && tipo!= "perro" && tipo!= "hamster") 
		{
		tipo = prompt("Reingrese tipo deMascota “gato”, “perro”, “hamster”");
		}

		peso = prompt("Ingrese peso");
		peso = parseFloat(peso);
		while(isNaN(peso) == true || peso <= 0)
        {
            peso = prompt("Reingrese peso");
            peso = parseFloat(peso);
        }

        diagnostico = prompt("Ingrese diagnostico “problemas digestivos”, “otitis”, “alergias en la piel”, “parasitos”, “picazon de abeja");
		while (diagnostico!= "problemas digestivos" && 
                diagnostico!= "otitis" && 
                diagnostico!= "alergias en la piel" && 
                diagnostico!= "parasitos" && 
                diagnostico!= "picazon de abeja")
		{
		diagnostico = prompt("Reingrese diagnostico “problemas digestivos”, “otitis”, “alergias en la piel”, “parasitos”, “picazon de abeja");
		}

        vacunaAntirrabica = prompt("Ingrese vacunaAntirrabica");
		while (vacunaAntirrabica!= "si" && vacunaAntirrabica!= "no") 
		{
		vacunaAntirrabica = prompt("Reingrese vacunaAntirrabica");
		}
        
        switch(vacunaAntirrabica)
        {
            case "si":
                //a) Nombre de la mascota más vieja con la vacuna antirrábica
                if (edad > edadMasViejoVacunado || banderaDelMasViejoVacunado == false) 
                {
                    edadMasViejoVacunado = edad;
                    nombreMasViejoVacunado = nombre;
                    banderaDelMasViejoVacunado = true;
                }
                break;
            default:
                //b) Cantidad de mascotas sin vacuna antirrábica y con parásitos
                if (diagnostico == "parasitos")
                {
                    contadorNoVacunadosConParasitos++;
                }
                break;
        }

        //c) El tipo de mascota con más ingresos por problemas digestivos.
        
        switch(diagnostico)
        {
            case "problemas digestivos":
                switch(tipo)
                {
                    case "perro":
                        contadorPerros++;
                        break;
                    case "gato":
                        contadorGatos++;
                        break;
                    case "gato":
                        contadorHamster++;
                        break;
                } 
                break;
            case "otitis":
                //e) Cantidad de perros ingresados por otitis.
                if (tipo == "perro") 
                {
                    contadorPerrosOtitis++;    
                }
                break;   
        }

        //d) Nombre, edad y diagnóstico de la mascota más joven ingresada.
        if (edad < edadMascotaMasJoven || banderaMascotaMasJoven == false) 
        {
            edadMascotaMasJoven = edad;
            nombreMascotaMasJoven = nombre;
            diagnosticoMascotaMasJoven = diagnostico;
            banderaMascotaMasJoven = true;    
        }
		
		respuesta = confirm("Continua?");
	}

    if (banderaDelMasViejoVacunado == true) 
    {
        console.log(`a. el mas viejo vacunado es ${nombreMasViejoVacunado}`);
    }
    else
    {
        console.log(`no hay mascotas vacunadas`);
    }

    console.log(`b. la cantidad de mascotas no vacunadas con parasitos es ${contadorNoVacunadosConParasitos}`);

    //c) El tipo de mascota con más ingresos por problemas digestivos.
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
    console.log(`el tipo con mas problemas digestivo es ${tipoConMasProblemasDigestivos}`);

    console.log(`
    mascota mas joven: 
    nombre: ${nombreMascotaMasJoven}
    edad: ${edadMascotaMasJoven}
    diagnostico: ${diagnosticoMascotaMasJoven}
    `);

    //e) Cantidad de perros ingresados por otitis.
    console.log(`la cantidad de perros con otitis es: ${contadorPerrosOtitis}`);
}