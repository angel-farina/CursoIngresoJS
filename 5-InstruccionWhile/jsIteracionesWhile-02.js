// Angel Farina.
// practica parcial

/*Una libreria desea corroborar quien es el mejor vendedor para poder premiarlo y 
destacarlo como empleado del mes. Para ello se deben ingresar los siguientes datos 
dependiendo de las cantidades de venta que hubo en el dia.

-Carnet de vendedor: (AA200 -A3240 -A80)
-Genero vendido: (Terror, Infantil, Autoa-ayuda, mezclado)
-El total vendido:
-Estrellas puestas por el cliente (se ingresa un campo numerico que va del 1 al 5)

Una vez finalizado la carga total del dia calcular:
1 - Cual fue el genero menos vendido.
2 - Cual fue el vendedor que tiene el mayor promedio de estrellas
3 - Si el vendedor supero una cantidad total de $3000 le corresponde una comision del del %15, sino del %5.
4 - Si el vendedor superó la cantidad de ventas de $7000 le corresponde una comisión del %20. Sino del %10. 
Mostrar cual es el vendedor con mayor dinero recaudado, su cantidad de ventas y su promedio de estrellas. */
//3

function mostrar() {
	var carnet;
	var genero;
	var total;
	var estrellas;
	var continuar;
	var terrorCont;
	var infantilCont;
	var autoayudaCont;
	var mezcladoCont;
	var generoMenosVendido;
	var generoMenosVendidoNombre;

	continuar = true;
	terrorCont = 0;
	infantilCont = 0;
	autoayudaCont = 0;
	mezcladoCont = 0;
	generoMenosVendido = 0;
	generoMenosVendidoNombre = "";

	while (continuar) {
		
		carnet = prompt('ingrese su carnet: (AA200 -A3240 -A80)');
		carnet = carnet.toLowerCase();
		while (carnet != "aa200" && carnet != "-a3240" && carnet != "-a80" || carnet == "") {
			carnet = prompt('ERROR ingrese su carnet: (AA200 -A3240 -A80)');
		}
		console.log(carnet);

		genero = prompt('ingrese genero vendido: (Terror, Infantil, Auto-ayuda, mezclado)');
		genero = genero.toLowerCase();
		while (genero != "terror" && genero != "infantil" && genero != "auto-ayuda" && genero != "mezclado" || genero == "") {
			genero = prompt('ERROR ingrese genero vendido: (Terror, Infantil, Autoa-ayuda, mezclado)');
		}
		console.log(genero);

		total = parseInt(prompt('Ingrese total vendidos'));
		while (isNaN(total) || total < 0) {
			total = parseInt(prompt('ERROR, Ingrese total vendidos'));
		}
		console.log(total);

		estrellas = parseInt(prompt('Ingrese estrellas entre 1 a 5'));
		while (isNaN(estrellas) || estrellas < 1 && estrellas > 5) {
			estrellas = parseInt(prompt('ERROR, Ingrese estrellas entre 1 a 5'));
		}
		console.log(estrellas);

		switch (genero) {
			case "terror":
				terrorCont++;
				break;
			case "infantil":
				infantilCont++;
			 	break;
			case "auto-ayuda":
				autoayudaCont++;
				break;
			case "mezclado":
				mezcladoCont++;
				break;
		}

		if (terrorCont < generoMenosVendido) {
			generoMenosVendido = terrorCont;
			generoMenosVendidoNombre = "Terror";
		}

		if (infantilCont < generoMenosVendido) {
			generoMenosVendido = infantilCont;
			generoMenosVendidoNombre = "Infantil";
		}

		if (autoayudaCont < generoMenosVendido) {
			generoMenosVendido = autoayudaCont;
			generoMenosVendidoNombre = "auto-ayuda";
		}

		if (mezcladoCont < generoMenosVendido) {
			generoMenosVendido = mezcladoCont;
			generoMenosVendidoNombre = "mezclado";
		}
		console.log(`generoMenosVendidoNombre: ${generoMenosVendidoNombre}`);

		confirm('desea continuar?');
	}

}

