# Actividad 2.7 - Broken Code


**Ejercicio 1**

El error está a la hora de llamar a la variable "result" en el log, que se llama erróneamente con "reslt" , siendo pues simplemente un error tipográfico que al corregirlo funciona.


**Ejercicio2**

El error está en la condición del if, ya que al comparar la edad de la variable se utiliza la expresión "=>", que es una función flecha en lugar de un comparador (debería ser ">="). Error lógico. 


**Ejercicio 3**

El error está en que la función multiplicar no devuelve nada al tener su return comentado. Si se "descomenta", la función devuelve el resultado de la operación y su valor puede ser utilizado cuando se llama. Error lógico.


**Ejercicio 4**

El error está en que a la función le entra una variable "nombre" pero luego se "opera" dentro de ella con una variable que no existe llamada "name". Se corrige sustituyendo "name" por "nombre". 


**Ejercicio 5**

El error está en el <= del bucle for, que al igualar la longitud máxima del array (sin tener en cuenta que las posiciones del array son uno menos) intenta recorrer una posición que está fuera del límite del array. Error lógico que se corrige eliminando el = y dejando el <.


**Ejercicio 6**

El error está en el operador del resto, que tras % 2 se coloca sólo un igual que lo que hace es asignar un valor. Error lógico que se corrige reemplazándolo por "==", que sí compara si el resto es igual a 0.

**Ejercicio 7**

El error sucede al utilizar parámetros en la función procesarDatos, ya que se ejecuta un método callback que recibe un dato "dat" que no se ha definido. Y al llamar a dicha función en la función, no realiza la operación al no existir esa variable. Se sustituye por "datos" y ya se devuelven los datos en el log.


**Ejercicio 8**

Salta error porque la variable msj que imprime el mensaje no está definida. Error al llamar a la variable que se soluciona sustituyendo "msj" por "msg", que coincide con la que debe imprimir y funciona.


**Ejercicio 9**

La causa del fallo es que el valor de descuento debe expresarse con un número entre 0 y 1, aplicándose así directamente el porcentaje al cálculo (por eso el primer log devuelve 80 si es 0.2, el 20% de 100, mientras que el segundo devuelve -5900 porque al calcular el porcentaje que después restará multiplca 100 * 60, de acuerdo a la revisión de pasos intermedios con los breakpoints). Para que el segundo log no devuelva el resultado incoherente, el valor de 60 debería 0.6.






