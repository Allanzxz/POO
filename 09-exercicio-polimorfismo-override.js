class Cidade {
  constructor(nome, populacao, area, fundacao, densidade) {
    this.nome = nome;
    this.populacao = populacao;
    this.area = area;
    this.fundacao = fundacao;
    this.densidade = densidade;
  }
  falar() {
    console.log(`Essa é a cidade de ${this.nome}!`);
  }
  mostrarInfo() {
    console.log(`A população da cidade é de ${this.populacao}!`);
  }
}

// Classe distrito que herda de Cidade
class Distrito extends Cidade {
  constructor(nome, populacao, area, fundacao, densidade, regiao, prefeito) {
    super(nome, populacao, area, fundacao, densidade);
    this.regiao = regiao
    this.prefeito = prefeito
  }
  falar() {
    console.log(`Essa é o distrito de ${this.nome}!`);
  }
  mostrarInfo() {
    console.log(`A população do distrito é de ${this.populacao} habitantes!`);
  }
}

// Classe vilarejo que herda de Cidade
class Vilarejo extends Cidade {
  constructor(nome, populacao, area, fundacao, densidade, rio, aeroporto) {
    super(nome, populacao, area, fundacao, densidade);
    this.rio = rio
    this.aeroporto = aeroporto;
  }
  falar() {
    console.log(`Essa é o vilarejo de ${this.nome}!`);
  }
  mostrarInfo() {
    console.log(`A população do vilarejo é de ${this.populacao} habitantes!`);
  }
}

// Criando instâncias de Distrito e Vilarejo
const distrito = new Distrito("Mimoso", 637, 100, 1967, 3, "centro-oeste", "Julio");
distrito.falar(); // Saída: Essa é o distrito de Mimoso!
distrito.mostrarInfo(); // Saída: A população do distrito é de 637 habitantes!

const vilarejo = new Vilarejo("Bom Alegre", 159, 10, 1992, 2, "centro-oeste", "Allan");
vilarejo.falar(); // Saída: Essa é o vilarejo de Bom Alegre!
vilarejo.mostrarInfo(); // Saída: A população do vilarejo é de 159 habitantes!
