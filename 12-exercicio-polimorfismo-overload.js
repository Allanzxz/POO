
class Nike {
  constructor(
    nome,
    dominio,
    poderPrincipal,
    simbolo,
    velocidade,
    energia,
    vitalidade,
    sabedoria,
    habilidadeLuta,
    divindadePai
  ) {
    this.nome = nome;
    this.dominio = dominio; 
    this.poderPrincipal = poderPrincipal; 
    this.simbolo = simbolo; 
    this.velocidade = velocidade; 
    this.energia = energia; 
    this.vitalidade = vitalidade;
    this.sabedoria = sabedoria; 
    this.habilidadeLuta = habilidadeLuta;
    this.divindadePai = divindadePai;  
  }

  
  exibirInfo() {
    console.log(
      `Nome: ${this.nome}, Domínio: ${this.dominio}, Poder: ${this.poderPrincipal}`
    );
  }

 
  concederVitoria(exercito) {
    console.log(`${this.nome} concedeu vitória ao exército de ${exercito}!`);
  }

  concederVitoria(guerreiro, recompensa) {
    console.log(
      `${this.nome} concedeu vitória a ${guerreiro}, recompensando com ${recompensa}!`
    );
  }


  usarPoder(tipoPoder) {
    if (tipoPoder === "velocidade") {
      this.velocidade += 10;
      console.log(`${this.nome} aumentou sua velocidade em 10 pontos.`);
    } else if (tipoPoder === "energia") {
      this.energia += 20;
      console.log(`${this.nome} aumentou sua energia em 20 pontos.`);
    }
  }

 
  calcularImpacto(batalhasVencidas) {
    return batalhasVencidas * 0.1; 
  }

  calcularImpacto(batalhasVencidas, duracaoBatalha) {
    const impactoDuracao = duracaoBatalha > 3 ? 0.2 : 0.1;
    return batalhasVencidas * impactoDuracao;
  }
}


class Ares extends Nike {
  constructor(
    nome,
    dominio,
    poderPrincipal,
    simbolo,
    velocidade,
    energia,
    vitalidade,
    sabedoria,
    habilidadeLuta,
    divindadePai,
    armaPreferida,
    temperamento
  ) {
    super(
      nome,
      dominio,
      poderPrincipal,
      simbolo,
      velocidade,
      energia,
      vitalidade,
      sabedoria,
      habilidadeLuta,
      divindadePai
    );
    this.armaPreferida = armaPreferida;
    this.temperamento = temperamento;
  }
}

class Atena extends Nike {
  constructor(
    nome,
    dominio,
    poderPrincipal,
    simbolo,
    velocidade,
    energia,
    vitalidade,
    sabedoria,
    habilidadeLuta,
    divindadePai,
    estrategiaPreferida,
    sabedoriaMilitar
  ) {
    super(
      nome,
      dominio,
      poderPrincipal,
      simbolo,
      velocidade,
      energia,
      vitalidade,
      sabedoria,
      habilidadeLuta,
      divindadePai
    );
    this.estrategiaPreferida = estrategiaPreferida;
    this.sabedoriaMilitar = sabedoriaMilitar;
  }
}

class Hermes extends Nike {
  constructor(
    nome,
    dominio,
    poderPrincipal,
    simbolo,
    velocidade,
    energia,
    vitalidade,
    sabedoria,
    habilidadeLuta,
    divindadePai,
    habilidadeVoo,
    eloComMensagens
  ) {
    super(
      nome,
      dominio,
      poderPrincipal,
      simbolo,
      velocidade,
      energia,
      vitalidade,
      sabedoria,
      habilidadeLuta,
      divindadePai
    );
    this.habilidadeVoo = habilidadeVoo;
    this.eloComMensagens = eloComMensagens; 
  }
}


const nike = new Nike(
  "Niké",
  "Vitória",
  "Conceder vitória",
  "Asas",
  100,
  80,
  70,
  90,
  85,
  "Pallas"
);
const ares = new Ares(
  "Ares",
  "Guerra",
  "Destruição",
  "Espada",
  80,
  60,
  100,
  50,
  95,
  "Zeus",
  "Espada flamejante",
  "Impulsivo"
);
const atena = new Atena(
  "Atena",
  "Sabedoria",
  "Planejamento Estratégico",
  "Coruja",
  70,
  70,
  90,
  100,
  80,
  "Zeus",
  "Cerco defensivo",
  "Inigualável"
);
const hermes = new Hermes(
  "Hermes",
  "Velocidade",
  "Mensagens divinas",
  "Caduceu",
  120,
  50,
  60,
  85,
  60,
  "Zeus",
  "Voar em alta velocidade",
  "Transporte de mensagens"
);

// Chamando métodos das instâncias
nike.exibirInfo();
nike.concederVitoria("Exército de Esparta");
nike.usarPoder("velocidade");
console.log("Impacto de Niké na batalha:", nike.calcularImpacto(3, 4));

ares.exibirInfo();
ares.concederVitoria("Aquilianos", "Fama eterna");
ares.usarPoder("energia");
console.log("Impacto de Ares na batalha:", ares.calcularImpacto(5));

atena.exibirInfo();
atena.concederVitoria("Exército de Atenas", "Sabedoria eterna");
atena.usarPoder("sabedoria");
console.log("Impacto de Atena na batalha:", atena.calcularImpacto(4, 2));

hermes.exibirInfo();
hermes.concederVitoria("Herói Perseu");
hermes.usarPoder("velocidade");
console.log("Impacto de Hermes nas batalhas:", hermes.calcularImpacto(2, 5));
