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

function MotorLinha(cilindros, displacement) {
  Motor.call(this, cilindros, displacement, 'linha');
  this.foo = 'bar';
}

function MotorLinha1Cilindro(displacement) {
  MotorLinha.call(this, 1, displacement);
  this.bar1 = 'foo1';
}

function MotorV(cilindros, displacement) {
  Motor.call(this, cilindros, displacement, 'V');
  this.bar = 'foo';
}

const motor1Cilindro = new MotorLinha1Cilindro(150);
const motor1Cilindro300 = new MotorLinha1Cilindro(300);
const motor2CilindrosV = new MotorV(2, 600);

