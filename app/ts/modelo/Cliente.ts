class Cliente extends PessoaFisica {

    protected _contas: Array<Conta | ContaBonificada> = [];

    constructor(nome: string, idade: number, dataNascimento: Date, cpf: string, contas: Array<Conta | ContaBonificada>){
        super(nome, idade, dataNascimento, cpf, contas)
    }


    get nome():string {
        return this.nome
    }

    get idade():number {
        return this.idade
    }

    get dataNascimento():Date {
        return this.dataNascimento
    }

    get cpf(): string {
        return this.cpf
    }

    get contas(): Array<Conta | ContaBonificada> {
        return this._contas
    }

    set nome(n: string) {
        this.nome = n
    }

    set idade(i: number) {
        this.idade = i
    }

    set dataNascimento(d : Date) {
        this.dataNascimento = d
    }

    set cpf(cpf: string) {
        this.cpf = cpf
    }

   



    adicionarConta(conta: Conta | ContaBonificada):void {
        this.contas.push(conta)
    }

    removerConta(numero: string): void {
        this._contas = this.contas.filter(cliente => cliente.numero === numero)
    }
    
    pesquisaConta(numero: string): Conta | ContaBonificada {
        return this.contas.find(conta => conta.numero === numero)
    }

    saltoTotalContas(): number {
        return this.contas.reduce((acc, conta) => acc+conta.getSaldo(), 0)

    }

    mediaSaldoContas(): number {
        let totalcontas = this.contas.length
        return this.contas.reduce((acc, conta) => acc+conta.getSaldo(), 0)/totalcontas
    }

    




    }

