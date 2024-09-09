class Pais {
  constructor(pais, populaçao, estados, esporte, presidente ) {
    // Atributos
    // Inicialização dos atributos
    this.pais = pais;
    this.populaçao = populaçao;
    this.estados = estados;
    this.esporte = esporte;
    this.presidente = presidente;
  }
  estados() {
    console.log(`estado: ${this.estados}!`);
  }
  densidadeDemografica() {
    console.log(`densidade demografica: ${this.populaçao}!`);
  }
  esportes() {
    console.log(`esportes: ${this.esporte}!`);
  }
}
