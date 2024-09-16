// Classe base Personagem
class Personagem {
  constructor(nome, vida) {
    this.nome = nome;
    this.vida = vida;
  }
  atacar() {
    console.log(`${this.nome} realiza um ataque básico!`);
  }
  receberDano(dano) {
    this.vida -= dano;
    console.log(
      `${this.nome} recebeu ${dano} de dano. Vida restante: ${this.vida}`
    );
  }
}

// Classe Guerreiro que herda de personagem

class Guerreiro extends Personagem {
  constructor(nome, vida, arma) {
    super(nome, vida);
    this.arma = arma;
  }

  atacar() {
    super.atacar();
    console.log(`${this.nome} realiza um ataque com a ${this.arma}`);
  }
}

// Classe Mago que herda de Personagem

class Mago extends Personagem {
  constructor(nome, vida, feitico) {
    super(nome, vida);
    this.feitico = feitico;
  }

  atacar() {
    super.atacar();
    console.log(`${this.nome} lança ${this.feitico}`);
  }
}

// Classe Arqueiro que herda de Personagem
class Arqueiro extends Personagem {
  constructor(nome, vida, tipoFlecha) {
    super(nome, vida);
    this.tipoFlecha = tipoFlecha;
  }
}
atacar();
{
  super.atacar();
  console.log(`${this.nome} dispara a flecha ${this.tipoFlecha}`);
}

// Criando instâncias de Guerreiro, Mago e Arqueiro
const guerreiro = new Guerreiro("Arthur", 100, "espada");
guerreiro.atacar(); // Saída: Arthur ataca com a espada!
guerreiro.receberDano(20); // Saída: Arthur recebeu 20 de dano. Vida restante: 80

const mago = new Mago("Merlin", 80, "bola de fogo");
mago.atacar(); // Saída: Merlin lança bola de fogo!
mago.receberDano(15); // Saida: Merlin recebeu 15 de dano. Vida restante: 65

const arqueiro = new Arqueiro("Legolas", 90, "explosiva");
arqueiro.atacar(); // Saída: Legolas dispara flechas explosiva!
arqueiro.receberDano(10); // Saida: Legolas receber de dano. Vida restante: 80
