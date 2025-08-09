// Texts for typewriters
const typewriter1Text = "Rashid Farhad";
const typewriter2Text = "…سەردانمان بکەن لە تێلێگرام";
const typewriter2Link = "https://t.me/rashidfarhad";

// Typing speeds
const speed1 = 80;
const speed2 = 80;

// Typewriter function
function typewriter(element, text, speed, callback) {
  let index = 0;
  function type() {
    element.textContent = text.slice(0, index++);
    if (index <= text.length) {
      setTimeout(type, speed);
    } else if (callback) {
      callback();
    }
  }
  type();
}

// Run typewriters
typewriter(document.getElementById("type1"), typewriter1Text, speed1, () => {
  typewriter(document.getElementById("type2"), typewriter2Text, speed2, () => {
    // Make second text clickable (no underline)
    const t2 = document.getElementById("type2");
    const link = document.createElement("a");
    link.href = typewriter2Link;
    link.target = "_blank";
    link.style.color = "inherit";
    link.style.textDecoration = "none"; // removed underline
    link.textContent = t2.textContent;
    t2.textContent = "";
    t2.appendChild(link);
  });
});
