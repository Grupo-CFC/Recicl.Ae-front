const $ = (elemento) => document.querySelector(elemento);

function limitar(elemento, max) {
  if (elemento.value.length > max) {
    elemento.value = elemento.value.slice(0, max);
  }
}

$('#button-recicle').addEventListener('click', (ev) => {
  ev.preventDefault();

  reciclar(true);
});

function reciclar(clique) {
  const dados = {
    ra: $('#input-ra').value,
    peso: $('#input-peso').value
  }

  sessionStorage.setItem('reciclagem', JSON.stringify(dados));

  if(dados.ra == 0 || dados.ra == null && dados.peso == 0 || dados.peso == null) {
    alert('Os campos não podem ser vazios.')
  } else {
    window.location.assign('/src/pages/Qr-page/index.html');
  }
}