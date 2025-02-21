import { Vehiculo } from "./vehiculo";

export class Automovil extends Vehiculo {
    private numeroPuertas: number;

    constructor(marca: string, modelo: string, anio: number, numeroPuertas: number) {
        super(marca, modelo, anio);
        this.numeroPuertas = numeroPuertas;
    }

    obtenerDetalles(): string {
        return `Automovil: ${this.marca} ${this.modelo} (${this.anio}), ${this.numeroPuertas} puertas.`;
    }
}