/*En una veterinaria se están realizando censos para evaluar los animales ingresados por día. 
Por este motivo, se le realizará una consulta al menos 4 clientes.
Se requieren los siguientes datos:
Tamaño de la mascota (Chica, Mediana o Grande).
Sexo de la mascota (Hembra o Macho).
Tipo de mascota (Gato, Perro, Otro).
Edad de la mascota. Validar.
Está vacunado? SI/NO (Se puede utilizar boolean si se desea).
INFORMAR
1) Cuál es la mascota más vieja entre los tamaños medianos o grandes.
2) Cuál es el promedio de edad de las gatas.
3) Cuál es el tipo de mascota menos vacunado.
4) El porcentaje de gatos, perros y otros. */
//2
/*
function mostrar() 
{
}*/

/*En una hamburgueseria el cajero debe ir cargando los pedidos por clientes.
Los datos que se tienen que ingresar son:
Nombre, Apellido, edad. Que tipo de hamburguesa (simple, doble o veggie), cantidad de hamburguesas 
y precio por el total del pedido.
Esto se debe cargar hasta que el cajero decida.
Al final, se deberá presentar
Cuál fue el tipo de hamburguesa mas comprada y cual fue la menos comprada.
Cual fue promedio de precios por tipo de hamburguesa
El nombre y apellido de la persona que realizó la compra más cara
El promedio de edad de los clientes */
//1
/*
function mostrar()
{
	var continuar;
	var nombreCliente;
	var apellidoCliente;
	var edadCliente;
	var tipoHamburguesa;
	var cantidadHamburguesas;
	var precioTotal;
	var hamburguesaSimple;
	var hamburguesaDoble;
	var hamburguesaVeggie;
	var hamburguesaMasComprada;
	var hamburguesaMasCompradaNombre;
	var hamburguesaMenosCompradaNombre;
	var promedioSimple;
	var promedioDoble;
	var promedioVeggie;
	var precioSimple;
	var precioDoble;
	var precioVeggie;
	var acumEdadClientes;
	var promedioEdad;
	var precioSimpleCaro;
	var precioDobleCaro;
	var precioVeggieCaro;
	var hamburguesaInicio;
	var nombreHamburguesaCara;
	var apellidoHamburguesaCara;

	hamburguesaSimple = 0;
	hamburguesaDoble = 0;
	hamburguesaVeggie = 0;
	hamburguesaMasComprada = 0;
	hamburguesaMasCompradaNombre = "";
	hamburguesaMenosCompradaNombre = "";
	promedioSimple = 0;
	promedioDoble = 0;
	promedioVeggie = 0;
	precioSimple = 0;
	precioDoble = 0;
	precioVeggie = 0;
	acumEdadClientes = 0;
	promedioEdad = 0;
	precioSimpleCaro = 0;
	precioDobleCaro = 0;
	precioVeggieCaro = 0;
	hamburguesaInicio = true;
	nombreHamburguesaCara = "";
	apellidoHamburguesaCara = "";

	continuar = true;

	while (continuar == true) 
	{
        nombreCliente = prompt('Nombre del cliente?');
        while (nombreCliente == "") {
            nombreCliente = prompt('ERROR, ingrese nombre del cliente');
        }
		console.log(nombreCliente);

		apellidoCliente = prompt('Apellido del cliente?');
        while (apellidoCliente == "") {
            apellidoCliente = prompt('ERROR, ingrese apellido del cliente');
        }
		console.log(apellidoCliente);

		edadCliente = parseInt(prompt('Edad del cliente'));
		while (isNaN(edadCliente) || edadCliente < 0) {
			edadCliente = parseInt(prompt('ERROR, ingrese edad del cliente'));
		}
		console.log(edadCliente);

		tipoHamburguesa = prompt('Tipo de hambruguesa');
		tipoHamburguesa = tipoHamburguesa.toLowerCase();
		while (tipoHamburguesa != "simple" && tipoHamburguesa != "doble" && tipoHamburguesa != "veggie" || tipoHamburguesa == "") {
			tipoHamburguesa = prompt('ERROR, ingrese tipo de hambruguesa');
		}
		console.log(tipoHamburguesa);

		cantidadHamburguesas = parseInt(prompt('Cantidad de hamburguesas'));
		while (isNaN(cantidadHamburguesas) || cantidadHamburguesas < 0) {
			cantidadHamburguesas = parseInt(prompt('ERROR, ingrese cantidad de hamburguesas'));
		}
		console.log(cantidadHamburguesas);

		precioTotal = parseInt(prompt('Precio total'));
		while (isNaN(precioTotal) || precioTotal < 0) {
			precioTotal = parseInt(prompt('ERROR, ingrese Precio total'));
		}
		console.log(precioTotal);

		//hmaburguesa
		switch (tipoHamburguesa) {
			case "simple":
				hamburguesaSimple++;
				precioSimple += precioTotal;
				break;
			case "doble":
				hamburguesaDoble++;
				precioDoble += precioTotal;

				break;
			case "veggie":
				hamburguesaVeggie++
				precioVeggie += precioTotal;

				break;
		}
		
		if (hamburguesaSimple >= hamburguesaDoble && hamburguesaSimple >= hamburguesaVeggie) {
			hamburguesaMasCompradaNombre = "simple";
		} else {
			if (hamburguesaDoble >= hamburguesaSimple && hamburguesaDoble >= hamburguesaVeggie) {
				hamburguesaMasComprada = "doble";
			} else {
				hamburguesaMasComprada = "veggie";
			}
		}

		if (hamburguesaSimple <= hamburguesaDoble && hamburguesaSimple <= hamburguesaVeggie) {
			hamburguesaMenosCompradaNombre = "simple";
		} else {
			if (hamburguesaDoble <= hamburguesaSimple && hamburguesaDoble <= hamburguesaVeggie) {
				hamburguesaMenosCompradaNombre = "doble";
			} else {
				hamburguesaMenosCompradaNombre = "veggie";
			}
		}

		if (hamburguesaInicio == true) {
			hamburguesaInicio = false
			precioSimpleCaro = precioTotal;
			precioDobleCaro = precioTotal;
			precioVeggieCaro = precioTotal;
		} else {
			if (precioSimpleCaro > precioDobleCaro && precioSimpleCaro > precioVeggieCaro) {
				nombreHamburguesaCara = nombreCliente;
				apellidoHamburguesaCara = apellidoCliente;
			} else {
				if (precioDobleCaro > precioSimpleCaro && precioDobleCaro > precioVeggieCaro) {
					nombreHamburguesaCara = nombreCliente;
					apellidoHamburguesaCara = apellidoCliente;
				} else {
					nombreHamburguesaCara = nombreCliente;
					apellidoHamburguesaCara = apellidoCliente;
				}
			}
		}

		acumEdadClientes += edadCliente;

		continuar = confirm('Quiere ingresar otro Cliente?');
	}

	promedioSimple = hamburguesaSimple * (precioSimple / 100);
	promedioDoble = hamburguesaDoble * (precioDoble / 100);
	promedioVeggie = hamburguesaVeggie * (precioVeggie / 100);
	promedioEdad = acumEdadClientes * (edadCliente / 100);

	console.log(`
	hamburguesaMasComprada: ${hamburguesaMasComprada}
	hamburguesaMenosCompradaNombre: ${hamburguesaMenosCompradaNombre}
	promedioSimple: ${promedioSimple}
	promedioDoble: ${promedioDoble}
	promedioVeggie: ${promedioVeggie}
	promedioEdad: ${promedioEdad}
	nombreHamburguesaCara: ${nombreHamburguesaCara}
	apellidoHamburguesaCara: ${apellidoHamburguesaCara}
	`)
}


//normal
/*
function mostrar()
{
	var num;
	
	num = 10;
	
	while (num > 0)
	{
		alert(num);
		num--;
	}
}*/