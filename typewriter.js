function typeWriter(elementId, text, speed, isLink = false, linkHref = "") {
    let index = 0;
    const element = document.getElementById(elementId);
    element.classList.add("typewriter");

    // Create element for text
    let target;
    if (isLink) {
        target = document.createElement("a");
        target.href = linkHref;
        target.target = "_blank";
        target.style.textDecoration = "none";
        target.style.color = "inherit";
    } else {
        target = document.createElement("span");
    }
    element.appendChild(target);

    // Smooth fade-in when typing starts
    requestAnimationFrame(() => {
        element.classList.add("active");
    });

    function type() {
        if (index < text.length) {
            target.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    type();
}

document.addEventListener("DOMContentLoaded", () => {
    typeWriter("typewriter1", "Rashid Farhad", 100);
    typeWriter("typewriter2", "… پەیوەندیکردن لە رێگەی تێلێگرام..." , 100, true, "https://t.me/rashidfarhad");
     typeWriter("typewriter3", "… پەیوەندیکردن لە رێگەی ئێمەیل...", 100, true, "mailto:rashidfarhad122@gmail.com");

});



