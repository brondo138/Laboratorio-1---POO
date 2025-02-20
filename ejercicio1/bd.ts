interface Descuento{
    descuento():number;
}

export class Categoria{
    constructor (public id: number, public nombre:string){}
}

class Producto implements Descuento{
    constructor(public id: number, public Categoria:number, public nombre:string, public precio:number, public oferta: number){}

    descuento(): number {
        return this.precio*this.oferta;
    }
    
    public mostrarInfo(){
        if (this.oferta == 0){
            console.log(`${this.nombre}, Precio $${this.precio}`);
        }else {
            console.log(`${this.nombre}\nPrecio anterior $${this.precio}\nPrecio final con un ${this.oferta*100}%: $${this.precio - this.descuento()}`);
        }
    }
    
    public comprar(){
        if (this.oferta == 0){
            console.log(`¡Muchas gracias por adquirir nuestro producto ${this.nombre}! Por tan solo $${this.precio}`);
        }else {
            console.log(`¡Muchas gracias por adquirir nuestro producto ${this.nombre}! Por tan solo $${this.precio - this.descuento()}`);
        }
    }
}

let categorias: Categoria[] = [
    new Categoria(1,"Ropa"),
    new Categoria(2,"Tecnologia")
];


let productos: Producto[] = [
    new Producto(1,1,"Camisa", 15,0),
    new Producto(2,1,"Pantalon",50,0.15),
    new Producto(1,2,"Laptop",1500,0)
]

export {categorias,productos};