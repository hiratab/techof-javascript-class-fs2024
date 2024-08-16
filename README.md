# Javascript Module Summary

## Output
Output is any information that a program produces. In the web development context, it can be:
- Print data in the **web browser console**.
- Show an **alert** to the user.
- Render **HTML Elements** in the web browser by manipulating the DOM.

### console.log
Outputs a message to console.
`console.log("Hello,World!")`

### alert
Displays a dialog with an optional message.

### DOM manipulation


## Input
Input is any information provided to the program.

### input HTML Element
`<input>`

## Conditions (If-Else)
Execute a block of code conditionally.

## Loops
Do something repeatedly. In other words, repeat an action some number of times.
[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

### For loops
Execute the actions defined in the statement until the condition evaluates to false. 
```
for (initialization; condition; afterthought)
  statement
```

### While loops
Executes the action defined in the statement while the condition evaluates to true.
```
while (condition)
  statement
```

## Lists / Array
Lists, as know as arrays, are capable to store multiple values. It is possible to access each value stored in the list individually.

### Create an Array
```
const arr = []
const sequence = [1, 2, 3, 4, 5]
```

### Access a value in the array
```
const sequence = [1, 2, 3, 4, 5]
console.log(sequence[0]) // "1"
```

### Modifying a value in the array
```
const sequence = [1, 2, 3, 4, 5]
sequence[0] = 10
console.log(sequence) // "[10, 2, 3, 4, 5]
```

### Adding items
```
const arr = []
arr.push(1)
console.log(arr) // "[1]
```

### Iterating over the array
Access every item in the array. 

#### For Each
```
const birds = ["Parrot", "Falcon", "Owl"];

for (const bird of birds) {
  console.log(bird);
}
```

#### Map
Creates a new array with the results of the function applied to every element in the array. 
```
const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]
```

#### Filter
```
function isLong(city) {
  return city.length > 8;
}
const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
const longer = cities.filter(isLong);
console.log(longer); // [ "Liverpool", "Edinburgh" ]
```

#### Reduce
```
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10
```

#### Find
Returns the first element in the array that satisfies the testing function. 
```
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12
```

#### Sort
Sort the elements of an array
```
const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]
```

## Functions

## DOM

## Event Handler

## Asynchronous code
### Callback
### Async/Await
