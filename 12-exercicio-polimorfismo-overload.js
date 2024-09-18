class MitologiaGrega {
  constructor(nome, idade, altura ,peso, significado, mora, poder, forca, corpo,vida) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this.peso = peso;
    this.significado = significado;
    this.mora = mora;
    this.poder = poder;
    this.forca = forca;
    this.corpo = corpo;
    this.vida = vida;
  }
  apresentar(...args) {
    if (args.length === 1) {
      console.log(`Eu sou ${this.nome}, Deus(a) da ${this.significado}!`);
    } else if (args.length === 2) {
      const arma = args[0];
      console.log(`Eu tenho ${this.idade} anos!`);
    } else if (args.length === 3) {
      const [tipoFlecha, comArco] = args;
      if (comArco) {
        console.log(`${this.nome} dispara a flecha ${tipoFlecha} com arco!`);
      } else {
        console.log(`${this.nome} ataca com a flecha ${tipoFlecha} sem arco!`);
      }
    } else {
      console.log("Número de argumentos não suportado.");
    }
  }
}
  falarInformacoes() {
    console.log(`Eu tenho ${this.idade} anos!`)
  }
  falarAltura() {
    console.log(`Eu meço ${this.altura} de idade!`)
  }
  falarPeso() {
    console.log(`Eu peso ${this.peso} kg!`)
  }

class Nike extends MitologiaGrega {
  constructor(nome, idade, altura, peso, significado, mora, poder, forca ,corpo, vida, representacao, legado) {
    super(nome, idade, altura, peso, significado, mora, poder, forca, corpo, vida);
    this.representacao = representacao;
    this.legado = legado;
  }
  apresentar(...args) {
    if (args.length === 1) {
      console.log(`Eu sou ${this.nome}, Deus(a) da ${this.significado}!`);
    } else if (args.length === 2) {
      const arma = args[0];
      console.log(`${this.nome} ataca com a ${arma}!`);
    } else if (args.length === 3) {
      const [tipoFlecha, comArco] = args;
      if (comArco) {
        console.log(`${this.nome} dispara a flecha ${tipoFlecha} com arco!`);
      } else {
        console.log(`${this.nome} ataca com a flecha ${tipoFlecha} sem arco!`);
      }
    } else {
      console.log("Número de argumentos não suportado.");
    }
  }
}