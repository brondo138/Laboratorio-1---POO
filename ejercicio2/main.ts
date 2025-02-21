import { rd } from "./readline";
import { Vehiculo } from "./vehiculo";
import { Automovil } from "./automovil";
import { Motocicleta } from "./motocicleta";

async function main() {
    let vehiculos: Vehiculo[] = [];
    let marca:string, modelo:string, anio:number; 

    let tipoVehiculo = Number((await rd.question("Ingrese el tipo de vehiculo \n1.Automovil\n2.Motocicleta\n\nOpcion: ")).trim());
    
    switch (tipoVehiculo) {
        case 1:
            marca = (await rd.question("Ingrese la marca del vehiculo: ")).trim();
            modelo = (await rd.question("Ingrese el modelo del vehiculo: ")).trim();
            anio = parseInt((await rd.question("Ingrese el año del vehiculo: ")).trim());        
            let numeroPuertas:number = parseInt((await rd.question("Ingrese el numero de puertas: ")).trim());
            vehiculos.push(new Automovil(marca, modelo, anio, numeroPuertas));
            break;
        case 2: 
            marca = (await rd.question("Ingrese la marca de la motocicleta: ")).trim();
            modelo = (await rd.question("Ingrese el modelo de la motocicleta: ")).trim();
            anio = parseInt((await rd.question("Ingrese el año de la motocicleta: ")).trim());   
            let tipoMoto:string = (await rd.question("Ingrese el tipo de motocicleta (deportiva/crucero): ")).trim();
            vehiculos.push(new Motocicleta(marca, modelo, anio, tipoMoto));
            break;
    
        default:
            console.log("Tipo de vehiculo no valido.");
            rd.close();
            break;
    }

    vehiculos.forEach(vehiculo => console.log(vehiculo.obtenerDetalles()));

    rd.close();
}

main();