class Pessoa {
  constructor(nome, idade, altura, peso) {
    // Atributos
    // Inicialização dos atributos
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this.peso = peso;
  }
  mostrarDados(){
    console.log(`Nome: ${this.nome}`);
    console.log(`Idade: ${this.idade}`);
    console.log(`Altura: ${this.altura}m`);
    console.log(`Peso: ${this.peso}kg`);
  }
}


//Classe Estudante que herda de Pessoa
class Estudante extends Pessoa {
  constructor(nome, idade, altura, peso, curso) {
    super(nome, idade, altura, peso);
    this.curso = curso;
  }
  mostrarCurso(){
    console.log(`Meu curso é ${this.curso}`);
  }
}

//Classe Funcionario que herda de Pessoa
class Funcionario extends Pessoa {
  constructor(nome, idade, altura, peso, salario) {
    super(nome, idade, altura, peso);
    this.salario = salario;
  }
  mostrarSalario(){
    console.log(`Meu salário é ${this.salario}`);
  }
}

//Classe Diretor que herda de Funcionario
class Diretor extends Funcionario {
  constructor(nome, idade, altura, peso, salario) {
    super(nome, idade, altura, peso, salario);
  }
}

//Classe Professor que herda de Funcionario
class Professor extends Funcionario {
  constructor(nome, idade, altura, peso, salario) {
    super(nome, idade, altura, peso, salario);
  }
}

const aluno = new Estudante(
  "João",
  16,
  1.7,
  70,
  "Programação de Jogos Digitais"
);
const diretor = new Diretor("Sérgio", 45, 1.65, 65, 3000);
const professor = new Professor("Wanderson", 40, 1.65, 70, 1000);

// Mostrando no console a saida
console.log(aluno); // Saída: Estudante {nome: 'João', idade: 16, altura: 1.7, peso: 70, curso: 'Programação de Jogos Digitais')
aluno.mostrarDados();
aluno.mostrarCurso();
console.log(diretor); // Saída: Diretor (nome: 'Sérgio', idade: 45, altura: 1.65, peso: 65, salario: 3000 }
 diretor.mostrarDados();
 diretor.mostrarSalario();
console.log(professor); // Saida: Professor {nome: 'Wanderson', idade: 40, altura: 1,65, po70, salario: 1000 ›
 professor.mostrarDados();
 professor.mostrarSalario();
