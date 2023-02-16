/*
Las lámparas están al mismo precio de $35 pesos final.
A. Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%.
B. Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % 
y si es de otra marca el descuento es del 30%.
C. Si compra 4 lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” 
se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D. Si compra 3 lamparitas bajo consumo marca "ArgentinaLuz" el descuento es del 15%, 
si es “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E. Si el importe final con descuento suma más de $120 se debe sumar un 10% de ingresos 
brutos en informar del impuesto con el siguiente mensaje: ”IIBB Usted pago X”, siendo X el impuesto que se pagó. */

// Angel Farina

// SOLO SWITCH
/*
function CalcularPrecio () 
{
    var PRECIO_LAMPARAS;
    var IMPUESTO_IIBB;
    var EMPRESA;
    var cantidadLamparas;
    var descuentoAplicado;
    var totalSinDescuento;
    var totalConDescuento;
    var descuento;
    var totalConImpuesto;
    var MENSAJE;

    PRECIO_LAMPARAS = 35;
    IMPUESTO_IIBB = 10;
    descuentoAplicado = 0;
    cantidadLamparas = parseInt(txtIdCantidad.value);
    EMPRESA = Marca.value;
    
    switch(cantidadLamparas)
    {
        case 5:
            switch(EMPRESA)
            {
                case "ArgentinaLuz":
                    descuentoAplicado = 40;
                    break;
                default:
                    descuentoAplicado = 30;
                    break;
            }
            break;
        case 4:
            switch(EMPRESA)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuentoAplicado = 25;
                    break;
                default:
                    descuentoAplicado = 20;
                    break;
            }
            break;
        case 3:
            switch(EMPRESA)
            {
                case "ArgentinaLuz":
                    descuentoAplicado = 15;
                    break;
                case "FelipeLamparas":
                    descuentoAplicado = 10;
                    break;
                default:
                    descuentoAplicado = 5;
            }
            break;
        case 2:
        case 1:
            descuentoAplicado;
            break;
        default:
            descuentoAplicado = 50;
            break;
    }

    totalSinDescuento = cantidadLamparas*PRECIO_LAMPARAS;
    descuento = (totalSinDescuento*descuentoAplicado)/100;
    totalConDescuento = totalSinDescuento-descuento;
    IMPUESTO_IIBB = (totalConDescuento*IMPUESTO_IIBB)/100;
    totalConImpuesto = totalConDescuento+IMPUESTO_IIBB;
    MENSAJE = `Usted pago $${IMPUESTO_IIBB.toFixed(2)} de IIBB`;

    if(totalConDescuento > 119,99){
        alert(MENSAJE);
    }

    txtIdprecioDescuento.value = totalConDescuento;

    console.log(`
    Total sin descuento: $${totalSinDescuento}
    Descuento: $${descuento}
    Total con descuento $${totalConDescuento}
    Impuesto IIBB: $${IMPUESTO_IIBB}
    Total con impuesto: $${totalConImpuesto}
    `)
}
*/

