class Emprestimo {
    constructor(usuario, bicicleta, data) {
        this.usuario = usuario;
        this.bicicleta = bicicleta;
        this.data = data;
        this.status = "Em andamento";
    }

    finalizar() {
        this.status = "Finalizado";
    }
}

module.exports = Emprestimo;