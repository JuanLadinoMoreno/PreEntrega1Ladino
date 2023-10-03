class Orden{

    constructor(id, produc, cantidad, costoU, costo){
        this.id = id;
        this.produc = produc;
        this.cant = cantidad;
        this.costoU = costoU;
        this.costo = costo;
    }

    toString = () =>{
        return this.id + " " + this.produc + " " + this.cant + " " + this.costo;
    }
}
