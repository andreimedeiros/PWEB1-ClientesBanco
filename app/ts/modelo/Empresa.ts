class Empresa extends PessoaJuridica {

    protected _contas: (Conta | ContaBonificada)[] = [] 

    constructor(nome: string, idade: number, dataNascimento: Date, cnpj: string, contas: Array<Conta | ContaBonificada>){
        super(nome, idade, dataNascimento, cnpj)
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

    get cnpj(): string {
        return this.cnpj
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

    //meio estranho ter data de nascimento aqui, mas sigo a regra de negocio :D
    set dataNascimento(d : Date) {
        this.dataNascimento = d
    }

    set cnpj(cnpj: string) {
        this.cnpj = cnpj
    }

   



    adicionarConta(conta: Conta | ContaBonificada):void {
        this.contas.push(conta)
    }

    removerConta(numero: string): void {
        this._contas = this.contas.filter(cliente => cliente.numero === numero)
    }
    
    pesquisaConta(numero: string): Conta | ContaBonificada {
        return this._contas.find(conta => conta.numero === numero)
    }

    saltoTotal_(): number {
        return this._contas.reduce((acc, conta) => acc+conta.getSaldo(), 0)

    }

    mediaSaldoContas(): number {
        let totalcontas = this.contas.length
        return this._contas.reduce((acc, conta) => acc+conta.getSaldo(), 0)/totalcontas
    }





}