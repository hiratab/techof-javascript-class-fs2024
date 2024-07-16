const set = new Set();
set.add(0);
set.add(1);
set.add(2);
set.add(3); 
set.add(4);

set.forEach((value, key, thisArg) => {
  console.log(key, value);
});
