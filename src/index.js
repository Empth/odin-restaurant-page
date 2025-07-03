import "./style.css";
import "./index.html";
import homeMenu from "./home.js";
import foodMenu from "./menu.js";
import contact from "./contact.js";
// import odinImage from "./odin.png";

//console.log(greeting);

//alert("hi");

//homeMenu();
//foodMenu();
//contact();


function clearContent() {
    const contentDiv = document.querySelector("#content");
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }
}

function addEventListeners() {
    const homeButton = document.querySelector("button.home");
    const menuButton = document.querySelector("button.menu");
    const contactButton = document.querySelector("button.contact");
    homeButton.addEventListener("click", () => {
        clearContent();
        homeMenu();
    });
    menuButton.addEventListener("click", () => {
        clearContent();
        foodMenu();
    });
    contactButton.addEventListener("click", () => {
        clearContent();
        contact();
    });
}

addEventListeners();
homeMenu();

