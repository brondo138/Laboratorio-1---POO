import { rd } from "./readline";
import { categorias, productos, Categoria, mostrar } from "./bd";
import { main } from "./main";


export async function mostrarProductos(categoria: any) {
    let condition = true;

    do {
        let productoFiltrado = productos.filter(producto => producto.Categoria == categoria.id);

        console.log(`\n¿Qué le gustaría adquirir de la categoría ${categoria.nombre}?:`);
        
        mostrar(productoFiltrado);

        let opcion = Number((await rd.question(`${productoFiltrado.length + 1}.Volver\n\nOpción: `)).trim());

        if (opcion === productoFiltrado.length + 1) {
            condition = false;
            return;
        } 
        
        else if (opcion >= 1 && opcion <= productoFiltrado.length) {
            let productoElegido = productoFiltrado[opcion - 1];
            await comprar(productoElegido);
        } 
        
        else {
            console.log("\nError: Ingresa una opcion válida\n");
        }
    } while (condition);
}

export async function comprar(producto: any) {
    let condition = true;

    do {
        
        console.log();
        producto.mostrarInfo();

        let opcion = Number((await rd.question(`\nDesea comprarlo\n1.Si\n2.No\n\nOpcion: `)).trim());
        switch (opcion) {
            case 1:
                console.log();
                producto.comprar();
                condition = false;
                await main();
                break;
            case 2: 
                condition = false;
                break;
            
            default:
                console.log("\nError: Ingrese una opcion valida\n");
                break;
        }
    } while (condition);
}
