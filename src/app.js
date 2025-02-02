document.addEventListener("DOMContentLoaded", function () {
  const marquees = document.querySelectorAll(".marquee");

  marquees.forEach(function (marquee) {
      const marqueeText = marquee.querySelector(".marquee-content"); 
      const text = marquee.getAttribute("data-text"); 

      if (text && marqueeText) {  

          const repeatedText = Array(10).fill(`<span class="marquee-icon">✦</span> <span class="marquee-text">${text}</span>`).join(" ");
          marqueeText.innerHTML = repeatedText;
      }
  });
});


window.addEventListener('scroll', function() {
    const header = document.querySelector('.site-header');
    if (window.scrollY > 0) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  });
  