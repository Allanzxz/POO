// Classe base "Personagem" simulando uma classe abstrata
class Personagem {
    constructor(nome){
        if (new.target === Personagem){
            throw new Error("Não é possi´vel instanciar a classe abstrata Personagem diretamente.");
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