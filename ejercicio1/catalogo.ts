import { rd } from "./readline";
import { categorias, mostrar } from './bd';
import { mostrarProductos } from "./producto";

export async function Catalogo() {
    let condition = true;

    do {
        console.log("\nBienvenido usuario, estas son las categorías disponibles:");
        mostrar(categorias);
        let opcion = Number((await rd.question(`${categorias.length + 1}.Volver\n\nOpción: `)).trim());
        
        if (opcion === categorias.length + 1) {
            condition = false;
            return;
        }
        else if (opcion >= 1 && opcion <= categorias.length) {
            let categoriaElegida = categorias[opcion - 1];
            await mostrarProductos(categoriaElegida);
        }
        else {
            console.log("\nError: Ingresa una categoría válida\n");
        }
    } while (condition);
}
