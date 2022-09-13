const c1 = new Conta('1', 100);
const c2 = new Conta('2', 200);
const c3 = new Conta('3', 300);
const c4 = new Conta('4', 400);
const c5 = new Conta('5', 500);
const c6 = new Conta('6', 600);
const c7 = new Conta('7', 700);
const c8 = new Conta('8', 800);


console.log(c1.numero);
const contaController = new ContaController();
contaController.adicionarConta(c1);
contaController.adicionarConta(c2);
contaController.listar();

const contaBonificada = new ContaBonificada('10', 100);
contaBonificada.creditar(10);
console.log(contaBonificada.getSaldo());

let pessoa = new Pessoa("Maria", 24, new Date(1998, 5, 6), null);
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.dataNascimento);

const pessoaf = new PessoaFisica("José", 22, new Date(2000, 3, 9), "12345679800", null);
console.log(pessoaf.nome);
console.log(pessoaf.idade);
console.log(pessoaf.dataNascimento);
console.log(pessoaf.cpf);


const pessoaj = new PessoaJuridica("Maria Atacado", 20, new Date(2002, 1, 1), "12345678000001", null);
console.log(pessoaj.nome);
console.log(pessoaj.idade);
console.log(pessoaj.dataNascimento);
console.log(pessoaj.cnpj);



const cliente1 = new Cliente("Josinaldo", 30, new Date(1992, 1, 1), "12345678911", null);
const cliente2 = new Cliente("João", 30, new Date(1992, 5, 4), "12345678922", null);
const cliente3 = new Cliente("João", 30, new Date(1992, 6, 7), "12345678933", null);

const empresa1 = new Empresa("Maia companies", 17, new Date(2001, 6, 5), "12345600008", null);
const empresa2 = new Empresa("Empresas MAXIMIANOS", 17, new Date(2001, 6, 5), "12345600008", null);
const empresa3 = new Empresa("Joiall", 18, new Date(2000, 1, 8), "12345600008", null);

cliente1.adicionarConta(c1);
cliente1.adicionarConta(c3);
cliente2.adicionarConta(c2)
cliente2.adicionarConta(c4);
cliente3.adicionarConta(c5);
empresa1.adicionarConta(c6);
empresa2.adicionarConta(c7);
empresa3.adicionarConta(c8);


console.log(empresa1.contas.map(item => item.getSaldo()))

const repositoriop = new RepositorioPessoas(null);

repositoriop.adiconarPessoa(cliente1);
repositoriop.adiconarPessoa(cliente2);
repositoriop.adiconarPessoa(cliente3);
repositoriop.adiconarPessoa(empresa1);
repositoriop.adiconarPessoa(empresa2);
repositoriop.adiconarPessoa(empresa3);

console.log(repositoriop)

console.log(cliente1.pesquisaConta("1"))

let numero = 0
let totalcontas = cliente1.contas.length
while (cliente1.contas.length > 0) {
    console.log("O Salto total das contas é: " + cliente1.saltoTotalContas());
    console.log("A Média total das contas é: " + cliente1.mediaSaldoContas());
    numero++;
    numero.toString();
    console.log(`Removendo conta ${numero}, aguarde...`)
    cliente1.removerConta(String(numero));
 }





// const repContas = new RepositorioContas();
//
// const c1 = new Conta('1', 100);
// const c2 = new Conta('2');
//
// repContas.adicionar(c1);
// repContas.adicionar(c2);
//
// repContas.getContas().forEach(conta => console.log(conta.numero))

// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c1.saldo = 200;
//
// c1.debitar(50);
// c2.creditar(1000);
// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c2.transferir(c1, 500);
// console.log(c1.saldo)
// console.log(c2.saldo)
