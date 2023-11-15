const lstProductos = 
[
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
        tipo: arrTipoProducto[0],
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
        tipo: arrTipoProducto[0],
        precio: "50",
        url: "../assets/img/menu/burToci.png"
    },

    {
        id: "BURG3",
        nombre: "Hamburguesa hawaiana",
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
        tipo: arrTipoProducto[0],
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
        tipo: arrTipoProducto[0],   
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
        tipo: arrTipoProducto[0],      
        precio: "50",
        url: "../assets/img/menu/burToci.png"
    },

    // HOT DOGS
    {
        id: "HOTD1",
        nombre: "Hot Dog Tradicional",
        pan: "Media noche",
        preparacion:preparacion[0].nombre,
        ingrePrep: ingredientePreparacion[0].nombre,
        aderesos:{
            
            catsup: aderesos[0].nombre,
            mayonesa: aderesos[1].nombre,
            mostaza: aderesos[2].nombre,
        },
        vegetales:{
            jito: vegetales[0].nombre,
            cebo: vegetales[1].nombre,
            pica: vegetales[2].nombre
        },        
        tipo: arrTipoProducto[3],
        precio: "30",
        url: "../assets/img/menu/hotdog.png"
    },

    {
        id: "HOTD2",
        nombre: "Hot Dog Revolcado",
        pan: "Media noche",
        preparacion:preparacion[9].nombre,
        ingrePrep: ingredientePreparacion[9].nombre,
        aderesos:{
            
            catsup: aderesos[0].nombre,
            mayonesa: aderesos[1].nombre,
            mostaza: aderesos[2].nombre,
        },
        vegetales:{
            jito: vegetales[0].nombre,
            cebo: vegetales[1].nombre,
            pica: vegetales[2].nombre
        },        
        tipo: arrTipoProducto[3],
        precio: "45",
        url: "../assets/img/menu/hotdog.png"
    },
    

    //BAGUETTES
    {
        id: "BAG1",
        nombre: "Baguette con Pollo",
        pan: "Pan Baguette Integral",
        preparacion:preparacion[5].nombre,
        ingrePrep: ingredientePreparacion[5].nombre,
        vegetales:{
            pica: vegetales[2].nombre,
            aguac: vegetales[3].nombre,
            lechu: vegetales[4].nombre,
            firjo: vegetales[5].nombre,
        },        
        tipo: arrTipoProducto[1],
        precio: "50",
        url: "../assets/img/menu/baguet.png"
    },

    {
        id: "BAG2",
        nombre: "Baguette Pierna Adobada",
        pan: "Pan Baguette Integral",
        preparacion:preparacion[6].nombre,
        ingrePrep: ingredientePreparacion[6].nombre,
        vegetales:{
            pica: vegetales[2].nombre,
            aguac: vegetales[3].nombre,
            lechu: vegetales[4].nombre,
            firjo: vegetales[5].nombre,
        },        
        tipo: arrTipoProducto[1],
        precio: "50",
        url: "../assets/img/menu/baguet.png"
    },
    
    {
        id: "BAG3",
        nombre: "Baguette de Cochinita Pibil",
        pan: "Pan Baguette Integral",
        preparacion:preparacion[7].nombre,
        ingrePrep: ingredientePreparacion[7].nombre,
        vegetales:{
            pica: vegetales[2].nombre,
            aguac: vegetales[3].nombre,
            lechu: vegetales[4].nombre,
            firjo: vegetales[5].nombre,
        },        
        tipo: arrTipoProducto[1],
        precio: "50",
        url: "../assets/img/menu/baguet.png"
    },

    {
        id: "BAG3",
        nombre: "Baguette de Cochinita Pibil",
        pan: "Pan Baguette Integral",
        preparacion:preparacion[8].nombre,
        ingrePrep: ingredientePreparacion[8].nombre,
        vegetales:{
            pica: vegetales[2].nombre,
            aguac: vegetales[3].nombre,
            lechu: vegetales[4].nombre,
            firjo: vegetales[5].nombre,
        },        
        tipo: arrTipoProducto[1],
        precio: "50",
        url: "../assets/img/menu/baguet.png"
    },

    {
        id: "SANDW1",
        nombre: "Sandwich de Pollo",
        pan: "Pan Blanco",
        preparacion:preparacion[5].nombre,
        ingrePrep: ingredientePreparacion[5].nombre,
        vegetales:{
            pica: vegetales[2].nombre,
            aguac: vegetales[3].nombre,
            lechu: vegetales[4].nombre,
            firjo: vegetales[5].nombre,
        },        
        tipo: arrTipoProducto[2],
        precio: "50",
        url: "../assets/img/menu/sandw.png"
    },

    {
        id: "SANDW2",
        nombre: "Sandwich de Pierna Adobada",
        pan: "Pan Blanco",
        preparacion:preparacion[6].nombre,
        ingrePrep: ingredientePreparacion[6].nombre,
        vegetales:{
            pica: vegetales[2].nombre,
            aguac: vegetales[3].nombre,
            lechu: vegetales[4].nombre,
            firjo: vegetales[5].nombre,
        },        
        tipo: arrTipoProducto[2],
        precio: "50",
        url: "../assets/img/menu/sandw.png"
    },

    {
        id: "SANDW3",
        nombre: "Sandwich de Cochinita Pibil",
        pan: "Pan Blanco",
        preparacion:preparacion[7].nombre,
        ingrePrep: ingredientePreparacion[7].nombre,
        vegetales:{
            pica: vegetales[2].nombre,
            aguac: vegetales[3].nombre,
            lechu: vegetales[4].nombre,
            firjo: vegetales[5].nombre,
        },        
        tipo: arrTipoProducto[2],
        precio: "50",
        url: "../assets/img/menu/sandw.png"
    },

    {
        id: "SANDW4",
        nombre: "Sandwich de Milanesa",
        pan: "Pan Blanco",
        preparacion:preparacion[8].nombre,
        ingrePrep: ingredientePreparacion[8].nombre,
        vegetales:{
            pica: vegetales[2].nombre,
            aguac: vegetales[3].nombre,
            lechu: vegetales[4].nombre,
            firjo: vegetales[5].nombre,
        },        
        tipo: arrTipoProducto[2],
        precio: "50",
        url: "../assets/img/menu/sandw.png"
    },

    {
        id: "BURR1",
        nombre: "Burrito de pollo",
        pan: "Tortilla de Harina",
        preparacion:preparacion[5].nombre,
        ingrePrep: ingredientePreparacion[5].nombre,
        vegetales:{
            pica: vegetales[2].nombre,
            aguac: vegetales[3].nombre,
            cebo: vegetales[1].nombre,
            pica: vegetales[2].nombre,
            firjo: vegetales[5].nombre,
        },        
        tipo: arrTipoProducto[5],
        precio: "60",
        url: "../assets/img/menu/cshandw.png"
    },

    {
        id: "BURR2",
        nombre: "Burrito de Pierna Adobada",
        pan: "Tortilla de Harina",
        preparacion:preparacion[6].nombre,
        ingrePrep: ingredientePreparacion[6].nombre,
        vegetales:{
            pica: vegetales[2].nombre,
            aguac: vegetales[3].nombre,
            cebo: vegetales[1].nombre,
            pica: vegetales[2].nombre,
            firjo: vegetales[5].nombre,
        },        
        tipo: arrTipoProducto[5],
        precio: "60",
        url: "../assets/img/menu/cshandw.png"
    },

    {
        id: "BURR2",
        nombre: "Burrito de Cochinita Pibil",
        pan: "Tortilla de Harina",
        preparacion:preparacion[7].nombre,
        ingrePrep: ingredientePreparacion[7].nombre,
        vegetales:{
            pica: vegetales[2].nombre,
            aguac: vegetales[3].nombre,
            cebo: vegetales[1].nombre,
            pica: vegetales[2].nombre,
            firjo: vegetales[5].nombre,
        },        
        tipo: arrTipoProducto[5],
        precio: "60",
        url: "../assets/img/menu/cshandw.png"
    },

    {
        id: "BURR2",
        nombre: "Burrito de Milanesa",
        pan: "Tortilla de Harina",
        preparacion:preparacion[8].nombre,
        ingrePrep: ingredientePreparacion[8].nombre,
        vegetales:{
            pica: vegetales[2].nombre,
            aguac: vegetales[3].nombre,
            cebo: vegetales[1].nombre,
            pica: vegetales[2].nombre,
            firjo: vegetales[5].nombre,
        },        
        tipo: arrTipoProducto[5],
        precio: "60",
        url: "../assets/img/menu/cshandw.png"
    },
];






