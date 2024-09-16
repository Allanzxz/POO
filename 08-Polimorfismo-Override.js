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
        console.log(`${this.nome} recebeu ${dano} de dano. Vida restante: ${this.vida}`);
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
    constructor(nome, vida, magia) {
        super(nome, vida);
        this.feiticio = feiticio;
    }

    atacar() {
        super.atacar();
        console.log(`${this.nome} lança ${this.feitico}`);
    }
}

// Classe Arqueiro que herda de Personagem
    class Arqueiro extends Personagem {
    constructor (nome, vida, tipoflecha) {
        super(nome, vida);
        this.tipoFlecha = tipoFlecha;
    }
}
 atacar() {
        super.atacar();
        console.log(`${this.nome} dispara flechas ${this.tipoFlecha}!`);
    }