// SOLO IF(MARCA)
/*
function CalcularPrecio () 
{
    var PRECIO_LAMPARAS;
    var IMPUESTO_IIBB;
    var EMPRESA;
    var cantidadLamparas;
    var descuentoAplicado;
    var totalSinDescuento;
    var totalConDescuento;
    var descuento;
    var totalConImpuesto;
    var MENSAJE;
    

    PRECIO_LAMPARAS = 35;
    IMPUESTO_IIBB = 10;
    descuentoAplicado = 0;
    cantidadLamparas = parseInt(txtIdCantidad.value);
    EMPRESA = Marca.value;
    
    if(EMPRESA == "ArgentinaLuz")
    {
        if(cantidadLamparas == 5)
        {
            descuentoAplicado = 40;
        }
        else
        {
            if(cantidadLamparas == 4)
            {
                descuentoAplicado = 25;
            }
            else
            {
                descuentoAplicado = 15;
            }
        }
    }
    else
    {
        if(EMPRESA == "FelipeLamparas")
        {
            if(cantidadLamparas == 4)
            {
                descuentoAplicado = 25;
            }
            else
            {
                if(cantidadLamparas == 3)
                {
                    descuentoAplicado = 10;
                }
            }
        }
        else
        {
            if(cantidadLamparas > 5)
            {
                descuentoAplicado = 50;
            }
            else
            {
                if(cantidadLamparas == 5)
                {
                    descuentoAplicado = 30;
                }
                else
                {
                    if(cantidadLamparas == 4)
                    {
                        descuentoAplicado = 20;
                    }
                    else
                    {
                        if(cantidadLamparas == 3)
                        {
                            descuentoAplicado = 5;
                        }
                    }
                }
            }
        }
    }

    totalSinDescuento = cantidadLamparas*PRECIO_LAMPARAS;
    descuento = (totalSinDescuento*descuentoAplicado)/100;
    totalConDescuento = totalSinDescuento-descuento;
    IMPUESTO_IIBB = (totalConDescuento*IMPUESTO_IIBB)/100;
    totalConImpuesto = totalConDescuento+IMPUESTO_IIBB;
    MENSAJE = `Usted pago $${IMPUESTO_IIBB.toFixed(2)} de IIBB`;

    if(totalConDescuento > 119,99){
        alert(MENSAJE);
    }

    txtIdprecioDescuento.value = totalConDescuento;

    console.log(`
    Total sin descuento: $${totalSinDescuento}
    Descuento: $${descuento}
    Total con descuento $${totalConDescuento}
    Impuesto IIBB: $${IMPUESTO_IIBB}
    Total con impuesto: $${totalConImpuesto}
    `)
}*/

// SOLO IF(CANTIDAD)
/*
function CalcularPrecio () 
{
    var PRECIO_LAMPARAS;
    var IMPUESTO_IIBB;
    var EMPRESA;
    var cantidadLamparas;
    var descuentoAplicado;
    var totalSinDescuento;
    var totalConDescuento;
    var descuento;
    var totalConImpuesto;
    var MENSAJE;
    

    PRECIO_LAMPARAS = 35;
    IMPUESTO_IIBB = 10;
    descuentoAplicado = 0;
    cantidadLamparas = parseInt(txtIdCantidad.value);
    EMPRESA = Marca.value;
    

    if(cantidadLamparas > 5)
    {
        descuentoAplicado = 50;
    }
    else
    {
        if(cantidadLamparas  == 5)
        {
            if(EMPRESA == "ArgentinaLuz")
            {
                descuentoAplicado = 40;
            }
            else
            {
                descuentoAplicado = 30;           
            }
        }
        else
        {
            if(cantidadLamparas == 4)
            {
                if(EMPRESA == "ArgentinaLuz")
                {
                    descuentoAplicado = 25;
                }
                else
                {
                    if(EMPRESA == "FelipeLamparas")
                    {
                        descuentoAplicado == 25;
                    }
                    else
                    {
                        descuentoAplicado == 20;
                    }
                }
            }
            else
            {
                if(cantidadLamparas == 3)
                {
                    if(EMPRESA == "ArgentinaLuz")
                    {
                        descuentoAplicado = 15;
                    }
                    else
                    {
                        if(EMPRESA == "FelipeLamparas")
                        {
                            descuentoAplicado = 10;
                        }
                        else
                        {
                            descuentoAplicado = 5;
                        }
                    }
                }
            }
        }
    }

    totalSinDescuento = cantidadLamparas*PRECIO_LAMPARAS;
    descuento = (totalSinDescuento*descuentoAplicado)/100;
    totalConDescuento = totalSinDescuento-descuento;
    IMPUESTO_IIBB = (totalConDescuento*IMPUESTO_IIBB)/100;
    totalConImpuesto = totalConDescuento+IMPUESTO_IIBB;
    MENSAJE = `Usted pago $${IMPUESTO_IIBB.toFixed(2)} de IIBB`;

    if(totalConDescuento > 119,99){
        alert(MENSAJE);
    }

    txtIdprecioDescuento.value = totalConDescuento;

    console.log(`
    Total sin descuento: $${totalSinDescuento}
    Descuento: $${descuento}
    Total con descuento $${totalConDescuento}
    Impuesto IIBB: $${IMPUESTO_IIBB}
    Total con impuesto: $${totalConImpuesto}
    `)
}
*/