const menuButton = document.getElementById("menu-icon");
const navBar = document.querySelector(".navBar");
// menuitems will be a Node List of the list items

menuButton.addEventListener("click", (e) => {
    if (menuButton.src.includes("images/menu.svg")) {
        navBar.style.display = 'flex';
        menuButton.src = "images/close-icon.svg";
    } else {
        navBar.style.display = 'none';
        menuButton.src = "images/menu.svg"
    }
});