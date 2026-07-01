class BicicletaController {
    constructor() {
        this.bicicletas = [];
        this.estacoes = [];
    }

    // Cadastrar uma bicicleta
    cadastrarBicicleta(bicicleta) {
        const existe = this.bicicletas.find(
            b => b.identificador === bicicleta.identificador
        );

        if (existe) {
            console.log("Erro: Bicicleta já cadastrada.");
            return false;
        }

        this.bicicletas.push(bicicleta);
        console.log("Bicicleta cadastrada com sucesso!");
        return true;
    }

    // Cadastrar uma estação
    cadastrarEstacao(estacao) {
        const existe = this.estacoes.find(
            e => e.nome === estacao.nome
        );

        if (existe) {
            console.log("Erro: Estação já cadastrada.");
            return false;
        }

        this.estacoes.push(estacao);
        console.log("Estação cadastrada com sucesso!");
        return true;
    }

    // Realizar empréstimo
    realizarEmprestimo(identificador) {
        const bicicleta = this.bicicletas.find(
            b => b.identificador === identificador
        );

        if (!bicicleta) {
            console.log("Erro: Bicicleta não encontrada.");
            return false;
        }

        if (!bicicleta.disponibilidade) {
            console.log("Erro: Bicicleta indisponível.");
            return false;
        }

        bicicleta.emprestar();
        console.log("Empréstimo realizado com sucesso!");
        return true;
    }

    // Registrar devolução
    registrarDevolucao(identificador) {
        const bicicleta = this.bicicletas.find(
            b => b.identificador === identificador
        );

        if (!bicicleta) {
            console.log("Erro: Bicicleta não encontrada.");
            return false;
        }

        bicicleta.devolver();
        console.log("Devolução registrada com sucesso!");
        return true;
    }

    // Atualizar disponibilidade
    atualizarDisponibilidade(identificador, disponibilidade) {
        const bicicleta = this.bicicletas.find(
            b => b.identificador === identificador
        );

        if (!bicicleta) {
            console.log("Erro: Bicicleta não encontrada.");
            return false;
        }

        bicicleta.disponibilidade = disponibilidade;
        console.log("Disponibilidade atualizada!");
        return true;
    }
}

module.exports = BicicletaController;