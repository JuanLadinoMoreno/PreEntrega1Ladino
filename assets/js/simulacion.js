
// console.table(productos);
// alert(tipo[1].nombre);

//CONVIERTE EL ARREGLO DE TIPOS DE PRODUCTOS A INSTANCIAS DE TipoProducto
let tiposP = arrTipoProducto.map((p) => {
     return new TipoProducto(
        p.id, 
        p.nombre
        )
    // p.id +" " + p.nombre
})

let tiposBurguer = arrTipoBurg.map((p) => 
    // return new TipoProducto(
    //    p.id, 
    //    p.nombre
    //    )
   p.id +" " + p.nombre
)
// let tipoSelec = alert(tiposP.join(" -- ") + " /n" + "Seleccione el numero de Producto")

let precioTotal = 0
let carrito = []
let numAl =  Math.floor(Math.random() * 50);

let ordenar = prompt("Desea ordenar? SI / NO").toUpperCase();

let arrOrden =  productosOrdenados.map((p) => {
    return new Burguer(
        p.id, 
        p.nombre, 
        p.pan, 
        p.preparacion, 
        p.ingrePrep, 
        p.carne,
        p.catsup,
        p.mayo, 
        p.mostaza, 
        p.jito, 
        p.cebo, 
        p.pica,
        p.precio
       )
   // p.id +" " + p.nombre
})

let cargarCarrito = (id, producto, cantidad, costoU, costo) => {
    //  let carrito = (producto, cantidad, costo);
     let arreCa = new Orden (id, producto, cantidad, costoU, costo)
     return arreCa
}



//CARGAR BURGUER
let cargaBurguer = (
    id,
    nombre,
    pan,
    preparacion,
    ingrePrep,
    carne,
    catsup,
    mayo,
    mostaza,
    jito,
    cebo,
    pica,
    precio) => {
    let produc = new Burguer(
        id,
        nombre,
        pan,
        preparacion,
        ingrePrep,
        carne,
        catsup,
        mayo,
        mostaza,
        jito,
        cebo,
        pica,
        precio,
    );
    
    let cantidad = parseInt(prompt("Cuantas Unidades desea agragar?"))
    let sum = cantidad * parseInt(produc.precio)
    // alert("precio costo" + sum)
    arrOrden.push(produc);
    carrito.push(cargarCarrito("Orden00" + numAl.toString(), produc, cantidad, parseInt(produc.precio), sum));
    console.table(carrito)
    alert("Producto agregado")
    console.table(arrOrden)
}




let tota = 0

//Funcion control de Productos
let menuProduct = (val) => {
    switch (val) {
        case "1":
            // alert("Selecciono hamburguesas");
            let selec = prompt("Seleccione numero de Hamburguesa a elegir:  " + tiposBurguer.join(" -- "))
            menuBurguer(selec);
            ordenar = prompt("Desea ordenar otro producto? SI / NO").toUpperCase();
            if (ordenar == "NO") {
                // let tot = carrito.map((e) => {
                //     tota += e.costo
                // });
                const total = carrito.reduce((acc, el) => acc + el.cant * el.costoU, 0);
                alert("El total de su compra es de: $" + total + "   --Gracias por su compra--")
            }
            break;
    
        default:
            break;
    }
}

