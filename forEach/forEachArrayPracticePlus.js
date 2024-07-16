/*
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
*/

console.log(`1 x 1 = ${1 * 1}`);
console.log(`2 x 2 = ${2 * 2}`);
console.log(`3 x 3 = ${3 * 3}`);
console.log(`4 x 4 = ${4 * 4}`);
console.log(`5 x 5 = ${5 * 5}`);
console.log('-------------------');

console.log('--------- FOR ----------');
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(`${numbers[i]} x ${numbers[i]} = ${numbers[i] * numbers[i]}`);
}
console.log('-------------------');

console.log('--------- ForEach ----------');
const divForEach = document.createElement('div');
const h1ForEach = document.createElement('h1');
h1ForEach.textContent = 'ForEach';
divForEach.appendChild(h1ForEach);
numbers.forEach((number) => {
  const p = document.createElement('p');
  p.textContent = `${number} x ${number} = ${number * number}`;

  divForEach.appendChild(p);
  console.log(`${number} x ${number} = ${number * number}`);
});
document.getElementById('result').appendChild(divForEach);
console.log('-------------------');
