// Classe base "Personagem" simulando uma classe abstrata
class Personagem {
    constructor(nome){
        if (new.target === Personagem){
            throw new Error("Não é possivel instanciar a classe abstrata Personagem diretamente.");
        }
        this.nome = nome;
    }
    // Método abstrato simulado
    atacar(){
        throw new Error("O Método atacar() deve ser implementado pela classe derivada.");
    }

    //Método abstrato simulado
    defender() {
        throw new Error("O Método defender() deve ser implementado pela classe derivada.");
    }
}

//Classe derivada "Guerreiro"
class Guerreiro extends Personagem {
    constructor(nome, arma) {
        super(nome);
        this.arma = arma;
    }

    // Implementação dos métodos abstratos da classe Persoangem
    atacar() {
        console.log(`${this.nome} ataca com ${this.arma}`);
    }
    defender() {
        console.log(`${this.nome} defende com o escudo`);
    }
}