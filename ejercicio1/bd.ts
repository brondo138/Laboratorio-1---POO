interface Descuento{
    descuento():number;
}

export class Categoria{
    constructor (public id: number, public nombre:string){}
}

class Producto implements Descuento{
    constructor( public Categoria:number, public nombre:string, public precio:number, public oferta: number){}

    descuento(): number {
        return this.precio*this.oferta;
    }
    
    public mostrarInfo(){
        if (this.oferta == 0){
            console.log(`${this.nombre}, Precio $${this.precio}`);
        }else {
            console.log(`${this.nombre}\nPrecio anterior $${this.precio}\nPrecio final con un ${this.oferta*100}% de descuento: $${(this.precio - this.descuento()).toFixed(2)}`);
        }
    }
    
    public comprar(){
        if (this.oferta == 0){
            console.log(`¡Muchas gracias por adquirir nuestro producto ${this.nombre}! Por tan solo $${this.precio}`);
        }else {
            console.log(`¡Muchas gracias por adquirir nuestro producto ${this.nombre}! Por tan solo $${(this.precio - this.descuento()).toFixed(2)}`);
        }
    }
}

let categorias: Categoria[] = [
    new Categoria(1,"Mas vendidos"),
    new Categoria(2,"Ropa"),
    new Categoria(3,"Tecnologia")
];


let productos: Producto[] = [
    new Producto(2,"Camisa", 15,0),
    new Producto(1,"Camisa", 15,0),
    new Producto(2,"Pantalon",50,0.15),
    new Producto(1,"Pantalon",50,0.15),
    new Producto(3,"Laptop",1500,0),
    new Producto(1,"Laptop",1500,0)
]

export function eliminarProductos(categoria:number){
    productos = productos.filter(producto => producto.Categoria !== categoria);
}

export {categorias,productos};