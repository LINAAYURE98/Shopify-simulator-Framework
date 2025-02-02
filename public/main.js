/******/ (() => { // webpackBootstrap
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
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
  
})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=main.js.map