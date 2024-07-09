function fn(a, b, ...theArgs) {
  console.log('a ' + a);
  console.log('b ' + b);
  console.log('theArgs ' + theArgs, theArgs);
}


fn('a', 'b', 'c', 'd', 'e', 'f', 'g');

function fnq(...theArgs) {
  const [a] = theArgs;
  console.log(a, 'theArgs ' + theArgs, theArgs);
}


fnq([1,2,3,4], 'a', 'b', 2, { oi: 'oi' } , () => {}, 'f', 'g');