const menuButton = document.getElementById("menu-icon");
const navBar = document.querySelectorAll(".navBar");
// menuitems will be a Node List of the list items

menuButton.addEventListener("click", (e) => {
    if (menuButton.src.includes("images/menu.svg")) {
        navBar.style.display = 'flex';
        menuButton.src = "images/close-icon.svg";
    } else {
        menuitems.forEach((item) => item.classList.toggle("menu-item"));
        menuButton.src = "images/menu.svg"
    }
});