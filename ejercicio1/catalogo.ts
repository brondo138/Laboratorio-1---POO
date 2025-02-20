import { rd } from "./readline";
import { categorias } from './bd';
import { mostrarProductos } from "./producto";

export async function Catalogo() {
    console.log("\nBienvenido usuario, estas son las categorías disponibles:");
    
    categorias.forEach((categoria, index) => {
        console.log(`${index + 1}. ${categoria.nombre}`);
    });
    
    console.log(`${categorias.length + 1}. Salir`);
    
    let opcion = Number((await rd.question("\nOpción: ")).trim());
    
    if (opcion === categorias.length + 1) {
        return;
    }
    else if (opcion >= 1 && opcion <= categorias.length) {
        let categoriaElegida = categorias[opcion - 1];
        await mostrarProductos(categoriaElegida);
    }
    else {
        console.log("\nError: Ingresa una categoría válida\n");
    }
}
