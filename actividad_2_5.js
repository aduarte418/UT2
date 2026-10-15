// Lote de transacciones que llega de la API (mezcla tipos de datos de forma incorrecta)
let transacciones = ["100.50", "200.00", "ERROR_RECHAZADO", "50.25", "9999.99", "10.00"];
let saldoTotal = 0;
 

console.log("Iniciando auditoría de transacciones...");
 
//Con y sin el "=" en i<(=) transacciones.length, con el parseo en el Bug 3, se suman los valores y da 350.75 
for (let i = 0; i < transacciones.length; i++) {
    let transaccion = (transacciones[i]);
 
 
    // Bug 1: Controlar valores corruptos
    if (transaccion === "ERROR_RECHAZADO") {
        console.log("Transacción corrupta saltada.");
        // Falta algo aquí para saltar a la siguiente vuelta... (continue)
        continue;
    } 
 
    // Bug 2: Detener operaciones sospechosas (Alerta de fraude si supera 5000)
    if (transaccion > 5000) {
        console.log("¡Alerta de Fraude detectada! Cancelando proceso.");
        // Falta algo aquí para abortar el bucle inmediatamente... (break)
        break;
    }
 
    // Bug 3: Coerción de tipos oculta

    // Convertir explícitamente a número decimal mediante parseFloat
    transaccion = parseFloat(transacciones[i]);

    // Después añadir
    saldoTotal += transaccion; 

}
 
 
console.log("Saldo total auditado: " + saldoTotal);