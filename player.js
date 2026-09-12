/* ---------------------------------------------------------------------------
   TROCA DO PLAYER: SUNO  ->  SPOTIFY
   ---------------------------------------------------------------------------
   O lançamento nas plataformas digitais está marcado para 02/10/2026.

   Quando as músicas estiverem no ar no Spotify, basta preencher abaixo o ID de
   cada faixa. O player do Suno é substituído automaticamente pelo do Spotify,
   aqui na página inicial e nas dez páginas de letra — não é preciso mexer em
   mais nenhum arquivo.

   Como achar o ID: abrir a música no Spotify, "Compartilhar > Copiar link".
   O link é https://open.spotify.com/track/XXXXXXXXXXXXXXXXXXXXXX
   O ID é a parte XXXXXXXXXXXXXXXXXXXXXX (22 caracteres), sem "?si=..." no fim.

   Enquanto o campo ficar vazio (''), continua tocando o Suno.
--------------------------------------------------------------------------- */

window.FAIXAS_SPOTIFY = {
  'feiticeira':        '',
  'fantasia':          '',
  'minha-querida':     '',
  'esse-forro-ta-bom': '',
  'insensatez':        '',
  'quem-ama-cuida':    '',
  'poucas-palavras':   '',
  'pecados':           '',
  'clarinha':          '',
  'sabia':             ''
};

(function () {
  var ids = window.FAIXAS_SPOTIFY || {};

  document.querySelectorAll('[data-faixa]').forEach(function (caixa) {
    var id = (ids[caixa.getAttribute('data-faixa')] || '').trim();
    if (!id) return;

    var iframe = document.createElement('iframe');
    iframe.src = 'https://open.spotify.com/embed/track/' + encodeURIComponent(id);
    iframe.loading = 'lazy';
    iframe.setAttribute('allow', 'autoplay; encrypted-media; clipboard-write; fullscreen; picture-in-picture');
    iframe.setAttribute('title', 'Player do Spotify');

    caixa.replaceChildren(iframe);
    caixa.classList.add('player-spotify');
  });

  /* Com o Spotify no ar, a demo deixa de ser demo. */
  if (Object.keys(ids).some(function (k) { return (ids[k] || '').trim(); })) {
    document.querySelectorAll('.player-nota').forEach(function (nota) {
      nota.textContent = 'Composição de João Andrade Filho.';
    });
  }
})();
