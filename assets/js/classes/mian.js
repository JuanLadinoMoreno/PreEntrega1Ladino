const lstProductos = [
    {
        id: "BURG1",
        nombre: "Hamburguesa tradicional",
        pan: "Pan Blanco",
        preparacion: preparacion[0].nombre,
        ingrePrep: ingredientePreparacion[0].nombre,
        carne: carneBurguer[0].nombre,
        aderesos:{
            
            catsup: aderesos[0].nombre,
            mayonesa: aderesos[1].nombre,
            mostaza: aderesos[2].nombre,
        },
        
        vegetales: {
            jito: vegetales[0].nombre,
            cebo: vegetales[1].nombre,
            pica: vegetales[2].nombre
        }
        ,
        tipo: arrTipoProducto[0].nombre,
        precio: "50",
        url: "../assets/img/menu/burgMex.png"
        
        
    },

    {
        id: "BURG2",
        nombre: "Hamburguesa con tocino",
        pan: "Pan Blanco",
        preparacion: preparacion[1].nombre,
        ingrePrep: ingredientePreparacion[1].nombre,
        carne: carneBurguer[0].nombre,
        aderesos:{
            
            catsup: aderesos[0].nombre,
            mayonesa: aderesos[1].nombre,
            mostaza: aderesos[2].nombre,
        },
        
        vegetales: {
            jito: vegetales[0].nombre,
            cebo: vegetales[1].nombre,
            pica: vegetales[2].nombre
        },
        tipo: arrTipoProducto[0].nombre,
        precio: "50",
        url: "../assets/img/menu/burToci.png"
    },

    {
        id: "BURG3",
        nombre: "Hamburguesa con hawaiana",
        pan: "Pan Blanco",
        preparacion:preparacion[2].nombre,
        ingrePrep: ingredientePreparacion[2].nombre,
        carne: carneBurguer[0].nombre,
        aderesos:{
            
            catsup: aderesos[0].nombre,
            mayonesa: aderesos[1].nombre,
            mostaza: aderesos[2].nombre,
        },
        
        vegetales: {
            jito: vegetales[0].nombre,
            cebo: vegetales[1].nombre,
            pica: vegetales[2].nombre
        },
        tipo: arrTipoProducto[0].nombre,
        precio: "50",
        url: "../assets/img/menu/burToci.png"
    },

    {
        id: "BURG4",
        nombre: "Hamburguesa con champiñones",
        pan: "Pan Blanco",
        preparacion:preparacion[3].nombre,
        ingrePrep: ingredientePreparacion[3].nombre,
        carne: carneBurguer[0].nombre,
        aderesos:{
            
            catsup: aderesos[0].nombre,
            mayonesa: aderesos[1].nombre,
            mostaza: aderesos[2].nombre,
        },
        
        vegetales: {
            jito: vegetales[0].nombre,
            cebo: vegetales[1].nombre,
            pica: vegetales[2].nombre
        },
        tipo: arrTipoProducto[0].nombre,   
        precio: "50",
        url: "../assets/img/menu/burToci.png"
    },

    {
        id: "BURG5",
        nombre: "Hamburguesa Mexicana",
        pan: "Pan Blanco",
        preparacion:preparacion[4].nombre,
        ingrePrep: ingredientePreparacion[4].nombre,
        carne: carneBurguer[0].nombre,
        aderesos:{
            
            catsup: aderesos[0].nombre,
            mayonesa: aderesos[1].nombre,
            mostaza: aderesos[2].nombre,
        },
        
        vegetales: {
            jito: vegetales[0].nombre,
            cebo: vegetales[1].nombre,
            pica: vegetales[2].nombre
        },
        tipo: arrTipoProducto[0].nombre,      
        precio: "50",
        url: "../assets/img/menu/burToci.png"
    },

    //BAGUETTES
    // {
    //     id: "BAG1",
    //     nombre: "Baguette con Pollo",
    //     pan: "Pan Baguette Integral",
    //     preparacion:preparacion[5].nombre,
    //     ingrePrep: ingredientePreparacion[5].nombre,
    //     pica: vegetales[2].nombre,
    //     aguac: vegetales[3].nombre,
    //     lechu: vegetales[4].nombre,
    //     firjo: vegetales[5].nombre,
    //     tipo: arrTipoProducto[1].nombre
    // },

    // {
    //     id: "BAG2",
    //     nombre: "Baguette Pierna Adobada",
    //     pan: "Pan Baguette Integral",
    //     preparacion:preparacion[6].nombre,
    //     ingrePrep: ingredientePreparacion[6].nombre,
    //     pica: vegetales[2].nombre,
    //     aguac: vegetales[3].nombre,
    //     lechu: vegetales[4].nombre,
    //     firjo: vegetales[5].nombre,
    //     tipo: arrTipoProducto[1].nombre
    // },
    
];

