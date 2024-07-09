const obj = {
  a: 1,
  b: 2,
  c: {
    x: 9,
    y: 10,
    z: 11
  }
};

//const a = obj.a, b = obj['b'], c = obj.c;
// const { x } = obj.c
const { a, b2 = 'NaoTem', c : { x } } = obj;
console.log('a ' + a);
console.log('b ' + b2);
console.log('x ', x);

// -------------
let b3 = obj.b;
if (!b3) {
  b3 = 'NaoTem';
}
// -------------
//const { b2 = 'NaoTem' } = obj;
// -------------
let b4 = obj.b ? obj.b : 'NaoTem';
// -------------


function fn([{ maiorNumeroDeGolsDePortugal }]) {
  console.log(maiorNumeroDeGolsDePortugal);
}

const obj1 = {
  a: 1,
  b: 2,
  c: 3,
  maiorNumeroDeGolsDePortugal: 3
};
fn([obj1]);


