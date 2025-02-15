import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

async function main() {
    const rd = readline.createInterface({input,output})
    let condition = true;
    do {
        
        let opcion = Number((await rd.question("Bienvenido usuario que desea hacer\n1.Comprar\n2.Modo administrador\n3.Salir\n\nOpcion: ")).trim());

        switch (opcion) {
            case 1:
                
                break;
            case 2:
                let contra = (await rd.question("Ingresa la contraseña para acceder: ")).trim();
                if (contra == "123") {
                    
                }else{console.log("\nError: contraseña incorrecta\n");}
                break;
            case 3:
                condition = false;
                rd.close();
                break
        
            default:
                console.log("\nError: Ingresa un dato valido\n  ");
                break;
        }

    } while (condition);
}

main();