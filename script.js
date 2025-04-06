const botao = document.getElementById('luz');
const lampada = document.getElementById('lampada');
const textoOriginal = botao.textContent;

botao.addEventListener('mouseover', () => {
  botao.textContent = 'VOCÊ FOI AVISADO ';
});

botao.addEventListener('mouseout', () => {
  botao.textContent = textoOriginal;
});

botao.addEventListener('click', () => {
  lampada.innerHTML = '<img src="https://lojatexugo.cdn.magazord.com.br/img/2022/07/produto/2757/lampada-led-filamento-blumenau-4w-bivolt-a60-e27-2200k-luz-amarela.jpg?ims=800x800" alt="Lâmpada" width="200">';
});
