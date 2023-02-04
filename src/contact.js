export default function showContact() {
  const mainContent = document.getElementById("maincontent");
  mainContent.innerHTML = "";
  const menuContent = document.createElement('p');
  menuContent.textContent = "My name's Adrien. I'm a Fullstack Developer but also a creative cook.";
  menuContent.classList.add("menuContent")
  mainContent.appendChild(menuContent);
};