const Usuario = require("../classes/usuario.js");
const Bicicleta = require("../classes/bicicleta.js");
const Estacao = require("../classes/estacao.js");
const BicicletaController = require("../controller/controller.js");
const Emprestimo = require("./emprestimo.js");

const controller = new BicicletaController();

// Criando usuário
const usuario = new Usuario(1, "Maria Eduarda", "Ativo");

// Criando bicicleta
const bicicleta = new Bicicleta(101, "Mountain Bike", true);

// Criando estação
const estacao = new Estacao("Estação Centro", "Centro", 20);

// Cadastro
controller.cadastrarBicicleta(bicicleta);
controller.cadastrarEstacao(estacao);

// Empréstimo
controller.realizarEmprestimo(usuario, bicicleta);

const emprestimo = new Emprestimo(usuario, bicicleta, new Date());

console.log("Status do empréstimo:", emprestimo.status);

// Devolução
controller.registrarDevolucao(bicicleta);

emprestimo.finalizar();

console.log("Status após devolução:", emprestimo.status);