let menuBurguer = (val) => {
    switch (val) {
        case "1":
            //Aca ya se carga a un objeto de instacia tipo pedido u orden
            alert("Selecciono hamburguesa tradicional");
            
            cargaBurguer(
                "BURG00" + numAl.toString(),
                "Hamburguesa tradicional",
                 "Pan Blanco",
                preparacion[0].nombre,
                ingredientePreparacion[0].nombre,
                carneBurguer[0].nombre,
                aderesos[0].nombre,
                aderesos[1].nombre,
                aderesos[2].nombre,
                vegetales[0].nombre,
                vegetales[1].nombre,
                vegetales[2].nombre,
                // arrTipoProducto[0].nombre,
                "50"
            );
            break;
            case "2":
                //Aca ya se carga a un objeto de instacia tipo pedido u orden
                alert("Selecciono hamburguesa con tocino");
                
                cargaBurguer(
                    "BURG00" + numAl.toString(),
                    "Hamburguesa con tocino",
                     "Pan Blanco",
                    preparacion[1].nombre,
                    ingredientePreparacion[1].nombre,
                    carneBurguer[0].nombre,
                    aderesos[0].nombre,
                    aderesos[1].nombre,
                    aderesos[2].nombre,
                    vegetales[0].nombre,
                    vegetales[1].nombre,
                    vegetales[2].nombre,
                    // arrTipoProducto[0].nombre,
                    "50"
                );
                break;
                case "3":
                //Aca ya se carga a un objeto de instacia tipo pedido u orden
                alert("Selecciono hamburguesa Hawaiana");
                
                cargaBurguer(
                    "BURG00" + numAl.toString(),
                    "Hamburguesa Hawaiana",
                     "Pan Blanco",
                    preparacion[2].nombre,
                    ingredientePreparacion[2].nombre,
                    carneBurguer[0].nombre,
                    aderesos[0].nombre,
                    aderesos[1].nombre,
                    aderesos[2].nombre,
                    vegetales[0].nombre,
                    vegetales[1].nombre,
                    vegetales[2].nombre,
                    // arrTipoProducto[0].nombre,
                    "50"
                );
                break;
                case "4":
                //Aca ya se carga a un objeto de instacia tipo pedido u orden
                alert("Selecciono hamburguesa con Champiñones");
                
                cargaBurguer(
                    "BURG00" + numAl.toString(),
                    "Hamburguesa con Champiñones",
                     "Pan Blanco",
                    preparacion[3].nombre,
                    ingredientePreparacion[3].nombre,
                    carneBurguer[0].nombre,
                    aderesos[0].nombre,
                    aderesos[1].nombre,
                    aderesos[2].nombre,
                    vegetales[0].nombre,
                    vegetales[1].nombre,
                    vegetales[2].nombre,
                    // arrTipoProducto[0].nombre,
                    "50"
                );
                break;
                case "5":
                //Aca ya se carga a un objeto de instacia tipo pedido u orden
                alert("Selecciono hamburguesa Mexicana");
                
                cargaBurguer(
                    "BURG00" + numAl.toString(),
                    "Hamburguesa Mexicana",
                     "Pan Blanco",
                    preparacion[4].nombre,
                    ingredientePreparacion[4].nombre,
                    carneBurguer[0].nombre,
                    aderesos[0].nombre,
                    aderesos[1].nombre,
                    aderesos[2].nombre,
                    vegetales[0].nombre,
                    vegetales[1].nombre,
                    vegetales[2].nombre,
                    // arrTipoProducto[0].nombre,
                    "50"
                );
                break;
    
        default:
            break;
    }
}





// let tiposPro = arrTipoProducto.map((p) => p.id +" " + p.nombre)
// alert(tiposPro.join(" -- "))

// tipo.forEach(element => {
//     alert(element)
//     console.log(element)
// });








while (ordenar != "SI" && ordenar != "NO") {
    alert("Favor contestar SI ó NO");
    ordenar = prompt("Desea ordenar? SI / NO").toUpperCase();
}

if (ordenar == "SI") {

    while (ordenar == "SI") {
        // alert("Nuestros sabores de hamburguesas son:  tradicoinal $50 - tocino $50 - hawaiana $50 - champiñon $50 - mexicana $50" );
        // agregaCarrito(prompt("Que sabor desea ingresar?"));

        let prodSelec = prompt("Seleccione numero de Producto:  " + tiposP.join(" -- "))
        
        menuProduct(prodSelec);
    }

} 
// else if(carrito.length > 0){
//     const total = carrito.reduce((acc, el) => acc + el.sum, 0);
//     prompt("Total: " + total)
//     // console.table(arrOrden)
// }
else{
    alert("Gracias por visitarnos");
}



