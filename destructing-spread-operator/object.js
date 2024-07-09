
const obj = {
  a: 1,
  b: 2,
  c: 3
};

const { a, ...objSemA } = obj;
console.log('a ' + a + ' ' + JSON.stringify(objSemA)); // [Object object]

const obj1 = {...obj};
obj1.a = 10;
console.log(obj);
console.log(obj1);

const objA = { a: 1, b: 2, c: 3, x: 4, y: 5 };
const objX = { x: 10, y: 11, z: 12 };

const objOldWay = {
  a: objA.a,
  b: objA.b,
  x: objX.x,
  x: objA.x,
  y: objX.y
}
console.log('objOldWay');
console.log(objOldWay);

const objNewWay = {

  ...objX,
  ...objA
}
console.log('objNewWay');
console.log(objNewWay);
