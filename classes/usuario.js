class Usuario {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
        this.status = "ativo";
    }

    ativar() {
        this.status = "ativo";
    }

    desativar() {
        this.status = "inativo";
    }
}
module.exports = Usuario;
