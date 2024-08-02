function renderHeader() {
  const header = document.getElementById('header');
  header.innerHTML = `
    <h1>Dicas para Projeto</h1>
    <a href="./dicasParaProjeto.html">Dicas para Projeto</a>
    <a href="./navigation.html">Navigation</a>
    <a href="./filtroDaLista.html">Filtro Da Lista</a>
    <a href="./register.html">Register</a>
  `;
}
document.addEventListener('onload', renderHeader());
