import { rd } from "./readline";
import { categorias, productos, Categoria } from "./bd";


export async function mostrarProductos(categoria: any) {
    let productoFiltrado = productos.filter(producto => producto.Categoria == categoria.id);

    console.log(`\n¿Qué le gustaría adquirir de la categoría ${categoria.nombre}?:`);
    
    productoFiltrado.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto.nombre}`);
    });
    
    console.log(`${productoFiltrado.length + 1}. Salir`);

    let opcion = Number((await rd.question("\nOpción: ")).trim());

    if (opcion === productoFiltrado.length + 1) {
    } 
    
    else if (opcion >= 1 && opcion <= productoFiltrado.length) {
        let productoElegido = productoFiltrado[opcion - 1];
        await comprar(productoElegido);
    } 
    
    else {
        console.log("\nError: Ingresa un producto válido\n");
    }
}

export async function comprar(producto: any) {
    console.log();
    producto.mostrarInfo();

    let opcion = Number((await rd.question(`\nDesea comprarlo\n1.Si\n2.No\n\nOpcion: `)).trim());
    switch (opcion) {
        case 1:
            console.log();
            producto.comprar();
            break;
        case 2: 
            return;
            break;
    
        default:
            break;
    }
}
