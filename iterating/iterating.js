const arr = [10, 20, 30, 40, 50];

//for (let i = 0 ; i < arr.length ; i++) {
//  console.log(arr[i])
//}

for (const number of arr) {
  console.log(number);
}

for (const [index, number] of arr.entries()) {
  console.log(`index ${index} number ${number}`);
}


const obj = {
  a: 1,
  b: 2
}

for (const key of Object.values(obj)) {
  console.log(key)
}