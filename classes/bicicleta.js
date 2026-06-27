class Bicicleta {
    constructor(identificador, modelo) {
        this.identificador = identificador;
        this.modelo = modelo;
        this.disponibilidade = true;
    }

    emprestar() {
        this.disponibilidade = false;
    }

    devolver() {
        this.disponibilidade = true;
    }
}