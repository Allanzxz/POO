class personagem {
    // Atributos
    private String nome;
    private int vida;
    // Método Construtor de classe Personagem
    public personagem(String nome, int vida) {
        this.nome = nome;
        this.vida = vida;
    }
    // Spbrecarga do método atacar
    public void atacar() {
        System.out.println(nome + "realiza um atque básico");
    }
    public void atacr(String arma) {
        System.out.println(nome + " ataca com o" + arma + "!");
    }
    public void atacar(String tipoFlecha, boolean comArco) {
        if (comArco) {
            System.out.println(nome + " dispara flechas " + tipoFlecha + " com um arco!");
        } else {
            System.out.println(nome + " dispara flechas " + tipoFlecha + "sem arco!");
        }
    }
    public void receberDano(int dano) {
        vida -= dano;
        System.out.printin(nome + " recebeu " + dano + " de dano. Vida restante: " + vida);
    }
}