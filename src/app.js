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

window.addEventListener('scroll', function() {
    const header = document.querySelector('.site-header');
    if (window.scrollY > 0) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  });
  