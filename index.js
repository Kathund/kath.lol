function toggleColor() {
  document.body.classList.toggle('latte');
  document.body.classList.toggle('mocha');
  const enabled = document.body.classList.contains('mocha');
  localStorage.setItem('dark', enabled);
  document.getElementById('toggle').firstChild.firstChild.textContent = `Toggle ${enabled ? 'Light' : 'Dark'} Mode`;
}

document.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) toggleColor();
  if (localStorage.getItem('dark') === 'true') toggleColor();
  document.getElementById('toggle').addEventListener('click', () => toggleColor());

  const cursor = document.getElementById('cursor');
  function toggleCursorHover() {
    cursor.classList.toggle('bg-ctp-red');
    cursor.classList.toggle('bg-ctp-sky');
    cursor.classList.toggle('scale-125');
  }

  window.addEventListener('mousemove', (event) => {
    cursor.style.top = `${event.pageY - cursor.clientWidth / 2}px`;
    cursor.style.left = `${event.pageX - cursor.clientHeight / 2}px`;
  });

  window.addEventListener('mouseover', (event) => {
    if (event.target.tagName === 'A') toggleCursorHover();
  });

  window.addEventListener('mouseout', (event) => {
    if (event.target.tagName === 'A') toggleCursorHover();
  });

  window.addEventListener('mousedown', () => toggleCursorHover());
  window.addEventListener('mouseup', () => toggleCursorHover());
});
