document.querySelectorAll('.model-card').forEach(card => {
  card.addEventListener('click', () => {
    // Exemplo de redirecionamento
    window.location.href = "https://example.com/livecam";
  });
});

  const video = document.getElementById('adVideo');
  const audioToggle = document.getElementById('audioToggle');

  function toggleAudio() {
    if (video.muted) {
      video.muted = false;
      audioToggle.textContent = '🔊';
    } else {
      video.muted = true;
      audioToggle.textContent = '🔇';
    }
  }

  function replayVideo() {
    video.currentTime = 0;
    video.play();
  }

  function closeBanner() {
    document.getElementById('floating-banner').style.display = 'none';
  }
