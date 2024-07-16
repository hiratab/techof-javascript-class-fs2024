const numbers = [1, 2, 3, 4, 5];

const formataString = (number) => {
  return `${number} x ${number} = ${number * number}`;
}
const createElement = (number) => {
  const p = document.createElement('p');
  p.textContent = formataString(number);

  document.getElementById('result').appendChild(p);
}
numbers.forEach(createElement);
