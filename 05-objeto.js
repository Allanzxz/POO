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
// Objeto/Instancia "pessoal" criada a partir da classe pessoa
const pessoa1 = new Pessoa('Allan', 16, 1.85, 78.0);
pessoa1.falar(); // Chamada do método falar() da classe Pessoa