document.addEventListener("DOMContentLoaded", function() {
  const text = " سەردانمان بکەن لە تێلێگرام... "; // Your typewriter text
  const el = document.getElementById("typewriter");
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100); // typing speed
    }
  }

  // Start typing
  typeWriter();

  // On click: remove glow and open link
  el.addEventListener("click", function() {
    el.classList.add("clicked"); // remove glow
    window.open("https://example.com", "_blank"); // change to your link
  });
});
