export abstract class Vehiculo {
    protected marca: string;
    protected modelo: string;
    protected anio: number;

    constructor(marca: string, modelo: string, anio: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }

    abstract obtenerDetalles(): string;
}