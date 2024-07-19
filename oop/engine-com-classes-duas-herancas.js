class Motor {
  constructor(
    cilindros,
    displacement,
    disposicao,
  ) {
    this._estaLigado = false;
    this._cilindros = cilindros;
    this._displacement = displacement;
    this._disposicao = disposicao;
  }

  ligar() {
    this.estaLigado = true;
    console.log('Motor ligado');
  }

  desligar() {
    this.estaLigado = false;
    console.log('Motor desligado');
  }

  get estaLigado() {
    return this._estaLigado;
  }

  set estaLigado(value) {
    this._estaLigado = value;
  }

  get cilindros() {
    return this._cilindros;
  }

  set cilindros(value) {
    this._cilindros = value;
  }

  get displacement() {
    return this._displacement;
  }

  set displacement(value) {
    this._displacement = value;
  }

  get disposicao() {
    return this._disposicao;
  }

  set disposicao(value) {
    this._disposicao = value;
  }
}

class MotorLinha extends Motor {
  constructor(cilindros, displacement) {
    super(cilindros, displacement, 'linha');
    this.abc = 'bar';
  }
}

class MotorLinha1Cilindro extends MotorLinha {
  constructor(displacement) {
    super(1, displacement);
    this.bar1 = 'foo1';
  }
}

class MotorV extends Motor {
  constructor(cilindros, displacement) {
    super(cilindros, displacement, 'V');
    this.bar = 'foo';
  }
}

class MotorV2Cilindros extends MotorV {
  constructor(displacement) {
    super(2, displacement);
    this.bar2 = 'foo2';
  }
}

const motor1Cilindro = new MotorLinha1Cilindro(150);
const motor2CilindrosV = new MotorV2Cilindros(300);
