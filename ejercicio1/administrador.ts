import { rd } from "./readline";
import { categorias, productos, Categoria , eliminarProductos, Producto, mostrar} from "./bd";

export async function administradorCategorias() {
    let condition = true;

    do {
        let opcion = Number((await rd.question("\nQue desea hacer\n1.Agregar categoria\n2.Editar categoria\n3.Eliminar categoria\n4.Volver\n\nOpcion: ")).trim());

        switch (opcion) {
            case 1:
                let categoriaNombre = (await rd.question("\nIngresa el nombre de la categoria: ")).trim();
                let nuevoId = categorias.length > 0 ? Math.max(...categorias.map(categorias => categorias.id)) + 1 : 1;
            
                categorias.push(new Categoria(nuevoId,categoriaNombre));
                console.log("Las categorias actuales son:");
                mostrar(categorias);
                break;

            case 2: 
                console.log("\nCual categoria desea editar");
                mostrar(categorias);
                let opcion = Number((await rd.question(`${categorias.length + 1}.Volver\n\nOpcion: `)).trim());
                if (opcion === categorias.length + 1) {
                    return;
                }
                else if (opcion >= 1 && opcion <= categorias.length) {
                    
                    let categoriaNombre = (await rd.question(`\nEditando ${categorias[opcion - 1].nombre}\nNuevo nombre: `)).trim();
                    const nuevaCategoria = new Categoria(categorias[opcion-1].id,categoriaNombre)
                    categorias.splice(opcion - 1, 1, nuevaCategoria );
                    console.log("\nLas categorias actuales son:");
                    
                    mostrar(categorias);
                }
                else {
                    console.log("\nError: Ingresa una categoría válida\n");
                }
                break;
                
            case 3:
                console.log("\nCual categoria desea eliminar recuerda al eliminar una categoria tambien eliminas sus productos");
                mostrar(categorias);
                let eliminar = Number((await rd.question(`${categorias.length + 1}.Volver\n\nOpcion: `)).trim());
                if (eliminar === categorias.length + 1) {
                    return;
                }
                else if (eliminar >= 1 && eliminar <= categorias.length) {
                    let categoriaIdEliminar = categorias[eliminar-1].id
                    eliminarProductos(categoriaIdEliminar);

                    categorias.splice(eliminar - 1, 1 );
                    console.log("\nLas categorias actuales son:");
                    mostrar(categorias)
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

export async function administradorProductosMenu() {
    let condition = true;

    do {
        console.log(`\nDe que categoria quieres modificar los productos`);
        mostrar(categorias);
    
        let opcion = Number((await rd.question(`${categorias.length + 1}.Volver\n\nOpción: `)).trim());
        
        if (opcion === categorias.length + 1) {
            return;
        }
        else if (opcion >= 1 && opcion <= categorias.length) {
            let categoriaElegida = categorias[opcion - 1];
            await administradorProductos(categoriaElegida);
        }
        else {
            console.log("\nError: Ingresa una categoría válida\n");
        }

    } while (condition);
}

async function administradorProductos(categoria:any) {
    let productoFiltrado;
    let condition = true;
    do {

        let opcion = Number((await rd.question(`\nCategoria ${categoria.nombre}: Que desea hacer\n1.Agregar producto\n2.Editar producto\n3.Eliminar producto\n4.Volver\n\nOpcion: `)).trim());
        
    switch (opcion) {
        case 1:
            let productoNombre = (await rd.question("\nIngresa el nombre del producto: ")).trim();
            let productoPrecio = Number((await rd.question(`Ingresa el precio en dolares de ${productoNombre}: `)).trim());
            let productoOferta = Number((await rd.question(`Ingresa la oferta que aplicara el producto desde 0 hasta 100: `)).trim());

            if (productoOferta >= 0 && productoOferta <=100){
                productoOferta = productoOferta/100;
                productos.push(new Producto(categoria.id, productoNombre,productoPrecio, productoOferta));
                productoFiltrado = productos.filter(producto => producto.Categoria == categoria.id); //analiza
                console.log(`\nLos productos de la categoria ${categoria.nombre} son`);
                mostrar(productoFiltrado);

            }else{
                console.log("\nError: Ingrese un numero valido entre 0 a 100\n");
            }

            break;
            case 2:
                productoFiltrado = productos.filter(producto => producto.Categoria == categoria.id);
                console.log(`\nLos productos de la categoría ${categoria.nombre} son`);
                mostrar(productoFiltrado);
            
                let opcion = Number((await rd.question(`${productoFiltrado.length + 1}.Volver\n\nOpción: `)).trim());
            
                if (opcion === productoFiltrado.length + 1) {
                    return;
                } 
                
                else if (opcion >= 1 && opcion <= productoFiltrado.length) {  
                    let productoSeleccionado = productoFiltrado[opcion - 1];
            
                    let indexReal = productos.findIndex(producto => producto === productoSeleccionado);
            
                    if (indexReal !== -1) {
                        let productoNombre = (await rd.question(`\nEditando ${productoSeleccionado.nombre}\nNuevo nombre: `)).trim();
                        let productoPrecio = Number((await rd.question(`\nEditando precio $${productoSeleccionado.precio}\nNuevo precio: `)).trim());
                        let productoOferta = Number((await rd.question(`\nEditando ${(productoSeleccionado.oferta) * 100}%\nNueva oferta: `)).trim());
            
                        if (productoOferta >= 0 && productoOferta <= 100) {
                            productoOferta = productoOferta / 100; // Convertir a decimal (ej. 15% -> 0.15)
                            const nuevoProducto = new Producto(categoria.id, productoNombre, productoPrecio, productoOferta);
                            productos.splice(indexReal, 1, nuevoProducto)
                            productoFiltrado = productos.filter(producto => producto.Categoria == categoria.id);
                            console.log(`\nLos productos actuales de la categoría ${categoria.nombre}:`);
                            mostrar(productoFiltrado);
                        } 
                        else {
                            console.log("\nError: Ingrese un número válido entre 0 y 100\n");
                        }
                    }
                } 
                
                else {
                    console.log("\nError: Ingresa una categoría válida\n");
                }
                break;
            
            case 3:
                    productoFiltrado = productos.filter(producto => producto.Categoria == categoria.id);
                    console.log(`\nLos productos de la categoría ${categoria.nombre} son:`);
                    mostrar(productoFiltrado);
                    let eliminar = Number((await rd.question(`${productoFiltrado.length + 1}. Volver\n\nOpción: `)).trim());
                
                    if (eliminar === productoFiltrado.length + 1) {
                        return;
                    } 
                    
                    else if (eliminar >= 1 && eliminar <= productoFiltrado.length) {  

                        let productoSeleccionado = productoFiltrado[eliminar - 1];
                        let indexReal = productos.findIndex(producto => producto === productoSeleccionado);
                
                        if (indexReal != -1) { 
                            productos.splice(indexReal, 1);
                            productoFiltrado = productos.filter(producto => producto.Categoria == categoria.id);
                            
                            console.log(`\nLos productos actuales de la categoría ${categoria.nombre}:`);
                            mostrar(productoFiltrado);
                        }
                    } 
                    
                    else {
                        console.log("\nError: Ingresa una opción válida\n");
                    }
                    break;
                
        case 4:
            condition = false;
            break;
        default:
            console.log("\nError: Ingresa una opcion válida\n");
            break;
    }
    } while (condition);
}

