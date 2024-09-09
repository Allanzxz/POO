class Pessoa {
  constructor(nome, idade, altura, peso) {
    // Atributos
    // Inicialização dos atributos
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this.peso = peso;
  }
  falar() {
    console.log(`Olá, meu nome é ${this.nome}!`);
  }
}
