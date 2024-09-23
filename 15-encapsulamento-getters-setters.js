class Personagem {
  #nome;
  #classes;
  #nivel;
  #vida;
  #mana;

  constructor(nome, classes, vida, mana) {
    this.#nome = nome;
    this.#classes = classes;
    this.#nivel = nivel;
    this.#vida = vida;
    this.#mana = mana;
  }
  //Métodos Getters e Setters
  //Métodos Getter e Setter para atributo nome
  get nome () {
    return this.#nome;
  }
  set nome (nome) {
    this.#nome = nome;
  }
  //Métodos Getter e Setter para atributo classes
  get classes () {
    return this.#classes;
  }
  set classes (classes) {
    this.#classes = classes;
  }
}
