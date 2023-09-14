
let ordenar = prompt("Desea ordenar? SI / NO").toUpperCase();


while (ordenar != "SI" && ordenar != "NO") {
    alert("Favor contestar SI ó NO");
    ordenar = prompt("Desea ordenar? SI / NO").toUpperCase();
}

if (ordenar == "SI") {

    while (ordenar == "SI") {
        alert("Nuestros sabores de hamburguesas son:  tradicoinal $50 - tocino $50 - hawaiana $50 - champiñon $50 - mexicana $50" );
        agregaCarrito(prompt("Que sabor desea ingresar?"));
    }

} else {
    alert("Gracias por visitarnos");
}


function agregaCarrito(sabor) {
    let precio = 50;

    if (sabor == "tradicional" || sabor == "tocino" || sabor == "champiñon" || sabor == "mexicana" || sabor == "hawaiana") {
        let doble = prompt("Desea que sea doble por $10 mas? SI / NO").toUpperCase();

        if (doble == "SI") {
            precio = 60;
        }
        let cant = prompt("Cuantas hamburguesas desea?");
        alert("Usted pidio " + cant + " hamburguesa sabor " + sabor + " su costo es de: " + cant * precio);
        
        alert("Producto agregado");



    } else {
        alert("Sabor no disponible")
    }

    ordenar = prompt("Desea seguir ordenando?? SI / NO").toUpperCase();
    if (ordenar == "NO") {
        alert("Gracias por su compra");
    }

}
