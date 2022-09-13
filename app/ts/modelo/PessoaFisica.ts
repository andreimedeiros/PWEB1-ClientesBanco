class PessoaFisica extends Pessoa {

    constructor(nome: string, idade: number, dataNascimento: Date, private _cpf: string, contas: Array<Conta | ContaBonificada>){
        super(nome + "Fisica", idade, dataNascimento, contas)
    }



        get cpf(): string {
            return this._cpf
        }

        // set cpf(cpf: string) {
        //     this._cpf = cpf;
        // }

}