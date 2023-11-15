let total = 0;

const  prodCarr = JSON.parse(localStorage.getItem("carrShop"));

const carVacio = document.querySelector("#carVacio");
const productsCarr = document.querySelector("#productsCarr");
const accCarr = document.querySelector("#accCarr");
const carrComprado = document.querySelector("#carrComprado");
let btnEliminar = document.querySelector("#btnEliminar");
let btnVaciar = document.querySelector("#btnVaciar");
let totalPagar = document.querySelector("#totalPagar");
let btnComprar = document.querySelector("#btnComprar");

 //ACTUALIZA LOS BOTONES PARA AGREGAR PRODUCTO
 const actbtnElim = () => {
    btnEliminar = document.querySelectorAll(".btnEliminar");

    btnEliminar.forEach(btn => {
        btn.addEventListener("click", eliminarDelCarrito);
    });
}

const eliminarDelCarrito = (e) => {
    const idBoton = e.currentTarget.id;

    const productoAgregar = prodCarr.find(producto => producto.id === idBoton);
    Swal.fire({
        title: "Seguro que deseas eliminar el producto?" + productoAgregar.nombre,
        showDenyButton: false,
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: "Acepto",
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {

            const index = prodCarr.findIndex(producto => producto.id === idBoton);
            prodCarr.splice(index,1);
            cargaProductosCar();
            localStorage.setItem("carrShop", JSON.stringify(prodCarr));

            Swal.fire("Producto eliminado", "", "success");
        } 
    });



    
    
}

const cargaProductosCar = () => {
    if (prodCarr && prodCarr.length > 0) {

        carVacio.classList.add("disabled");
        carrComprado.classList.add("disabled");
        productsCarr.classList.remove("disabled"); 
        accCarr.classList.remove("disabled");

        productsCarr.innerHTML = "";

        prodCarr.forEach(producto => {
            total += parseInt(producto.cantidad * producto.precio);
            const div = document.createElement("div");
            div.classList.add("prodCarr");
            div.innerHTML = `
                        <img class="imgPro" src="${producto.url}"" alt="${producto.titulo}" style="width:80px;">
                        <div class="titu">
                            <small>Producto</small>
                            <h4>${producto.nombre}</h4>
                        </div>
                        <div class="cantidad">
                            <small>Cantidad</small>
                            <p>${producto.cantidad}</p>
                        </div>
                        <div class="precio">
                            <small>Precio</small>
                            <p>$${producto.precio}</p>
                        </div>
                        <div class="subtotal">
                            <small>Subtotal</small>
                            <p>$${producto.precio * producto.cantidad}</p>
                        </div>
                        <button class="btnEliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
                        
                        
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
    actbtnElim();
    calcularTotal();
}

cargaProductosCar();

btnVaciar.addEventListener("click", () => {

    Swal.fire({
        title: "Seguro que deseas vaciar el carrito con su pedido?",
        showDenyButton: false,
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: "Acepto"
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            prodCarr.length = 0;
            localStorage.setItem("carrShop", JSON.stringify(prodCarr));
            cargaProductosCar();
            
            Swal.fire("El carrito de compras se ha vaciado", "", "success");
        }
    });
});

function vaciarCarro(){
    prodCarr.length = 0;
    localStorage.setItem("carrShop", JSON.stringify(prodCarr));
    cargaProductosCar();
}


function calcularTotal(){
    totalPagar.innerText = "$" + prodCarr.reduce((acc, producto) => acc + (producto.cantidad * producto.precio), 0);
}

btnComprar.addEventListener("click", () => {

    Swal.fire({
        title: "Seguro que deseas comprar su pedido?",
        showDenyButton: false,
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: "Comprar"
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            prodCarr.length = 0;
            localStorage.setItem("carrShop", JSON.stringify(prodCarr));
            cargaProductosCar();
            
            Swal.fire("Compra realizada", "", "success");
        }
    });
});



