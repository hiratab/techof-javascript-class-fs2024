const NAMES_LOCAL_STORAGE_KEY = "names";

function addToLocalStorage(names) {
  localStorage.setItem(NAMES_LOCAL_STORAGE_KEY, names);
}

function getFromLocalStorage() {
  return localStorage.getItem(NAMES_LOCAL_STORAGE_KEY);
}
