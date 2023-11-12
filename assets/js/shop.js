let total = 0;

const  prodCarr = JSON.parse(localStorage.getItem("carrShop"));

const carVacio = document.querySelector("#carVacio");
const productsCarr = document.querySelector("#productsCarr");
const accCarr = document.querySelector("#accCarr");
const carrComprado = document.querySelector("#carrComprado");

if (prodCarr) {

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
    <div class="dvVaciar">
            <button id="btnVaciar" class="btnVaciar btn btn-danger"> <i class="bi bi-cart-dash-fill"></i> Vaciar
                carrito</button>
    </div>
    <div class="dvCalcu">
            <div class="total">
                <p>Total</p>
                <p id="total">$ ${total}</p>
            </div>
            <button id="btnComprar" class="btn-prin btnComprar">Comprar ahora</button>
    </div>
                   
                    `;
    productsCarr.append(divTotal);

}else{
    carVacio.classList.remove("disabled");
    carrComprado.classList.add("disabled");
    productsCarr.classList.add("disabled");
    accCarr.classList.add("disabled");

}
