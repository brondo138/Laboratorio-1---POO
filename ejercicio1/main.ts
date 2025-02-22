import { rd } from "./readline"
import { Catalogo } from './catalogo';
import { administradorMenu } from "./administradorMenu";


export async function main() {
    let condition = true;
    do {
        
        let opcion = Number((await rd.question("\nBienvenido usuario que desea hacer\n1.Comprar\n2.Modo administrador\n3.Salir\n\nOpcion: ")).trim());

        switch (opcion) {
            case 1:
                await Catalogo();
                break;
            case 2:
                let contra = (await rd.question("\nIngrese la contraseña: ")).trim();
                if (contra == "123") {
                    await administradorMenu();
                }else{console.log("\nError: contraseña incorrecta\n");}
                break;
            case 3:
                condition = false;  
                process.exit(0);
                break
        
            default:
                console.log("\nError: Ingresa una opcion valida\n  ");
                break;
        }

    } while (condition);
}

main();