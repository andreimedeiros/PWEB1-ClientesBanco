class PessoaJuridica extends Pessoa {

    constructor(nome: string, idade: number, dataNascimento: Date, private _cnpj: string){
        super(nome + " Juridica", idade, dataNascimento)
    }


    get cnpj(): string {
        return this._cnpj
    }

    // set cnpj(cnpj: string) {
    //     this._cnpj = cnpj;
    // }





}