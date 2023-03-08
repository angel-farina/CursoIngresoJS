import tkinter
from tkinter.messagebox import showinfo as alert
from tkinter.messagebox import askyesno as question
from tkinter.simpledialog import askstring as prompt
import customtkinter

'''
Nombre: Matias
Apellido: Di girolamo

Enunciado:

A) Al presionar el botón 'Agregar' se debera cargar el precio iva incluido en la lista 
correspondiente, 
   segun se trate de un articulo con IVA del 21% o del 10.5%.

   La condicion del articulo frente al IVA es indicada mediante una lista desplegable.

** Flotantes positivos

Si existe error al validar indicarlo mediante un Alert
Si se cargo  correctamente indicarlo con un Alert

-- SOLO SE CARGARAN LOS VALORES SI Y SOLO SI SON CORRECTOS --

B) Al precionar el boton mostrar se deberan listar los precios sin iva y 
su posicion en la lista (por terminal)

¡¡IMPORTANTE!!

Del punto C solo debera realizar dos informes,
para determinar que informe hacer, tenga en cuenta lo siguiente:
    
    1- Tome el ultimo numero de su DNI Personal (Ej 4) y realiza ese informe (Ej, Realizar 
    informe 4)

    2- Tome el ultimo numero de su DNI Personal (Ej 4), y restarselo al numero 9 (Ej 9-4 = 5). 
    Realiza el informe correspondiente al numero obtenido.
    
EL RESTO DE LOS INFORMES LOS PUEDE IGNORAR.

C) Al precionar el boton Informar 
    0- Valor y posicion frente al IVA del o los Articulo/s sin IVA mas caro/s
    1- Valor y posicion frente al IVA del o los Articulo/s mas barato IVA incluido
    2- Precio promedio sin IVA
    3- Precio promedio con IVA
    4- Valor y posicion frente al IVA del o los Articulo/s que son mas caros que el promedio 
    sin IVA
    5- Valor y posicion frente al IVA del o los Articulo/s que son mas baratos que el promedio 
    sin IVA
    6- Valor y posicion frente al IVA del o los Articulo/s que son mas caros que el promedio 
    con IVA
    7- Valor y posicion frente al IVA del o los Articulo/s que son mas baratos que el promedio 
    con IVA
    8- Valor y posicion frente al IVA del o los Articulo/s cuyo valor se repite en la lista 
    que integra
    9- Valor y posicion frente al IVA del o los Articulo/s cuyo valor NO se repite en la lista 
    que integra

'''

