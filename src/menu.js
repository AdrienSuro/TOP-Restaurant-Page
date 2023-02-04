export default function showMenu() {
  const mainContent = document.getElementById("maincontent");
  mainContent.innerHTML = "";
  const menuContent = document.createElement('p');
  menuContent.textContent = "Poulet Marbella, Coconut Soup, these are some of our specialities.";
  menuContent.classList.add("menuContent")
  mainContent.appendChild(menuContent);
};


