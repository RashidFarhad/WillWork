// typewriter.js

// Text you want to type
const text = "دەست پێکردنی ناوێنەکان..."; 
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100); // typing speed
  }
}

window.onload = typeWriter;
