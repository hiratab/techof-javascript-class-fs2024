class Motor {
  constructor(
    cilindros,
    displacement,
    disposicao,
  ) {
    this.estaLigado = false;
    this.cilindros = cilindros;
    this.displacement = displacement;
    this.disposicao = disposicao;
  }

  ligar() {
    this.estaLigado = true;
    console.log('Motor ligado');
  }

  desligar() {
    this.estaLigado = false;
    console.log('Motor desligado');
  }
}

const motor1Cilindro = new Motor(1, 150, 'linha');
const motor2CilindrosV = new Motor(2, 300, 'V');