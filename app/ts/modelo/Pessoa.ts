class Pessoa {

    
    protected _nome: string;
    private _idade: number;
    private _dataNascimento: Date;
    protected _contas: (Conta | ContaBonificada)[] = [] 


    constructor(nome: string, idade: number, dataNascimento: Date, contas: Array<Conta | ContaBonificada>) {
        this._nome = nome;
        this._idade = idade
        this._dataNascimento = dataNascimento;
        this._contas = contas;

    }


    get nome(): string {
        return this._nome
    }


    set nome(nome: string) {
        this._nome = nome;
    }

    get idade(): number {
        return this._idade
    }

    set idade(idade: number) {
        this._idade = idade;
    }


    get dataNascimento(): Date {
        return this._dataNascimento
    }


    adicionarConta(conta: Conta | ContaBonificada):void {
        this._contas.push(conta)
    }

    removerConta(numero: string): void {
        this._contas = this._contas.filter(cliente => cliente.numero === numero)
    }
    
    pesquisaConta(numero: string): Conta | ContaBonificada {
        return this._contas.find(conta => conta.numero === numero)
    }

    saltoTotalContas(): number {
        return this._contas.reduce((acc, conta) => acc+conta.getSaldo(), 0)

    }

    mediaSaldoContas(): number {
        let totalcontas = this._contas.length
        return this._contas.reduce((acc, conta) => acc+conta.getSaldo(), 0)/totalcontas
    }

}
