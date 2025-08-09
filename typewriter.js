// typewriter.js
document.addEventListener('DOMContentLoaded', function () {
  const text = "دەست پێکردنی ناوێنەکان..."; // change this to whatever you want
  const el = document.getElementById('typewriter');
  if (!el) {
    console.error('typewriter element not found (add <span id="typewriter"></span> in the HTML).');
    return;
  }

  el.textContent = ''; // clear any initial text
  let i = 0;
  const speed = 80; // ms per character (smaller = faster)

  function type() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
});
