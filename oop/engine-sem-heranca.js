const motor1Cilindro = {
  estaLigado: false,
  cilindros: 1,
  displacement: 150,
  disposicao: 'linha',
  ligar: () => {
    estaLigado = true;
  },
  desligar: () => {
    estaLigado = false;
  }
};

const motor2CilindrosV = {
  estaLigado: false,
  cilindros: 2,
  displacement: 300,
  disposicao: 'V',
  ligar: () => {
    estaLigado = true;
  },
  desligar: () => {
    estaLigado = false;
  }
};
