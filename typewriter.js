document.addEventListener("DOMContentLoaded", function() {
  const text = "...سەردانمان بکەن لە تێلێگرام"; // Your text
  const el = document.getElementById("typewriter");
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  typeWriter();

  el.addEventListener("click", function() {
    el.classList.add("clicked");
    window.open("https://t.me/rashidfarhad", "_blank"); // Change link here
  });
});
