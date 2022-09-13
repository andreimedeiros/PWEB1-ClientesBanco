class PessoaJuridica extends Pessoa {

    constructor(nome: string, idade: number, dataNascimento: Date, private _cnpj: string, contas: Array<Conta | ContaBonificada>){
        super(nome + " Juridica", idade, dataNascimento, contas)
    }


    get cnpj(): string {
        return this._cnpj
    }

    // set cnpj(cnpj: string) {
    //     this._cnpj = cnpj;
    // }





}