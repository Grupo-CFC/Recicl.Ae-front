const $ = (elemento) => document.querySelector(elemento);

const { ra, peso } = JSON.parse(sessionStorage.getItem('reciclagem')) ?? [];

calcularPontos = (peso) => { return (peso * 0.35).toFixed(2); }

const dados = {
  ra: ra,
  peso: peso,
  pontuacao: calcularPontos(peso)
}

gerarQr = (obj) => {
  return qrCode = new QRCode($('#qrcodeImg'), {
    text: JSON.stringify(obj),
    width: 200,
    height: 200,
  });
}

document.addEventListener('DOMContentLoaded', () => {
  $('#local-qrcode').innerHTML = novoHtml;
  gerarQr(dados);
});

const novoHtml = `
  <div class="card">
    <div class="card-body">
      <p class="card-text">RA: ${dados.ra}</p>
      <p class="card-text">Foi descartado <span>${dados.peso}</span> gr</p>
      <p class="card-text">Sua pontuação foi de <br><span>${dados.pontuacao}</span> Fpts</p>
    </div>
    <div id="qrcodeImg" class="d-flex justify-content-center"></div>
  </div>
`;