import * as readline from 'readline';

// Clase abstracta Vehiculo
abstract class Vehiculo {
    protected marca: string;
    protected modelo: string;
    protected anio: number;

    constructor(marca: string, modelo: string, anio: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }

    // implementando las subclases
    abstract obtenerDetalles(): string;
}

// Clase Automovil que hereda de Vehiculo
class Automovil extends Vehiculo {
    private numeroPuertas: number;

    constructor(marca: string, modelo: string, anio: number, numeroPuertas: number) {
        super(marca, modelo, anio);
        this.numeroPuertas = numeroPuertas;
    }

    obtenerDetalles(): string {
        return `Automovil: ${this.marca} ${this.modelo} (${this.anio}), ${this.numeroPuertas} puertas.`;
    }
}

// Clase Motocicleta que hereda de Vehiculo
class Motocicleta extends Vehiculo {
    private tipo: string;

    constructor(marca: string, modelo: string, anio: number, tipo: string) {
        super(marca, modelo, anio);
        this.tipo = tipo;
    }

    obtenerDetalles(): string {
        return `Motocicleta: ${this.marca} ${this.modelo} (${this.anio}), Tipo: ${this.tipo}.`;
    }
}

// Configuración de readline para leer desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function preguntar(pregunta: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(pregunta, resolve);
    });
}

// Funcion principal para ejecutar el programa
async function main() {
    let vehiculos: Vehiculo[] = [];

    let tipoVehiculo = await preguntar("Ingrese el tipo de vehiculo (automovil/motocicleta): ");
    
    let marca = await preguntar("Ingrese la marca del vehiculo: ");
    let modelo = await preguntar("Ingrese el modelo del vehiculo: ");
    let anio = parseInt(await preguntar("Ingrese el año del vehiculo: "));

    if (tipoVehiculo.toLowerCase() === "automovil") {
        let numeroPuertas = parseInt(await preguntar("Ingrese el numero de puertas: "));
        vehiculos.push(new Automovil(marca, modelo, anio, numeroPuertas));
    } else if (tipoVehiculo.toLowerCase() === "motocicleta") {
        let tipoMoto = await preguntar("Ingrese el tipo de motocicleta (deportiva/crucero): ");
        vehiculos.push(new Motocicleta(marca, modelo, anio, tipoMoto));
    } else {
        console.log("Tipo de vehiculo no valido.");
        rl.close();
        return;
    }

    // Mostrar detalles de los vehiculos registrados
    vehiculos.forEach(v => console.log(v.obtenerDetalles()));

    rl.close();
}

// Ejecutar la funcion principal
main();