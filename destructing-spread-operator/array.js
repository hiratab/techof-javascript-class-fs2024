const arr = [30, 40, 50, 60];
const oldWayArray = [5, 6, arr[0], arr[1], arr[2]];
console.log(oldWayArray);

const newWayArray = [10, 20, ...arr];
const arr1 = [...newWayArray];
arr1[0] = 123;
console.log(newWayArray);
console.log(arr1);

console.log([...arr1, ...newWayArray]);
console.log([...'Bruno', ...' ', ...'Hirata']);


const [menorNumero, ...arraySemOPrimeiro] =  newWayArray;
console.log('menorNumero ' + menorNumero, arraySemOPrimeiro);