// const contProdVert = document.querySelector(`.contMenus__menuVerti`);
// console.log(contProdVert)

// const cargaMenuLateral = () => {
//     arrTipoProducto.forEach(producto => {
//         const div = document.createElement("div");
//         div.classList.add("prodVerti");
//         div.innerHTML = `
//                         <img src="${producto.url}" alt="">
//                         <button class=" nav-link active" id="v-pills-home-tab" data-bs-toggle="pill"
//                             data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home"
//                             aria-selected="true">${producto.nombre}</button>
                    
//         `;

//         console.log(producto.url);
//         contProdVert.append(div);
//     })
// }


// cargaMenuLateral();


const CONTPROD = document.querySelector(`.contProd`)
const VEGPROD = document.querySelector(`.vegProd`)
let btnsAgregar = document.querySelector(`.btnAgregar`);


const li = document.createElement(`li`); 
const cargaIngre = () => {

    for(i = 0; i < lstProductos.length; i++) {
        li.innerHTML = `

                    `;
        li.innerHTML = `${producto.aderesos[i]}`;
    }


 }

 const actbtnAgr = () => {
    btnsAgregar = document.querySelectorAll(".btnAgregar");

    btnsAgregar.forEach(btn => {
        btn.addEventListener("click", agregarAlCarrito);
    });
}

const cargaProducto = () => {
    lstProductos.forEach( producto => {
        const div = document.createElement("div");
        div.classList.add("tab-pane","fade","show","active");
        div.id = "pills-home";
        div.innerHTML = `
                        <div class="contDatosMenu ">
                            <img src="${producto.url}" alt="" class=" contDatosMenu__img ">
                            <div
                            class="contDatosMenu__datos  w-75 d-flex justify-content-around align-items-center">
                                <ul class = "vegProd">
                                
                                <li>- ${producto.nombre}</li>
                                    <li>- ${producto.ingrePrep}</li>
                                    <li>- ${producto.aderesos?.mayonesa}</li>
                                    <li>- ${producto.aderesos?.catsup}</li>
                                    <li>- ${producto.aderesos?.mostaza}</li>
                                    <li>- ${producto.vegetales?.jito}</li>
                                    <li>- ${producto.vegetales?.cebo}</li>
                                    <li>- ${producto.vegetales?.pica}</li>
                                </ul>
                                <div
                                    class="contDatosMenu__precios d-flex justify-content-center align-items-center flex-column">
                                    <div
                                        class="contDatosMenu__precios contDatosMenu__precios--sencillo d-flex justify-content-center align-items-center flex-column">
                                    <h4>Sencilla</h4>
                                        <p>$ ${producto.precio}</p>
                                    </div>
                                    
                                    <div class="contDatosMenu__precios--btnAgregar">
                                        <!--<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Launch demo modal
                                        </button>-->
                                         <button class="btnAgregar" id="${producto.id}" href=""> <i class="bi bi-cart-plus"></i>  Ordenar</button> 
                                    </div>

                                </div>
                            </div>
                        </div>
                        `;
        
        CONTPROD.append(div);
    })

    actbtnAgr();
}
cargaProducto();

const carrito = [];

function agregarAlCarrito  (e) {
    const idBtn = e.currentTarget.id;
    const productoAgregar = lstProductos.find(producto => producto.id === idBtn);


    if (carrito.some(producto => producto.id == idBtn)) {
        const index = carrito.findIndex(producto => producto.id === idBtn);
        carrito[index].cantidad++;
    }else{
        productoAgregar.cantidad = 1;
        carrito.push(productoAgregar);
    }

    let cantidadProductosAgregar = carrito.reduce((acc, producto) => acc + producto.cantidad,0);

    localStorage.setItem("carrito", JSON.stringify(carrito));      
}




const  prodCarr = JSON.parse(localStorage.getItem("carrito"));

const contCarr = document.querySelector(".contCarr");

const carrCantidad = document.querySelector(".carrCantidad");
const prodCantidad = document.querySelector(".prodCantidad");
const carrCosto = document.querySelector(".carrCosto");

if(prodCarr){
    prodCarr.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("carriProducto", "container");
        div.innerHTML = `
                    
                    <p id=""> ${producto.nombre}</p>
                     <div class="container d-flex justify-content-between align-items-center ">
                        <img src="${producto.url}" alt="" style="width:80px;">
                        <h2 id="prodCantidad">Cantidad: ${producto.cantidad} </h2>
                        <p id="carrCosto"> ${producto.cantidad * producto.precio} </p>
                    </div>
        `;
        contCarr.append(div);
    })

}

{/* <section class="contCarr">
    <p id="carrCantidad">Cantidad de productos</p>
    <div class="container d-flex justify-content-between align-items-center ">
        <img src="" alt="">
        <h2 id="prodCantidad"> catidad 2 </h2>
        <p id="carrCosto"> costo 1000</p>
</div>
    </section> */}