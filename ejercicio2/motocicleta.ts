import { Vehiculo } from "./vehiculo";

export class Motocicleta extends Vehiculo {
    private tipo: string;

    constructor(marca: string, modelo: string, anio: number, tipo: string) {
        super(marca, modelo, anio);
        this.tipo = tipo;
    }

    obtenerDetalles(): string {
        return `Motocicleta: ${this.marca} ${this.modelo} (${this.anio}), Tipo: ${this.tipo}.`;
    }
}