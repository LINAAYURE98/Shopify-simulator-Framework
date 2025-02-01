document.addEventListener("DOMContentLoaded", function () {
    const marqueeText = document.querySelector("#marquee-text .marquee-content");
    const text = document.querySelector("#marquee-text").getAttribute("data-text");

    if (text) {
        const repeatedText = Array(10)
            .fill(`<span class="marquee-icon">✦</span> <span class="marquee-text">${text}</span>`)
            .join(" ");

        marqueeText.innerHTML = repeatedText;
    }
});
