const x = parseInt(prompt("Insira o valor para o x"));
const y = parseInt(prompt("Insira o valor para o y"));

function soma(x, y) {
  return x + y;
}

function geraMensagemParaOAlert(a, b, result) {
  return "x: " + a + " y: " + b + " result: " + result;
}

const soma0 = soma(x, y);
const soma1 = soma(x, y);
const soma2 = soma(x, y);
const soma3 = soma(x, y);

alert(geraMensagemParaOAlert(x, y, soma0));
alert(geraMensagemParaOAlert(x, y, soma1));
alert(geraMensagemParaOAlert(x, y, soma2));
alert(geraMensagemParaOAlert(x, y, soma3));



