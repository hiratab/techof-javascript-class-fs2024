function setSize(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  }
}

const size12 = setSize(12);
const size16 = setSize(16);
const size26 = setSize(26);
const size32 = setSize(32);

function setSizeDireto(size) {
  document.body.style.fontSize = size + 'px';
}

document.getElementById('counter').innerText = `Counter: ${counter.counter}`;
document.getElementById('increment').addEventListener('click', counter.increment);
document.getElementById('decrement').addEventListener('click', counter.decrement);
