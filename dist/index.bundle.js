/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/concept.js":
/*!************************!*\
  !*** ./src/concept.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showConcept)
/* harmony export */ });
function showConcept() {
  const mainContent = document.getElementById("maincontent");
  mainContent.innerHTML = "";
  const restaurantDescription = document.createElement('p');
  restaurantDescription.textContent = "La Kantine c'est une cantine de Kalité : des produits frais, de la quantité, du goût, de la variété, de l'originalité !";
  restaurantDescription.classList.add("restaurantDescription")
  mainContent.appendChild(restaurantDescription);
}

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showContact)
/* harmony export */ });
function showContact() {
  const mainContent = document.getElementById("maincontent");
  mainContent.innerHTML = "";
  const menuContent = document.createElement('p');
  menuContent.textContent = "My name's Adrien. I'm a Fullstack Developer but also a creative cook.";
  menuContent.classList.add("menuContent")
  mainContent.appendChild(menuContent);
};

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showMenu)
/* harmony export */ });
function showMenu() {
  const mainContent = document.getElementById("maincontent");
  mainContent.innerHTML = "";
  const menuContent = document.createElement('p');
  menuContent.textContent = "Poulet Marbella, Coconut Soup, these are some of our specialities.";
  menuContent.classList.add("menuContent")
  mainContent.appendChild(menuContent);
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _concept_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./concept.js */ "./src/concept.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
console.log("Webpack does the job");




const mainDiv = document.getElementById("content");

const restaurantTitle = document.createElement('h1');
restaurantTitle.textContent = "La Kantine";
restaurantTitle.classList.add("header");

const menuBar = document.createElement('div');
menuBar.classList.add("menubar");
const menuMenu = document.createElement('h2');
menuMenu.textContent = "Menu";
menuMenu.setAttribute("id", "menuTab")
const menuConcept = document.createElement('h2');
menuConcept.textContent = "Concept";
menuConcept.setAttribute("id", "conceptTab")
const menuContact = document.createElement('h2');
menuContact.textContent = "Contact";
menuContact.setAttribute("id", "contactTab");
menuBar.append(menuMenu, menuConcept, menuContact);

mainDiv.append(menuBar, restaurantTitle);

const mainContent = document.createElement('div');
mainContent.setAttribute("id", "maincontent");
mainDiv.appendChild(mainContent);

(0,_concept_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
let menuTab = document.getElementById("menuTab");
let conceptTab = document.getElementById("conceptTab");
let contactTab = document.getElementById("contactTab");

menuTab.addEventListener("click", _menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])
conceptTab.addEventListener("click", _concept_js__WEBPACK_IMPORTED_MODULE_0__["default"])
contactTab.addEventListener("click", _contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNQZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1BlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztVQ1BBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ3VDO0FBQ047QUFDTTs7QUFFdkM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdURBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDLGdEQUFRO0FBQzFDLHFDQUFxQyxtREFBVztBQUNoRCxxQ0FBcUMsbURBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbmNlcHQuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG93Q29uY2VwdCgpIHtcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5jb250ZW50XCIpO1xuICBtYWluQ29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICBjb25zdCByZXN0YXVyYW50RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHJlc3RhdXJhbnREZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiTGEgS2FudGluZSBjJ2VzdCB1bmUgY2FudGluZSBkZSBLYWxpdMOpIDogZGVzIHByb2R1aXRzIGZyYWlzLCBkZSBsYSBxdWFudGl0w6ksIGR1IGdvw7t0LCBkZSBsYSB2YXJpw6l0w6ksIGRlIGwnb3JpZ2luYWxpdMOpICFcIjtcbiAgcmVzdGF1cmFudERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJyZXN0YXVyYW50RGVzY3JpcHRpb25cIilcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQocmVzdGF1cmFudERlc2NyaXB0aW9uKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG93Q29udGFjdCgpIHtcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5jb250ZW50XCIpO1xuICBtYWluQ29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICBjb25zdCBtZW51Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbWVudUNvbnRlbnQudGV4dENvbnRlbnQgPSBcIk15IG5hbWUncyBBZHJpZW4uIEknbSBhIEZ1bGxzdGFjayBEZXZlbG9wZXIgYnV0IGFsc28gYSBjcmVhdGl2ZSBjb29rLlwiO1xuICBtZW51Q29udGVudC5jbGFzc0xpc3QuYWRkKFwibWVudUNvbnRlbnRcIilcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUNvbnRlbnQpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG93TWVudSgpIHtcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5jb250ZW50XCIpO1xuICBtYWluQ29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICBjb25zdCBtZW51Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbWVudUNvbnRlbnQudGV4dENvbnRlbnQgPSBcIlBvdWxldCBNYXJiZWxsYSwgQ29jb251dCBTb3VwLCB0aGVzZSBhcmUgc29tZSBvZiBvdXIgc3BlY2lhbGl0aWVzLlwiO1xuICBtZW51Q29udGVudC5jbGFzc0xpc3QuYWRkKFwibWVudUNvbnRlbnRcIilcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUNvbnRlbnQpO1xufTtcblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnNvbGUubG9nKFwiV2VicGFjayBkb2VzIHRoZSBqb2JcIik7XG5pbXBvcnQgc2hvd0NvbmNlcHQgZnJvbSAnLi9jb25jZXB0LmpzJztcbmltcG9ydCBzaG93TWVudSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IHNob3dDb250YWN0IGZyb20gJy4vY29udGFjdC5qcyc7XG5cbmNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbmNvbnN0IHJlc3RhdXJhbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5yZXN0YXVyYW50VGl0bGUudGV4dENvbnRlbnQgPSBcIkxhIEthbnRpbmVcIjtcbnJlc3RhdXJhbnRUaXRsZS5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuXG5jb25zdCBtZW51QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5tZW51QmFyLmNsYXNzTGlzdC5hZGQoXCJtZW51YmFyXCIpO1xuY29uc3QgbWVudU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xubWVudU1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbm1lbnVNZW51LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudVRhYlwiKVxuY29uc3QgbWVudUNvbmNlcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xubWVudUNvbmNlcHQudGV4dENvbnRlbnQgPSBcIkNvbmNlcHRcIjtcbm1lbnVDb25jZXB0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29uY2VwdFRhYlwiKVxuY29uc3QgbWVudUNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xubWVudUNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbm1lbnVDb250YWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdFRhYlwiKTtcbm1lbnVCYXIuYXBwZW5kKG1lbnVNZW51LCBtZW51Q29uY2VwdCwgbWVudUNvbnRhY3QpO1xuXG5tYWluRGl2LmFwcGVuZChtZW51QmFyLCByZXN0YXVyYW50VGl0bGUpO1xuXG5jb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWFpbkNvbnRlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluY29udGVudFwiKTtcbm1haW5EaXYuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQpO1xuXG5zaG93Q29uY2VwdCgpO1xubGV0IG1lbnVUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVUYWJcIik7XG5sZXQgY29uY2VwdFRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uY2VwdFRhYlwiKTtcbmxldCBjb250YWN0VGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0VGFiXCIpO1xuXG5tZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93TWVudSlcbmNvbmNlcHRUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dDb25jZXB0KVxuY29udGFjdFRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0NvbnRhY3QpXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==