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
                <div class="card d-flex flex-row justify-content-center align-items-center w-100 bg-transparent border-0" style="">
                    <img src="${producto.producto.urlImg}"  class="card-img-top" alt="..." style="width: 8rem;">
                    <div class="card-body d-flex flex-row justify-content-around">
                        <h3 class="card-title">${producto.producto.nombre}</h3>
                        <p class="card-text fs-5">Cantidad:  <br> <span class="fw-bolder fs-5">${producto.cantidad} </span></p>
                        <p class="card-text fs-5">Precio: <br> <span class="fw-bolder fs-5">${producto.producto.precio} </span></p>
                        <p class="card-text fs-5">Subtotal: <br> <span class="fw-bolder fs-5">${producto.producto.precio * producto.cantidad} </span></p>
                        <button onclick="javascript:eliminarDelCarrito(${producto.producto.id});" class="btnEliminar"><i class="bi bi-trash-fill"></i></button> 
                    </div>
                </div>
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
            
            localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(prodCarrLS));

            Swal.fire("Producto eliminado", "", "success");
            cargaProductosCar();
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
            localStorage.removeItem("carrShop");
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
            localStorage.removeItem("carrShop");
            cargaProductosCar();
            
            Swal.fire("Compra realizada", "", "success");
        }
    });
});