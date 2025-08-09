// First typewriter text
const typewriter1Texts = ["Rashid Farhad"];

// Second typewriter text (with clickable link)
const typewriter2Texts = [
  '…<a href="https://t.me/rashidfarhad" target="_blank" style="color: inherit; text-decoration: underline;">سەردانمان بکەن لە تێلێگرام</a>'
];

// Settings
const settings1 = { speed: 80, pause: 1500, loop: false };
const settings2 = { speed: 80, pause: 1500, loop: false };

function runTypewriter(elementId, texts, speed, pause, loop) {
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const element = document.getElementById(elementId);

  function type() {
    const currentText = texts[textIndex];
    // Keep HTML tags intact while typing
    const plainText = currentText.replace(/<[^>]*>?/gm, "");
    if (!isDeleting) {
      element.innerHTML = currentText.slice(0, charIndex++);
      if (charIndex > currentText.length) {
        if (loop || textIndex < texts.length - 1) {
          isDeleting = true;
          setTimeout(type, pause);
          return;
        }
      }
    } else {
      element.innerHTML = currentText.slice(0, charIndex--);
      if (charIndex < 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }
    }
    setTimeout(type, isDeleting ? speed / 2 : speed);
  }

  type();
}

// Start typewriters
runTypewriter("type1", typewriter1Texts, settings1.speed, settings1.pause, settings1.loop);
runTypewriter("type2", typewriter2Texts, settings2.speed, settings2.pause, settings2.loop);
