import { rd } from "./readline";
import { administradorCategorias, administradorProductos } from "./administrador";

export async function administradorMenu() {
    let condition = true;
    do {
        let opcion = Number((await rd.question("\nAdministrador: donde desea acceder\n1.Categorias\n2.Productos\n3.Volver\n\nOpcion: ")).trim());

        switch (opcion) {
            case 1:
                await administradorCategorias();
                break;
            case 2:
                await administradorProductos();
                break;
            case 3:
                condition = false;
                break;

            default:
                console.log();
                break;
        }
    } while (condition);
}

