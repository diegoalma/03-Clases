import { Persona } from 'assets\clases.js';

class Heroe extends Persona{

    clan='';

    constructor(nombre,codigo,frase){

        super(nombre,codigo,frase);

        this.clan='Los Avengers';

        super.quienSoy()
         
        
        

       super.miFrase()
          
        
    }


}


const spiderman=new Heroe()
console.log(spiderman);

spiderman.quienSoy();


