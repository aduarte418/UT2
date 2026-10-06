# Actividad 2.3 - Rastreador de Memoria

| Identificador | Predicción | Justificación |
|--------------|--------------|--------------|
| Log A | Undefined | La variable declarada con var se eleva (Hoisting) y se inicializa con el valor por defecto "undefined", que es el que se devuelve al ser el que se guarda en memoria, dado que el log que la llama se ejecuta antes de que se declare y asigne un valor. |
| Log B | Valor de la variable "producto" ("Teclado Mecánico") | Al ejecutarse el log una vez declarada la variable con var, de ámbito global, se muestra por pantalla el valor asignado a la misma ("Teclado Mecánico"). |
| Log C | Valor de la variable descuento ("25") | Se muestra el valor de la variable descuento, que es 25 porque al ser declarada con let en el condicional, al ejecutarse el log en el propio if se muestra por pantalla "25" (ámbito de bloque definido por llaves {}). |
| Log D | Valor de la variable descuento ("10") | Se muestra el valor de la variable descuento, que es 10 porque al ser declarada con var dentro de la función pero fuera del condicional, al ejecutarse el log en la propia función muestra el valor asignado dentro de ella (ámbito de función). |
| Log E | Error/"¡ERROR CATÁSTROFICO!" | Se ejecuta el log en un if, pero como su variable es una constante declarada en otro bloque if (donde no está anidado el del log), se produce el error, dado que las constantes tienen ámbitos de bloque y no pueden ser llamadas fuera del mismo (el if anterior donde se declaró). Al capturarse el error se imprime el mensaje "¡ERROR CATÁSTROFICO!". |
| Log F | Error/"¡ERROR CATÁSTROFICO!" | Se ejecuta el log antes de declararse la variable. Al ser declarada con let no se ha elevado, produciéndose error al intentar acceder a una variable antes de ser declarada. Al capturarse el error se imprime el mensaje "¡ERROR CATÁSTROFICO!". |

**Comprobación en Consola con DevTools**

![](/Screenshots/Act2.3Console.png)

**Conclusión crítica**

El uso de var tiene un comportamiento impredecible dado su ámbito y el hoisting, provocando que los valores de sus variables puedan recibirlas otras distintas, disminuyendo el control sobre las variables necesario para proyectos grandes.
