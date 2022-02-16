class Cliente {
    constructor(pNome, pEndereco, pTelefone){
        this.Nome = pNome;
        this.Endereco = pEndereco;
        this.Telefone = pTelefone;
    }

    get Nome() {
        return this.nome;
    }
    set Nome(pNome) {
        this.nome = pNome;
    }

    get Endereco() {
        return this.endereco;
    }
    set Endereco(pEndereco) {
        this.endereco = pEndereco;
    }

    get Telefone() {
        return this.telefone;
    }
    set Telefone(pTelefone) {
        this.telefone = pTelefone;
    }

    imprimirDados() {
        return "Nome: " + this.nome +
        "\nEndereço: " + this.endereco +
        "\nTelefone: " + this.telefone
    }

}

class PessoaFisica extends Cliente{
    constructor(pNome, pEndereco, pTelefone, pCPF, pDatadeAniversario) {
        super(pNome, pEndereco, pTelefone);
        this.Cpf = pCPF;
        this.DatadeAniversario = pDatadeAniversario;
    }

    get Cpf() {
        return this.cpf;
    }
    set Cpf(pCPF) {
        this.cpf = pCPF
    }

    get DatadeAniversario() {
        return this.datadeaniversario;
    }
    set DatadeAniversario(pDatadeAniversario) {
        this.datadeaniversario = pDatadeAniversario;
    }

    imprimirDados() {
        return super.imprimirDados() + "\nCPF: " + this.Cpf + 
        "\nData de Aniversário: " + this.datadeaniversario
    }

} 

class PessoaJuridica extends Cliente {
    constructor(pNome, pEndereco, pTelefone, pCNPJ, pRazaoSocial) {
        super(pNome, pEndereco, pTelefone);
        this.Cnpj = pCNPJ;
        this.RazaoSocial = pRazaoSocial;
    }

    get Cnpj() {
        return this.cnpj;
    }
    set Cnpj(pCNPJ) {
        this.cnpj = pCNPJ;
    }

    get RazaoSocial() {
        return this.razaosocial;
    }
    set RazaoSocial(pRazaoSocial) {
        this.razaosocial = pRazaoSocial;
    }

    imprimirDados() {
        return super.imprimirDados() + "\nCNPJ: " + this.Cnpj +
        "\nRazão Social: " + this.razaosocial
    }

}


let novaPessoaFisica = new PessoaFisica("Victor Vale", "Rua Recanto dos Limoeiros, número 83", 2222222222, 11111111111, "25/02");
let novaPessoaJuridica = new PessoaJuridica("Game Mania", "Rua Oklahoma, número 313", 999999999, 8888888888,"Game Mania Comércio LTDA");


console.log(novaPessoaFisica);
console.log(novaPessoaJuridica);

console.log(novaPessoaFisica.imprimirDados());
console.log(novaPessoaJuridica.imprimirDados());
