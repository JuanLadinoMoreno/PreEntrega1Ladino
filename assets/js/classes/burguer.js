class Burguer {
        constructor(id, nombre, pan, preparacion, ingrePrep, carne, catsup, mayo, mostaza, jito, cebo, pica, precio, url){
            this.id = id;
            this.nombre = nombre;
            this.pan=pan;
            this.preparacion=preparacion;
            this.ingrePrep=ingrePrep;
            this.carne=carne;
            this.catsup = catsup;
            this.mayo=mayo;
            this.mostaza=mostaza;
            this.jito=jito;
            this.cebo=cebo;
            this.pica=pica;
            this.precio = precio;
            // this.url = url
            
        }

        
       
    
        toString = () => {
            return this.id ;
          };
        
    }