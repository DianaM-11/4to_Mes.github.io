const emojis = document.querySelectorAll('.emoji');
const popup = document.getElementById('popup');
const popupText = document.getElementById('popupText');
const closePopup = document.getElementById('closePopup');




emojis.forEach(emoji => {
  emoji.addEventListener('click', () => {
    const message = emoji.getAttribute('data-message');
    popupText.textContent = message;
    popup.style.display = 'flex';
  });
});

closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target == popup) {
    popup.style.display = 'none';
  }
});



const rocket = document.querySelector('.rocket');

rocket.addEventListener('click', () => {
  const message = rocket.getAttribute('data-message');
  popupText.textContent = message;
  popup.style.display = 'flex';
});

 

const musica = document.getElementById('musica');
musica.preload = "auto";
musica.volume = 0.3;

musica.addEventListener('error', (e) => {
  console.error('Error cargando audio:', e);
});

function iniciarMusica() {
  if (!musica.paused) return; // Ya está sonando
  musica.play().then(() => {
    console.log('🎵 Música iniciada');
  }).catch((error) => {
    console.log('⚠️ No se pudo reproducir la música automáticamente:', error);
  });
}

document.body.addEventListener('click', function onFirstInteraction() {
  iniciarMusica();
  document.body.removeEventListener('click', onFirstInteraction);
});