const CONTPROD = document.querySelector(`.dvProductos`);
const btnsMenu = document.querySelectorAll(`.btnMenuProducto`);
// const VEGPROD = document.querySelector(`.vegProd`)
let btnsAgregar = document.querySelectorAll(`.btnAnadirP`);
let cantidadProductos = document.querySelector(`#cantidadProductos`);
let spinn = document.querySelector(`#spinn`);

 const cargaIngrediente = (producto) => {
    const {vegetales} = producto;
    if (!vegetales){
        return"";
    }
    let vegeArre = Object.values(vegetales);
    let HTMLresul = "";
    for (let i = 0; i < vegeArre.length; i++) {
        HTMLresul = HTMLresul + `<li> ${vegeArre[i]} </li>` ;
        
    }
    return HTMLresul;
 }

 const cargaAderesos = (producto) => {
    const {aderesos} = producto;
    if (!aderesos){
        return"";
    }
    let adeArre = Object.values(aderesos);
    let HTMLresul = "";
    for (let i = 0; i < adeArre.length; i++) {
        HTMLresul = HTMLresul + `<li> ${adeArre[i]} </li>` ;
        
    }
    return HTMLresul;
 }

 //ACTUALIZA LOS BOTONES PARA AGREGAR PRODUCTO
 const actbtnAgr = () => {
    btnsAgregar = document.querySelectorAll(".btnAnadirP");

    btnsAgregar.forEach(btn => {
        btn.addEventListener("click", agregarAlCarrito);
    });
}

