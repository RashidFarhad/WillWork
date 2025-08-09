// First typewriter text
const typewriter1Text = "Rashid Farhad";

// Second typewriter text (Kurdish text only)
const typewriter2Text = "…سەردانمان بکەن لە تێلێگرام";
const typewriter2Link = "https://t.me/rashidfarhad";

// Settings
const speed1 = 80;   // ms per char for first
const speed2 = 80;   // ms per char for second
const pause = 1500;  // pause before deleting (if looped)

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

// Run first typewriter
typewriter(document.getElementById("type1"), typewriter1Text, speed1, () => {
  // Run second typewriter after first finishes
  typewriter(document.getElementById("type2"), typewriter2Text, speed2, () => {
    // Once second is done, wrap it in a link
    const t2 = document.getElementById("type2");
    const link = document.createElement("a");
    link.href = typewriter2Link;
    link.target = "_blank";
    link.style.color = "inherit";
    link.style.textDecoration = "underline";
    link.textContent = t2.textContent;
    t2.textContent = "";
    t2.appendChild(link);
  });
});
