import { rd } from "./readline";
import { categorias, productos, Categoria , eliminarProductos} from "./bd";

export async function administradorCategorias() {
    let condition = true;

    do {
        let opcion = Number((await rd.question("\nQue desea hacer\n1.Agregar categoria\n2.Editar categoria\n3.Eliminar categoria\n4.Volver\n\nOpcion: ")).trim());

        switch (opcion) {
            case 1:
                let categoriaNombre = (await rd.question("\nIngresa el nombre de la categoria: ")).trim();
                categorias.push(new Categoria(categorias.length + 1,categoriaNombre));
            console.log("Las categorias actuales son:");
            categorias.forEach((categoria, index) => {
                console.log(`${index + 1}. ${categoria.nombre}`);
            });
                break;

            case 2: 
                console.log("\nCual categoria desea editar");
                categorias.forEach((categoria, index) => {
                    console.log(`${index + 1}.${categoria.nombre}`);
                });
                let opcion = Number((await rd.question(`${categorias.length + 1}.Volver\n\nOpcion: `)).trim());
                if (opcion === categorias.length + 1) {
                    return;
                }
                else if (opcion >= 1 && opcion <= categorias.length) {
                    
                    let categoriaNombre = (await rd.question(`\nEditando ${categorias[opcion - 1].nombre}\nNuevo nombre: `)).trim();
                    const nuevaCategoria = new Categoria(categorias[opcion-1].id,categoriaNombre)
                    categorias.splice(opcion - 1, 1, nuevaCategoria );
                    console.log("\nLas categorias actuales son:");
                    
                    categorias.forEach((categoria, index) => {
                        console.log(`${index + 1}.${categoria.nombre}`);
                    });
                }
                else {
                    console.log("\nError: Ingresa una categoría válida\n");
                }
                break;
                
            case 3:
                console.log("\nCual categoria desea eliminar recuerda al eliminar una categoria tambien eliminas sus productos");
                categorias.forEach((categoria, index) => {
                    console.log(`${index + 1}.${categoria.nombre}`);
                });
                let eliminar = Number((await rd.question(`${categorias.length + 1}.Volver\n\nOpcion: `)).trim());
                if (eliminar === categorias.length + 1) {
                    return;
                }
                else if (eliminar >= 1 && eliminar <= categorias.length) {
                    let categoriaIdEliminar = categorias[eliminar-1].id
                    eliminarProductos(categoriaIdEliminar);

                    categorias.splice(eliminar - 1, 1 );
                    console.log("\nLas categorias actuales son:");
                    
                    categorias.forEach((categoria, index) => {
                        console.log(`${index + 1}.${categoria.nombre}`);
                    });
                }
                else {
                    console.log("\nError: Ingresa una categoría válida\n");
                }
                break;

            case 4:
                condition = false;
                break;

            default:
                console.log(`\nError: Ingrese una opcion valida\n`);
                break;
        }
    } while (condition);
}

export async function administradorProductos() {
    let condition = true;

    do {
        
        let opcion = Number((await rd.question("\nQue desea hacer\n1.Agregar producto\n2.Editar producto\n3.Eliminar producto\n4.Volver\n\nOpcion: ")).trim());
    } while (condition);
}