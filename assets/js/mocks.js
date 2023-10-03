const carneBurguer = [
    {
        id: "1",
        nombre: "Carne de res"
    },

    {
        id: "2",
        nombre : "Carne de pollo"
    }
]

const aderesos = [
    {
        id: "1",
        nombre: "Catsup"
    },
    {
        id: "2",
        nombre: "Mayonesa"
    },
    {
        id: "3",
        nombre: "Mostaza"
    }
]

const vegetales =[
    {
        id: "1",
        nombre: "jitomate"
    },

    {
        id: "2",
        nombre: "cebolla"
    },

    {
        id: "3",
        nombre: "rajas"
    },

    {
        id: "4",
        nombre: "aguacate"
    },

    {
        id: "5",
        nombre: "lechuga"
    },

    {
        id: "6",
        nombre: "frijoles"
    }
]

const preparacion = [
    {
        id: "1",
        nombre: "tradicional"
    },

    {
        id: "2",
        nombre: "tocino"
    },
    
    {
        id: "3",
        nombre: "hawaiana"
    },

    {
        id: "4",
        nombre: "champiñon"
    },
    
    {
        id: "5",
        nombre: "mexicana"
    },

    {
        id: "6",
        nombre: "Pollo"
    },

    {
        id: "7",
        nombre: "Pierna adobada"
    },

    {
        id: "8",
        nombre: "Cochinita Pibil"
    },

    {
        id: "9",
        nombre: "Milanesa"
    }

]

const ingredientePreparacion = [
    {
        id: "1",
        nombre: ""
    },

    {
        id: "2",
        nombre: "Lonchas de tocino"
    },

    {
        id: "3",
        nombre: "Piña y jamón"
    },

    {
        id: "4",
        nombre: "Champiñones con queso"
    },

    {
        id: "5",
        nombre: "Chorizo de la casa con queso y aguacate"
    },

    {
        id: "6",
        nombre: "Pollo desebrado"
    },

    {
        id: "7",
        nombre: "Pierna adobada"
    },

    {
        id: "8",
        nombre: "Cochinita Pibil"
    },

    {
        id: "9",
        nombre: "Milanesa"
    }
]

const arrTipoProducto = [
    {
        id: "1",
        nombre: "Hamburguesa"
    },

    {
        id: "2",
        nombre: "Baguette"
    },

    {
        id: "3",
        nombre: "Club Shandwiches"
    },

    {
        id: "4",
        nombre: "Hot dog"
    },

    {
        id: "5",
        nombre: "Gran Danés"
    },

    {
        id: "6",
        nombre: "Burrito"
    }
]

const arrTipoBurg = [
    {
        id: "1",
        nombre: "tradicional"
    },

    {
        id: "2",
        nombre: "tocino"
    },
    
    {
        id: "3",
        nombre: "hawaiana"
    },

    {
        id: "4",
        nombre: "champiñon"
    },
    
    {
        id: "5",
        nombre: "mexicana"
    },
]


const productosOrdenados = [
    {
        id: "BURG1",
        nombre: "Hamburguesa tradicional",
        pan: "Pan Blanco",
        preparacion: preparacion[0].nombre,
        ingrePrep: ingredientePreparacion[0].nombre,
        carne: carneBurguer[0].nombre,
        catsup: aderesos[0].nombre,
        mayonesa: aderesos[1].nombre,
        mostaza: aderesos[2].nombre,
        jito: vegetales[0].nombre,
        cebo: vegetales[1].nombre,
        pica: vegetales[2].nombre,
        tipo: arrTipoProducto[0].nombre,
        precio: "50"
        
    },

    {
        id: "BURG2",
        nombre: "Hamburguesa con tocino",
        pan: "Pan Blanco",
        preparacion: preparacion[1].nombre,
        ingrePrep: ingredientePreparacion[1].nombre,
        carne: carneBurguer[0].nombre,
        catsup: aderesos[0].nombre,
        mayonesa: aderesos[1].nombre,
        mostaza: aderesos[2].nombre,
        jito: vegetales[0].nombre,
        cebo: vegetales[1].nombre,
        pica: vegetales[2].nombre,
        tipo: arrTipoProducto[0].nombre,
        precio: "50"
    },

    {
        id: "BURG3",
        nombre: "Hamburguesa con hawaiana",
        pan: "Pan Blanco",
        preparacion:preparacion[2].nombre,
        ingrePrep: ingredientePreparacion[2].nombre,
        carne: carneBurguer[0].nombre,
        catsup: aderesos[0].nombre,
        mayonesa: aderesos[1].nombre,
        mostaza: aderesos[2].nombre,
        jito: vegetales[0].nombre,
        cebo: vegetales[1].nombre,
        pica: vegetales[2].nombre,
        tipo: arrTipoProducto[0].nombre,
        precio: "50"
    },

    {
        id: "BURG4",
        nombre: "Hamburguesa con champiñones",
        pan: "Pan Blanco",
        preparacion:preparacion[3].nombre,
        ingrePrep: ingredientePreparacion[3].nombre,
        carne: carneBurguer[0].nombre,
        catsup: aderesos[0].nombre,
        mayonesa: aderesos[1].nombre,
        mostaza: aderesos[2].nombre,
        jito: vegetales[0].nombre,
        cebo: vegetales[1].nombre,
        pica: vegetales[2].nombre,
        tipo: arrTipoProducto[0].nombre,   
        precio: "50"
    },

    {
        id: "BURG5",
        nombre: "Hamburguesa Mexicana",
        pan: "Pan Blanco",
        preparacion:preparacion[4].nombre,
        ingrePrep: ingredientePreparacion[4].nombre,
        carne: carneBurguer[0].nombre,
        catsup: aderesos[0].nombre,
        mayonesa: aderesos[1].nombre,
        mostaza: aderesos[2].nombre,
        jito: vegetales[0].nombre,
        cebo: vegetales[1].nombre,
        pica: vegetales[2].nombre,
        tipo: arrTipoProducto[0].nombre,      
        precio: "50"
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