export default function initPage() {
  const mainDiv = document.getElementById("content");

  const restaurantTitle = document.createElement('h1');
  restaurantTitle.textContent = "La Kantine";
  restaurantTitle.classList.add("header");

  const restaurantDescription = document.createElement('p');
  restaurantDescription.textContent = "La Kantine c'est une cantine de Kalité : des produits frais, de la quantité, du goût, de la variété, de l'originalité !";
  restaurantDescription.classList.add("maincontent")

  const menuBar = document.createElement('div');
  menuBar.classList.add("menubar");
  const menuMenu = document.createElement('h2');
  menuMenu.textContent = "Menu";
  const menuConcept = document.createElement('h2');
  menuConcept.textContent = "Concept";
  const menuContact = document.createElement('h2');
  menuContact.textContent = "Contact";
  menuBar.append(menuMenu, menuConcept, menuContact)

  mainDiv.append(restaurantTitle, restaurantDescription, menuBar);
}