//ACTUALIZA CANTIDAD DE PRODUCTOS EN CARRITO(numero)
const actCanti = () => {
    let cantidadProductosAgregar = carrShop.reduce((acc, producto) => acc + producto.cantidad,0);
    cantidadProductos.innerText = cantidadProductosAgregar;
}

//PROMESA CARGAR PRODUCTO
 const cargaProducto = (productos) => {
    

    return new Promise((resolve,reject) => {
        CONTPROD.classList.add("disabled");
        spinn.classList.remove("disabled");
        setTimeout(() => {

            if(typeof productos === "object" && productos != null){
                resolve(productos);
            }else{
                reject("Error al cargar productos")
            }

        }, 3 * 1000);
    });    
}


const pintaProductos  = async (productos) => {


    let prod = await cargaProducto(productos);

    CONTPROD.innerHTML = "";
        prod.forEach((producto) => {
            const div = document.createElement("div");
            div.classList.add("dvProducto");
            // div.id = "pills-home";

            div.innerHTML = `
                        <img class="imgProducto" src="${producto.url}" alt="" >
                        <div class="datProd">
                            <h3>${producto.nombre}</h3>
                            <ul class="ulIngre">
                                <li>${producto.ingrePrep}</li>
                                ${cargaAderesos(producto)}
                                ${cargaIngrediente(producto)}
                            </ul>
                            <button id="${producto.id}" class="btnAnadirP"><i class="bi bi-cart-plus-fill"></i>Ordenar</button>
                        </div>
        `;

            CONTPROD.append(div);
        })

        actbtnAgr();
        spinn.classList.add("disabled");
        CONTPROD.classList.remove("disabled");


    
    //     await cargaProducto(productos).then((response) => {
    //     // console.log(response);
    //     CONTPROD.innerHTML = "";
    //     response.forEach((producto) => {
    //         const div = document.createElement("div");
    //         div.classList.add("dvProducto");
    //         // div.id = "pills-home";

    //         div.innerHTML = `
    //                     <img class="imgProducto" src="${producto.url}" alt="" >
    //                     <div class="datProd">
    //                         <h3>${producto.nombre}</h3>
    //                         <ul class="ulIngre">
    //                             <li>${producto.ingrePrep}</li>
    //                             ${cargaAderesos(producto)}
    //                             ${cargaIngrediente(producto)}
    //                         </ul>
    //                         <button id="${producto.id}" class="btnAnadirP"><i class="bi bi-cart-plus-fill"></i>Ordenar</button>
    //                     </div>
    //     `;

    //         CONTPROD.append(div);
    //     })

    //     actbtnAgr();
    //     console.log("productos cargados");

    // });
    // await cargaProducto(productos).catch((error) => {
    //     console.log(error.message);
    // });
        


}

pintaProductos(lstProductos);

// AGREGA Y ELIMINA LA CLASE ACTIVE DEL MENU Y TAMBIEN AGREGA LOS PRODUCTOS
btnsMenu.forEach(boton => {
    boton.addEventListener("click", (e) => {
        // ELIMINA LA CALSE "active"
        btnsMenu.forEach(boton => boton.classList.remove("active"));
        // ASIGNA LA CLASE ACTIVE AL ELEMENTO CLICK
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todosP"){            

            const prodFilter = lstProductos.filter(producto => producto.tipo.id === e.currentTarget.id);
            // tituProd.innerText = prodFilter.tipo;
            pintaProductos(prodFilter);
        }else{
            pintaProductos(lstProductos);
        }

    });
    
});


let carrShop;
const  prodCarrLS = localStorage.getItem("carrShop");
if(prodCarrLS){
    carrShop = JSON.parse(prodCarrLS);
    actCanti();
}else{
    carrShop = [];
}


function agregarAlCarrito  (e) {
    const idBtn = e.currentTarget.id;
    const productoAgregar = lstProductos.find(producto => producto.id === idBtn);


    if (carrShop.some(producto => producto.id == idBtn)) {
        const index = carrShop.findIndex(producto => producto.id === idBtn);
        carrShop[index].cantidad++;


        



    }else{
        productoAgregar.cantidad = 1;
        carrShop.push(productoAgregar);

    }
    
    actCanti();

    localStorage.setItem("carrShop", JSON.stringify(carrShop));

    Toastify({
        text: "Producto agregado " + productoAgregar.nombre,
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        className: "toastAgregarP",
        
      }).showToast();
}
