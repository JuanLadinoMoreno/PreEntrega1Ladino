
const CONTPROD = document.querySelector(`.dvProductos`);
const btnsMenu = document.querySelectorAll(`.btnMenuProducto`);
let cantidadProductos = document.querySelector(`#cantidadProductos`);
let spinn = document.querySelector(`#spinn`);cantidadProductos
let cantProd = document.querySelector(`#cantidadProductos`);

const cargaIngrediente = (producto) => {
    const { vegetales } = producto; //DESECTRUCUTURACION DE OBJETO
    if (!vegetales) {
        return "";
    }
    let vegeArre = Object.values(vegetales);
    let HTMLresul = "";
    for (let i = 0; i < vegeArre.length; i++) {
        HTMLresul = HTMLresul + `<li> ${vegeArre[i]} </li>`;

    }
    return HTMLresul;
}

const cargaAderesos = (producto) => {
    const { aderesos } = producto;
    if (!aderesos) {
        return "";
    }
    let adeArre = Object.values(aderesos);
    let HTMLresul = "";
    for (let i = 0; i < adeArre.length; i++) {
        HTMLresul = HTMLresul + `<li> ${adeArre[i]} </li>`;

    }
    return HTMLresul;
}







//ACTUALIZA CANTIDAD DE PRODUCTOS EN CARRITO(numero)
const actCanti = async () => {
    let prodCarrLS = await getStorage();
    let cantidadProductosAgregar = prodCarrLS.reduce((acc, producto) => acc + producto.cantidad, 0);
    cantidadProductos.innerText = cantidadProductosAgregar;
}

//PROMESA CARGAR PRODUCTO
const cargaProducto = (productos) => {


    return new Promise((resolve, reject) => {
        CONTPROD.classList.add("disabled");
        spinn.classList.remove("disabled");
        setTimeout(() => {

            if (typeof productos === "object" && productos != null) {
                resolve(productos);
            } else {
                reject("Error al cargar productos")
            }

        }, 3 * 1000);
    });
}





const mostrarProductos = async (productos = []) => {


    let prod = await cargaProducto(productos);

    CONTPROD.innerHTML = "";
    prod.forEach((producto) => {
        const div = document.createElement("div");
        div.classList.add("dvProducto");
        // div.id = "pills-home";

        div.innerHTML = `
                        <img class="imgProducto" src="${producto.urlImg}" alt="" >
                        <div class="datProd">
                            <h3>${producto.nombre}</h3>
                            <ul class="ulIngre">
                                <li>${producto.ingrePrep}</li>
                                <li>${producto.pan}</li>
                                ${cargaAderesos(producto)}
                                ${cargaIngrediente(producto)}
                            </ul>
                            <button onclick="javascript:añadirAlPedido(${producto.id});" class="btnAnadirP"><i class="bi bi-cart-plus-fill"></i>Ordenar</button>
                        </div>
        `;

        CONTPROD.append(div);
    })

    actCanti();
    spinn.classList.add("disabled");
    CONTPROD.classList.remove("disabled");
    cantProd.classList.remove("disabled");
}
ObProd()




// AGREGA Y ELIMINA LA CLASE ACTIVE DEL MENU Y TAMBIEN AGREGA LOS PRODUCTOS
btnsMenu.forEach(boton => {
    boton.addEventListener("click", (e) => {
        // ELIMINA LA CALSE "active"
        btnsMenu.forEach(boton => boton.classList.remove("active"));
        // ASIGNA LA CLASE ACTIVE AL ELEMENTO CLICK
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todosP") {

            const prodFilter = productosAll.filter(producto => producto.tipo.id === e.currentTarget.id);
            // tituProd.innerText = prodFilter.tipo;
            mostrarProductos(prodFilter);
        } else {
            mostrarProductos(productosAll);
        }

    });

});

const añadirAlPedido = async (id) => {
    let prodCarrLS = await getStorage();
    const producto = productosAll.find((producto) => producto.id == id);
    if (producto) {
        const index = getIndex(
            id,
            prodCarrLS.map((prod) => prod.producto.id)
        );
        if (index !== -1) {
            prodCarrLS[index].cantidad = prodCarrLS[index].cantidad + 1;
        } else {
            const productoOrd = new Orden(producto, 1);
            prodCarrLS.push(productoOrd);
        }
        actualizarListaEnStorage(prodCarrLS);
        actCanti();
        Toastify({
            text: "Producto agregado " + producto.nombre,
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            className: "toastAgregarP",

        }).showToast();
    } else {
        Swal.fire("Producto no encontrado", "", "success");
    }
};


