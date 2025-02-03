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
    header.classList.add('site-header--scrolled');
  } else {
    header.classList.remove('site-header--scrolled');
  }
});
  

  document.addEventListener('DOMContentLoaded', function() {
    const viewAllButton = document.querySelector('[data-view-all]');
    const productList = document.querySelector('[data-product-list]');
    const products = productList.querySelectorAll('.product-card');

    if (window.innerWidth >= 1024) {
      products.forEach((product, index) => {
        if (index >= 4) {
          product.classList.add('product-card--hidden');
        }
      });
    }
  
    if (viewAllButton && productList) {
      viewAllButton.addEventListener('click', function() {
        const isExpanded = viewAllButton.getAttribute('aria-expanded') === 'true';
        const hiddenProducts = productList.querySelectorAll('.product-card--hidden');
  
        if (!isExpanded) {
          hiddenProducts.forEach(product => {
            product.classList.remove('product-card--hidden');
          });
          viewAllButton.setAttribute('aria-expanded', 'true');
          viewAllButton.textContent = 'Show Less';
        } else {
          products.forEach((product, index) => {
            if (index >= 4) {
              product.classList.add('product-card--hidden');
            }
          });
          viewAllButton.setAttribute('aria-expanded', 'false');
          viewAllButton.textContent = 'View All';
        }
      });
    }
  
    let touchstartX = 0;
    let touchendX = 0;
  
    if (window.innerWidth <= 1024) {
      productList.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
      });
  
      productList.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX;
        handleSwipe();
      });
    }
  
    function handleSwipe() {
      const SWIPE_THRESHOLD = 50;
      const productListWidth = productList.offsetWidth;
      const scrollDistance = Math.abs(touchstartX - touchendX);
  
      if (scrollDistance > SWIPE_THRESHOLD) {
        if (touchstartX > touchendX) {
          productList.scrollBy({ left: productListWidth, behavior: 'smooth' });
        } else {
          productList.scrollBy({ left: -productListWidth, behavior: 'smooth' });
        }
      }
    }
});
  
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const body = document.body;

  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger--active');
    mobileMenu.classList.toggle('mobile-menu--active');
    body.classList.toggle('body--menu-open');
  });

  const mobileLinks = document.querySelectorAll('.mobile-menu__link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('hamburger--active');
      mobileMenu.classList.remove('mobile-menu--active');
      body.classList.remove('body--menu-open');
    });
  });
});