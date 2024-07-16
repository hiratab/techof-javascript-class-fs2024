const map = new Map();
map.set(0, 'a');
map.set(1, 'b');
map.set(2, 'c');
map.set('uma chave com string', 123);

map.forEach((value, key, thisArg) => {
  console.log(key, value);
});
