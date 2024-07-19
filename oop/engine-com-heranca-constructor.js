function Motor(
  cilindros,
  displacement,
  disposicao,
) {
  // Atributos
  this.estaLigado = false,
  this.cilindros = cilindros,
  this.displacement = displacement,
  this.disposicao = disposicao,

  // Metodos
  this.ligar = function() {
    this.estaLigado = true;
    console.log('Motor ligado');
  },
  this.desligar = function() {
    this.estaLigado = false;
    console.log('Motor desligado');
  }
};

const motor1Cilindro = new Motor(1, 150, 'linha');
const motor2CilindrosV = new Motor(2, 300, 'V');

console.log({}.toString());