class App(customtkinter.CTk):
    
    def __init__(self):
        super().__init__()

        # configure window
        self.title("EXAMEN INGRESO")

        self.txt_precio_articulo = customtkinter.CTkEntry(master=self, placeholder_text="Precio")
        self.txt_precio_articulo.grid(row=1, padx=20, pady=20)

        self.combobox_iva = customtkinter.CTkComboBox(master=self, values=["10.5","21"])
        self.combobox_iva.grid(row=2, column=0, padx=20, pady=(10, 10))

        self.btn_agregar = customtkinter.CTkButton(master=self, text="Agregar", command=self.btn_agregar_on_click)
        self.btn_agregar.grid(row=3, padx=20, pady=20, columnspan=2, sticky="nsew")
       
        self.btn_mostrar = customtkinter.CTkButton(master=self, text="Mostrar", command=self.btn_mostrar_on_click)
        self.btn_mostrar.grid(row=4, padx=20, pady=20, columnspan=2, sticky="nsew")

        self.btn_informar= customtkinter.CTkButton(master=self, text="Informar", command=self.btn_informar_on_click)
        self.btn_informar.grid(row=5, padx=20, pady=20, columnspan=2, sticky="nsew")        

        self.lista_precios_21 = [121 , 242 , 34]
        self.lista_precios_105 = [110.50 , 221 , 22.2]


    def btn_agregar_on_click(self):
        #tomo el precio y el iva ingresado en las cajas
        precio_sin_iva_texto =  self.txt_precio_articulo.get()
        iva_texto =  self.combobox_iva.get()
        #ininializo contador
        contador_puntos = 0

        #valido que el ingreso no este vacio
        if(precio_sin_iva_texto != ""):
            flag_precio_ok = True
            #valido buscando caracteres en la caja de string que traje
            for letra in precio_sin_iva_texto:
                if(letra < '0' or letra > '9' and letra != '.'):
                    flag_precio_ok = False
                    break
                else:
                    #si no tiene errores cuento 1 punto para lograr que tenga 1 solo punto
                    if(letra == '.'):
                        contador_puntos = contador_puntos + 1
        else:
            flag_precio_ok = False

        #si la validacion esta ok, convierto de string a float
        if(flag_precio_ok != False and contador_puntos <= 1):
            precio_sin_iva_float = float(precio_sin_iva_texto)
            #si el iva de la caja es 21 hago la multiplicacion
            if(iva_texto == '21'):
                precio_sin_iva_float = precio_sin_iva_float * 1.21
                #lo agrego a la lista de iva 21
                self.lista_precios_21.append(precio_sin_iva_float)
                alert(title = "Correcto", message="Se cargo correctamente")
                #y si es 10.5 lo multiplico y lo agrego a la lista 10.5
            elif(iva_texto == '10.5'):
                precio_sin_iva_float = precio_sin_iva_float * 1.105
                #lo agrego a la lista de iva 21
                self.lista_precios_105.append(precio_sin_iva_float)
                alert(title = "Correcto", message="Se cargo correctamente")
        else:
            alert(title = "Error", message="El valor no es valido")

    def btn_mostrar_on_click(self):
        #FORMA 1
        indice = 0
        for precio_con_iva in self.lista_precios_105:
            mensaje = "{0} - El precio es: {1} - IVA 10.5".format(indice, precio_con_iva / 1.105)
            indice = indice + 1
            print(mensaje)

        #FORMA 2
        longitud_lista = len(self.lista_precios_21)
        for indice in range(longitud_lista):
            mensaje = "{0} - El precio es: {1} - IVA 21".format(indice, self.lista_precios_21[indice] / 1.21)
            print(mensaje)


    def btn_informar_on_click(self):
        self.informe_1()


    #distintas funciones para cada ejercicio y se llaman arriba uno a uno
    def informe_0(self):
        # 0- Valor y posicion frente al IVA del o los Articulo/s sin IVA mas caro/s
        lista_articulos_105_21_sin_iva = []
        #creo una lista y meto todos los articulos recorriendo las listas anteriores quitando el iva
        for precio_con_iva in self.lista_precios_105:
            precio_sin_iva = precio_con_iva / 1.105
            lista_articulos_105_21_sin_iva.append(precio_sin_iva)
        for precio_con_iva in self.lista_precios_21:
            precio_sin_iva = precio_con_iva / 1.21
            lista_articulos_105_21_sin_iva.append(precio_sin_iva)
        
        #busco un maximo
        precio_sin_iva_maximo = None
        for precio_sin_iva in lista_articulos_105_21_sin_iva:
            if(precio_sin_iva_maximo == None or precio_sin_iva > precio_sin_iva_maximo):
                precio_sin_iva_maximo = precio_sin_iva

        #muestro el mensaje para cada lista
        indice = 0
        for precio_con_iva in self.lista_precios_105:
            precio_sin_iva = precio_con_iva / 1.105
            if(precio_sin_iva_maximo == precio_sin_iva):
                mensaje = "En la pos: {0} - El precio MAXIMO es: {1} - IVA 10.5".format(indice, precio_sin_iva)
            indice = indice + 1
            print(mensaje)


        indice = 0
        for precio_con_iva in self.lista_precios_21:
            precio_sin_iva = precio_con_iva / 1.21
            if(precio_sin_iva_maximo == precio_sin_iva):
                mensaje = "En la pos: {0} - El precio MAXIMO es: {1} - IVA 21".format(indice, precio_sin_iva)
            indice = indice + 1
            print(mensaje)



    def informe_1(self):
        # 1- Valor y posicion frente al IVA del o los Articulo/s mas barato IVA incluido
        #junto ambas listas con iva en una sola lista con el extend
        lista_articulos_105_21_con_iva = []
        lista_articulos_105_21_con_iva.extend(self.lista_precios_105)
        lista_articulos_105_21_con_iva.extend(self.lista_precios_21)

        #busco un minimo
        precio_sin_iva_minimo = None
        for precio_con_iva in lista_articulos_105_21_con_iva:
            if(precio_sin_iva_minimo == None or precio_con_iva < precio_sin_iva_minimo):
                precio_sin_iva_minimo = precio_con_iva

        longitud_lista = len(self.lista_precios_21)
        for indice in range(longitud_lista):
            if(self.lista_precios_21[indice] == precio_sin_iva_minimo):
                mensaje = "En la pos: {0} - El precio MINIMO es: {1} - IVA 21".format(indice, self.lista_precios_21)
                print(mensaje)

        longitud_lista = len(self.lista_precios_105)
        for indice in range(longitud_lista):
            if(self.lista_precios_105[indice] == precio_sin_iva_minimo):
                mensaje = "En la pos: {0} - El precio MINIMO es: {1} - IVA 10.5".format(indice, self.lista_precios_105)
                print(mensaje)

    # 2- Precio promedio sin IVA
    # 3- Precio promedio con IVA
    # 4- Valor y posicion frente al IVA del o los Articulo/s que son mas caros que el promedio sin IVA
    # 5- Valor y posicion frente al IVA del o los Articulo/s que son mas baratos que el promedio sin IVA
    # 6- Valor y posicion frente al IVA del o los Articulo/s que son mas caros que el promedio con IVA
    # 7- Valor y posicion frente al IVA del o los Articulo/s que son mas baratos que el promedio con IVA
    # 8- Valor y posicion frente al IVA del o los Articulo/s cuyo valor se repite en la lista que integra
    # 9- Valor y posicion frente al IVA del o los Articulo/s cuyo valor NO se repite en la lista que integra


if __name__ == "__main__":
    app = App()
    app.mainloop()    