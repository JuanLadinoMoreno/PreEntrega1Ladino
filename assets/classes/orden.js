class Orden{

    constructor(produc, cantidad){
        this.producto = produc;
        this.cantidad = cantidad;
        // this.costo = costo;
    }

    toString = () =>{
        return this.producto + " " + this.cantidad ;
    }

}
