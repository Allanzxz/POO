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
  get nivel() {
    return this.#nivel;
  }
  set nivel(nivel) {
    this.#nivel = nivel;
  }
  get vida() {
    return this.#vida;
  }
  set vida(vida) {
    this.#vida = vida;
  }
  get mana() {
    return this.#mana;
  }
  set mana(mana) {
    this.#mana = mana;
  }
}
