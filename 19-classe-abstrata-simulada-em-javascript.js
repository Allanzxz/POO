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

//Classe derivada "Mago"
class Mago extends Personagem {
    constructor(nome, magia) {
        super(nome);
        this.magia = magia;
    }

    // Implementação dos métodos abstratos da classe Persoangem
    atacar() {
        console.log(`${this.nome} lança a magia ${this.magia}`);
    }
    defender() {
        console.log(`${this.nome} defende com o escudo`);
    }
}

// Criando instancias e testando o comportamento
try {
    const personagem = new Personagem("inaválido") // isso vai lançar um erro
} catch (error) {
    console.log(error.message); // "Não é possi´vel instanciar a classe abstrata Personagem diretamente"
}

const guerreiro = new Guerreiro("Thorin", "Espada"); 
guerreiro.atacar(); // Saída: Thorin ataca com espada
guerreiro.defender(); // Saída: Thorin defende com o escudo

const mago = new Mago("Gandalf", "Bola de Fogo");
mago.atacar();
mago.defender();