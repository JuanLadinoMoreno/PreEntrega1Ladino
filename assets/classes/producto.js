class Producto{
    constructor(id, nombre, pan, preparacion, ingrePrep, aderesos = [], vegetales = [], tipoProducto, precio, urlImg){
        this.id = id;
        this.nombre = nombre;
        this.pan = pan;
        this.preparacion = preparacion;
        this.ingrePrep = ingrePrep;
        this.aderesos = aderesos;
        this.vegetales = vegetales;
        this.tipo = tipoProducto;
        this.precio = precio;
        this.urlImg = urlImg;
    }

    
   

    toString = () => {
        return this.id;
      };
}