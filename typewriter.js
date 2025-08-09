function typeWriter(text, elementId, delay = 100) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            document.getElementById(elementId).innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, delay);
        }
    }
    typing();
}

// Start both together
window.onload = function() {
    typeWriter("Rashid Farhad", "typewriter1", 100);
    typeWriter("سەردانمان بکەن لە تێلێگرام", "typewriter2", 100);
};
