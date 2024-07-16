const array = [1, 2, 3, , 4, 5];
for (let i = 0; i < array.length; i++) {
  if (array[i] === 3) {
    continue;
  }
  array[i] = array[i] * 2;
  // console.log(array[i]);
}
console.log(array);
// array.forEach(callbackFunction);
const arrayForEach = [1, 2, 3, , 4, 5];
arrayForEach.forEach((element) => {
  // if (element === 3) {
  //   return;
  // }
  // console.log(element);
  element = element * 2;
});
console.log(arrayForEach);

// const objs = [{ name: 'John' }, { name: 'Jane' }];
// for (let i = 0; i < objs.length; i++) {
//   console.log(objs[i].name);
// }
// objs.forEach((obj) => { console.log(obj.name); });

// const fns = [() => console.log('John fns'), () => console.log('Jane fns')];
// for (let i = 0; i < fns.length; i++) {
//   fns[i]();
// }
// fns.forEach((fn) => fn());

// array.forEach((element, index) => {
//   console.log(element, index);
// });


