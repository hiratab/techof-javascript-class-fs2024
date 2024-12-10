const NAMES = [];

const addNameToLocalStorage = (name) => {
  NAMES.push(name);
  addToLocalStorage(NAMES);
}

const getNameFromLocalStorage = () => {
  const namesFromLocalStorage = getFromLocalStorage();
  namesFromLocalStorage.split(',').forEach(name => {
    NAMES.push(name);
  });
}

function createNameElement(name) {
  const p = document.createElement("p");
  p.innerText = name;

  document.getElementById("list").appendChild(p);
}

function clearNamesList() {
  const names = document.getElementById("list");

  let child = names.lastElementChild;
  while(child) {
    names.removeChild(child);
    child = names.lastElementChild;
  }
}

const renderNamesList = () => {
  clearNamesList();
  NAMES.map(createNameElement);
}

window.onload = () => {
  getNameFromLocalStorage();
  renderNamesList();
}
