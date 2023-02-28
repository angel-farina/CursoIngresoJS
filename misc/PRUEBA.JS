function mostrar() 
{
    
    //DECLARO VARIABLES
    var nombre;
    var nacionalidad;
    var edad;


    //BUCLE PRINCIPAL PIDO DATOS Y VALIDO
    var respuesta;

    respuesta = true;

    while (respuesta == true) 
	{
        
        //PIDO DATOS SIN VALIDAR
        nombre = prompt("ingrese nombre");

        //PIDO DATOS TEXTO VALIDANDO
        nacionalidad = prompt("ingrese nacionalidad: argentino o ingles)");
		while (nacionalidad != "argentino" && nacionalidad != "ingles") 
		{
		nacionalidad = prompt("ERROR ingrese nacionalidad");
		}

        //PIDO DATOS NUMEROS VALIDANDO
        edad = prompt("ingrese edad");
		edad = parseInt(edad);
		while(isNaN(edad) == true || edad < 0)
        {
            edad = prompt("ERROR ingrese edad");
            edad = parseInt(edad);
        }
    
        confirm("quiere continuar?");
    }

    console.log(`
    el nombre es: ${nombre}
    la edad es: ${edad}
    la nacionalidad es: ${nacionalidad}
    `);


}