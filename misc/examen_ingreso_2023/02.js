//NOMBRE: Angel
//APELLIDO: Farina

/*2)
Se desea desarrollar un programa que
 permita al usuario ingresar el nombre de un videojuego, año emitido 
 (Superior a 2000), si es online u offline y su costo.
Realizar las siguientes operaciones:

A - Encontrar el videojuego más caro y el más barato ingresado.
B - Calcular el promedio de los costos de los videojuegos, pero solo para aquellos que son online.
C - Encontrar los videojuegos con el costo máximo y mínimo de aquellos emitidos antes de 2015.
D - Calcular el porcentaje de videojuegos offline en relación al total de videojuegos ingresados. */

var problema_2 = `PROBLEMA 2`

function mostrar() 
{
    var videojuego;
    var año;
    var onoff;
    var costo;
    var costomasbarato;
    var nombremasbarato = "";
    var costomascaro;
    var nombremascaro = "";
    var flagcosto = true;
    var onlinecont = 0;
    var offlinecont = 0;
    var onlinecosttotal = 0;
    var promediocostoonline;
    var continuar = true;
    var maxcost2015 = 0;
    var nombremax2015 = "";
    var mincost2015 = 0;
    var nombremin2015 = "";
    var flag2015 = true;
    var porcentaje;
    var videojuegocont = 0;

    
    while (continuar == true) {
        videojuego = prompt("ingrese videojuego");
        while (videojuego == "") 
        {
        videojuego = prompt("ERROR ingrese videojuego");
        }

        //PIDO DATOS NUMEROS VALIDANDO
        año = prompt("ingrese año superior a 2000");
        año = parseInt(año);
        while(isNaN(año) == true || año < 2000)
        {
            año = prompt("ERROR ingrese año superior a 2000");
            año = parseInt(año);
        }

        //PIDO DATOS TEXTO VALIDANDO
        onoff = prompt("ingrese si es online u offline");
        while (onoff != "online" && onoff != "offline") 
        {
        onoff = prompt("ERROR ingrese si es online u offline");
        }

        //PIDO DATOS NUMEROS VALIDANDO
        costo = prompt("ingrese costo");
        costo = parseInt(costo);
        while(isNaN(costo) == true || costo < 0)
        {
            costo = prompt("ERROR ingrese costo");
            costo = parseInt(costo);
        }

        //costo mas barato y caro
        if (flagcosto == true) {
            costomasbarato = costo;
            costomascaro = costo;
            flagcosto = false;
        }
        else
        {
            if (costo < costomasbarato) {
                costomasbarato = costo;
                nombremasbarato = videojuego;
            }
            else
            {
                if (costo > costomascaro) 
                {
                    costomascaro = costo;
                    nombremascaro = videojuego;
                }
            }
        }
        
        switch (onoff) {
            case "online":
                onlinecont++;
                onlinecosttotal += costo;
                break;
        
            case "offline":
                offlinecont++;
                break;
        }

        //C - Encontrar los videojuegos con el costo máximo y mínimo de aquellos emitidos antes de 2015.
        if (año < 2015)
        {
            if (flag2015 == true) 
            {
                if (costo > maxcost2015) {
                    maxcost2015 = costo;
                    nombremax2015 = videojuego;
                }
                else
                {
                    if (costo > mincost2015) {
                        mincost2015 = costo;
                        nombremin2015 = videojuego;
                    }
                }
                flag2015 = false;
            }
        }
        videojuegocont++;

        continuar = confirm(`continuar?`);
    }

    console.log(`el mas barato ${nombremasbarato}`)
    console.log(`el mas caro ${nombremascaro}`)

    promediocostoonline = onlinecosttotal / onlinecont;
    console.log(`el promedio online ${promediocostoonline}`)

    console.log(`el video juego con el costo maximo antes de 2015 ${nombremax2015}`)
    console.log(`el video juego con el costo minimo antes de 2015 ${nombremin2015}`)

    //D - Calcular el porcentaje de videojuegos offline en relación al total de videojuegos ingresados. */
    porcentaje = (offlinecont * 100) / videojuegocont;
    console.log(`porcentaje de videojuegos offline es ${porcentaje.toFixed(2)}`)
}