function greeting(name) {
  alert('Hello ' + name);
  alert('Hello postGreeting ' + name);
}

function processUserInput(callback) {
  const name = prompt('Please, enter your name');
  callback(name);
}

processUserInput(greeting);

