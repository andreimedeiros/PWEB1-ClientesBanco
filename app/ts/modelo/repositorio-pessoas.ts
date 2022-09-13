class RepositorioPessoas {

    private pessoas: (Cliente | Empresa)[] = []

    constructor(pessoas: Array<Cliente | Empresa>) {}


    adiconarPessoa(pessoa : Cliente | Empresa): void {
        this.pessoas.push(pessoa)
    }

    removerPessoa(nome: string): void {
        this.pessoas.filter(pessoa => pessoa.nome === nome )
    }

    pesquisarPessoa(nome: string): Cliente | Empresa {
        return this.pessoas.find(p => p.nome == nome)
    }

    listarPessoas():Array<Cliente | Empresa> {
        return this.pessoas
    }

}