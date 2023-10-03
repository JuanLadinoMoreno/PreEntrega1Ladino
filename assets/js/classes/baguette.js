class Baguette {
    constructor(id, nombre, pan, preparacion, ingrePrep, pica, aguac, lechu, firjo, precio){
        this.id = id;
        this.nombre = nombre;
        this.pan=pan;
        this.preparacion=preparacion;
        this.ingrePrep=ingrePrep;
        // this.carne=carne;
        // this.catsup = catsup;
        // this.mayo=mayo;
        // this.mostaza=mostaza;
        // this.jito=jito;
        // this.cebo=cebo;
        this.pica = pica;
        this.aguac = aguac;
        this.lechu = lechu;
        this.firjo = firjo;
        this.precio = precio;
     
        
    }

    
   

    toString = () => {
        return this.id;
      };
    
}