console.log("Webpack does the job");
import showConcept from './concept.js';
import showMenu from './menu.js';
import showContact from './contact.js';

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

showConcept();
let menuTab = document.getElementById("menuTab");
let conceptTab = document.getElementById("conceptTab");
let contactTab = document.getElementById("contactTab");

menuTab.addEventListener("click", showMenu)
conceptTab.addEventListener("click", showConcept)
contactTab.addEventListener("click", showContact)

