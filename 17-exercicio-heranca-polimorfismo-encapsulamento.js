class Receita {
  constructor(nome,tempoPreparo,dificuldade,porcoes,tipo,ingredientes,instrucoes,calorias,origem,autor) {
    this._nome = nome;
    this._tempoPreparo = tempoPreparo;
    this._dificuldade = dificuldade;
    this._porcoes = porcoes;
    this._tipo = tipo;
    this._ingredientes = ingredientes;
    this._instrucoes = instrucoes;
    this._calorias = calorias;
    this._origem = origem;
    this._autor = autor;
  }

  // Getters
  get nome() {
    return this._nome;
  }

  get tempoPreparo() {
    return this._tempoPreparo;
  }

  // Setters
  set nome(novoNome) {
    this._nome = novoNome;
  }

  set tempoPreparo(novoTempo) {
    this._tempoPreparo = novoTempo;
  }

  // Métodos
  descrever() {
    return `${this._nome} é uma receita de ${this._tipo}, que serve ${this._porcoes} porções e leva ${this._tempoPreparo} minutos para preparar.`;
  }

  // Sobrecarga
  mostrarInformacoesNutricionais(valorAdicional = 0) {
    const totalCalorias = this._calorias + valorAdicional;
    return `${this._nome} tem um total de ${totalCalorias} calorias.`;
  }
}


class Sobremesa extends Receita {
  constructor(nome,tempoPreparo,dificuldade,porcoes,ingredientes,instrucoes, calorias, origem,autor,doce) {
    super(nome,tempoPreparo,dificuldade,porcoes,"Sobremesa",ingredientes,instrucoes,calorias,origem,autor);
    this.doce = doce;
  }

  verificarDoce() {
    return this.doce ? "Essa sobremesa é doce." : "Essa sobremesa não é doce.";
  }
}

class PratoPrincipal extends Receita {
  constructor(
    nome,tempoPreparo,dificuldade,porcoes,ingredientes,instrucoes,calorias,origem,autor,proteina
  ) {
    super(nome,tempoPreparo,dificuldade,porcoes,"Prato Principal",ingredientes,instrucoes,calorias,origem,autor);
    this.proteina = proteina;
  }

  mostrarProteina() {
    return `Esse prato contém ${this.proteina} como principal fonte de proteína.`;
  }
}

class Aperitivo extends Receita {
  constructor(nome,tempoPreparo, dificuldade,porcoes,ingredientes,instrucoes,calorias,origem,autor,temperatura) {
    super(nome,tempoPreparo,dificuldade,porcoes,"Aperitivo",ingredientes,instrucoes,calorias,origem,autor);
    this.temperatura = temperatura;
  }

  verificarTemperatura() {
    return `Esse aperitivo é servido ${this.temperatura}.`;
  }
}

class Bebida extends Receita {
  constructor(nome,tempoPreparo, dificuldade,porcoes,ingredientes,instrucoes,calorias,origem,autor,alcoolica) {
    super(nome,tempoPreparo,dificuldade,porcoes,"Bebida",ingredientes,instrucoes,calorias,origem,autor);
    this.alcoolica = alcoolica;
  }

  verificarAlcool() {
    return this.alcoolica
      ? "Essa bebida contém álcool."
      : "Essa bebida não contém álcool.";
  }
}

class Comida extends Receita {
    constructor(nome, tempoPreparo, dificuldade, porcoes, ingredientes, instrucoes, calorias, origem, autor, doce) {
        super(nome, tempoPreparo, dificuldade, porcoes, 'Comida', ingredientes, instrucoes, calorias, origem, autor);
        this.doce = doce;
    }

    descrever() {
        return `${this.nome} é uma sobremesa ${this.doce ? 'doce' : 'não doce'}.`;
    }
}

// Sobrescrita semelhante nas outras classes derivadas.

const pudim = new Sobremesa("Pudim",60,"Fácil",8,["leite condensado", "açúcar", "ovos"],"Misture e cozinhe.",500,"Brasil","Maria",true);
const lasanha = new PratoPrincipal("Lasanha",90,"Médio",6,["massa", "queijo", "molho"],"Monte em camadas e asse.",1200,"Itália","Luigi","carne moída");
const bolinho = new Aperitivo("Bolinho de Queijo",30,"Fácil",12,["queijo", "farinha", "óleo"],"Frite os bolinhos.",300,"Brasil","Ana","quente");
const suco = new Bebida("Suco de Laranja",10,"Muito Fácil",4,["laranjas", "água"],"Esprema e sirva.",100,"Brasil","Pedro",false);

console.log(pudim.descrever());
console.log(lasanha.mostrarProteina());
console.log(bolinho.verificarTemperatura());
console.log(suco.verificarAlcool());


pudim.nome = "Pudim de Leite";
lasanha.tempoPreparo = 120;

console.log(pudim.descrever());
console.log(lasanha.descrever());
