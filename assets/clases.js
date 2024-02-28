export class Persona{
    nombre=''
    codigo=''
    frase=''
    comida=''


    constructor(nombre,codigo,frase,comida){

    this.nombre=nombre
    this.codigo=codigo
    this.frase=frase
    this.comida=comida
    }



    set setComidaFavorita(comida){
        this.comida=comida

    }

    get getComidaFavorita(){

    return `La comida favorita de ${this.nombre} es ${this.comida}`

    }

    quienSoy(){

        console.log(`Mi nombre es ${this.nombre} y soy ${this.codigo}`);
    }


    

    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice : "${this.frase}"`);
    }


}

    const spiderman=new Persona('Peter Parker','Spiderman','Soy tu amigo')
    console.log(spiderman);
    spiderman.quienSoy()
    spiderman.setComidaFavorita='Pastel'
    console.log(spiderman.getComidaFavorita);
    console.log(spiderman);



