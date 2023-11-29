let productosAll = [];
async function ObProd() {
    
    const response = await fetch("https://run.mocky.io/v3/407c83b9-74d8-4d7a-a2d5-9383309833fc");
    const product = await response.json();
    productosAll = product.map((producto) => {
        return new Producto(
                producto.id,
                producto.nombre,
                producto.pan,
                producto.preparacion,
                producto.ingrePrep,
                producto.aderesos,
                producto.vegetales,
                producto.tipo,
                producto.precio,
                producto.urlImg
        );
    })
    mostrarProductos(productosAll);
    
}

const getProd = async () => {
    const response = await fetch("https://run.mocky.io/v3/407c83b9-74d8-4d7a-a2d5-9383309833fc");
    const product = await response.json();
    productosAll = product.map((producto) => {
        return new Producto(
                producto.id,
                producto.nombre,
                producto.pan,
                producto.preparacion,
                producto.ingrePrep,
                producto.aderesos,
                producto.vegetales,
                producto.tipo,
                producto.precio,
                producto.urlImg
        );
    })
}


const LOCAL_STORAGE_NAME = "carrShop";

const actualizarListaEnStorage = (list = []) => {
    localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(list));
};
  

const getStorage = async () => {
    const prodCarrLS = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME));

    await getProd();

    if (prodCarrLS) {
        
        return prodCarrLS.map((e) => {
            return new Orden(
                productosAll.find((pro) => pro.id == e.producto.id), e.cantidad);
        });
    } else {
        return [];
    }
}




// RETORNA EL INDEX DEL PRODUCTO DEL ARREGLO DE LOS PEDIDOS
const getIndex = (key, productos = []) => {
    let findedIndex = -1;
    for (let index = 0; index < productos.length; index++) {
        if (productos[index] == key) {
            findedIndex = index;
            break;
        }
    }
    return findedIndex;

};