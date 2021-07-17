const mode = document.getElementById('switch');

mode.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  // Guardar en LocalStorage
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('dark-mode', 'true');
  } else {
    localStorage.setItem('dark-mode', 'false');
  }
});

// Obtenemos el modo actual
if (localStorage.getItem('dark-mode') === "true") {
  document.body.classList.add('dark');
} else {
  document.body.classList.remove('dark');
}