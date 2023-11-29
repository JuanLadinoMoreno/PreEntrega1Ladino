const carVacio = document.querySelector("#carVacio");
const productsCarr = document.querySelector("#productsCarr");
const accCarr = document.querySelector("#accCarr");
const carrComprado = document.querySelector("#carrComprado");
let btnEliminar = document.querySelector("#btnEliminar");
let btnVaciar = document.querySelector("#btnVaciar");
let totalPagar = document.querySelector("#totalPagar");
let btnComprar = document.querySelector("#btnComprar");


const cargaProductosCar = async () => {


    let prodCarrLS = await getStorage();

    if (prodCarrLS && prodCarrLS.length > 0) {

        carVacio.classList.add("disabled");
        carrComprado.classList.add("disabled");
        productsCarr.classList.remove("disabled"); 
        accCarr.classList.remove("disabled");

        productsCarr.innerHTML = "";
        prodCarrLS.forEach(producto => {
           
            const div = document.createElement("div");
            div.classList.add("prodCarr");
            div.innerHTML = `
            <!---->    <img class="imgPro" src="${producto.producto.urlImg}" alt="${producto.titulo}" style="width:80px;">     
                        <div class="titu">
                            <small>Producto</small>
                             <h4>${producto.producto.nombre}</h4>
                        </div>
                        <div class="cantidad">
                            <small>Cantidad</small>
                            <p>${producto.cantidad}</p>
                        </div>
                        <div class="precio">
                            <small>Precio</small>
                            <p>$${producto.producto.precio}</p>
                        </div>
                        <div class="subtotal">
                            <small>Subtotal</small>
                            <p>$${producto.producto.precio * producto.cantidad}</p>
                        </div>
                         <button onclick="javascript:eliminarDelCarrito(${producto.producto.id});" class="btnEliminar"><i class="bi bi-trash-fill"></i></button> 
                    <!--     <button class="btnEliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button> -->
                        
                        
                        `;
            productsCarr.append(div);

        })

        const divTotal = document.createElement("div");
        divTotal.classList.add("accCarr");
        divTotal.innerHTML = `
        
                       
                        `;
        productsCarr.append(divTotal);

    } else {
        carVacio.classList.remove("disabled");
        carrComprado.classList.add("disabled");
        productsCarr.classList.add("disabled");
        accCarr.classList.add("disabled");

    }

    calcularTotal();
}

cargaProductosCar();


const eliminarDelCarrito = async (id) => {
 
    
    let prodCarrLS = await getStorage();
    let nomProd = prodCarrLS.map((prod) => prod.producto.nombre);

    const index = getIndex(
        id,
        prodCarrLS.map((prod) => prod.producto.id)
    );

    const nombre = nomProd[index];
    
    Swal.fire({
        title: "Seguro que deseas eliminar el producto?  " + nombre,
        showDenyButton: false,
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: "Acepto",
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {

            prodCarrLS.splice(index,1);
            cargaProductosCar();
            localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(prodCarrLS));

            Swal.fire("Producto eliminado", "", "success");
        } 
    });
    
}

btnVaciar.addEventListener("click", async ()  => {

    let prodCarrLS = await getStorage();

    Swal.fire({
        title: "Seguro que deseas vaciar el carrito con su pedido?",
        showDenyButton: false,
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: "Acepto"
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            prodCarrLS.length = 0;
            localStorage.setItem("carrShop", JSON.stringify(prodCarrLS));
            cargaProductosCar();
            
            Swal.fire("El carrito de compras se ha vaciado", "", "success");
        }
    });
});

function vaciarCarro(){
    prodCarrLS.length = 0;
    localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(prodCarrLS));
    cargaProductosCar();
}


async function calcularTotal(){
    let prodCarrLS = await getStorage();
    totalPagar.innerText = "$" + prodCarrLS.reduce((acc, producto) => acc + (producto.cantidad * producto.producto.precio), 0);
}

btnComprar.addEventListener("click", async () => {
    let prodCarrLS = await getStorage();
    Swal.fire({
        title: "Seguro que deseas comprar su pedido?",
        showDenyButton: false,
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: "Comprar"
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            prodCarrLS.length = 0;
            localStorage.setItem("carrShop", JSON.stringify(prodCarrLS));
            cargaProductosCar();
            
            Swal.fire("Compra realizada", "", "success");
        }
    });
});



