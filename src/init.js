export default function initPage() {
  console.log("Inside initPage");
  const mainDiv = document.getElementById("content");
  const restaurantTitle = document.createElement('h1');
  restaurantTitle.textContent = "La Kantine";
  const restaurantDescription = document.createElement('p');
  restaurantDescription.textContent = "La Kantine c'est une cantine de Kalité : des produits frais, de la quantité, du goût, de la variété, de l'originalité !";
  mainDiv.append(restaurantTitle, restaurantDescription);
}