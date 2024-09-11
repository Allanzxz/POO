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
const pessoa1 = new Pessoa("Allan", 16, 1.85, 78.0);
pessoa1.falar(); // Chamada do método falar() da classe Pessoa


// exercicio
// Outro objeto/instancia "!pessoal2" criada a partir da mesma classe Pessoa

const pessoa2 = new Pessoa('Ana Luiza', 23, 1.72, 62);

pessoa2.falar(); // Chamada do método falar() da classe Pessoa

const pessoa3 = new Pessoa('Matheo', 13, 1.50, 82);
pessoa3.falar(); // Chamada do método falar() da classe Pessoa
