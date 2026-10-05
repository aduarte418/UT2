# Actividad 2.3 - Rastreador de Memoria


| Identificador | Predicción | Justificación |
|--------------|--------------|--------------|
| Log A | Undefined | Debido al Hoisting, la variable declarada con var se eleva y se le otorga el valor pordefecto "undefined", ya que el fragmento de código que la llama se ejecuta antes de que exista pero se guarda "undefined" en memoria. |
| Log B | Fila 2, Dato 2 | Fila 2, Dato 3 |
| Log C | Fila 1, Dato 2 | Fila 1, Dato 3 |
| Log D | Fila 2, Dato 2 | Fila 2, Dato 3 |
| Log E | Fila 1, Dato 2 | Fila 1, Dato 3 |
| Log F | Fila 2, Dato 2 | Fila 2, Dato 3 |


**Conclusión crítica**

