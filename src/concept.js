export default function showConcept() {
  const mainContent = document.getElementById("maincontent");
  mainContent.innerHTML = "";
  const restaurantDescription = document.createElement('p');
  restaurantDescription.textContent = "La Kantine c'est une cantine de Kalité : des produits frais, de la quantité, du goût, de la variété, de l'originalité !";
  restaurantDescription.classList.add("restaurantDescription")
  mainContent.appendChild(restaurantDescription);
}