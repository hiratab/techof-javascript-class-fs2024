const counter = (function() {
  let counter = 0;

  const add = (value) => {
    counter = counter + value;
  }

  const increment = () => {
    add(1);
    changeText();
  }

  const decrement = () => {
    add(-1);
    changeText();
  }

  // const getValue = () => {
  //   return counter;
  // }

  // const setValue = (value) => {
  //   counter = value;
  //   changeText();
  // }

  const changeText = () => {
    document.getElementById('counter').innerText = `Counter: ${counter}`;
  }

  return {
    // getValue,
    // setValue,
    increment,
    decrement
  }
})()