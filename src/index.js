import { homeCreate, homeDelete } from './home.js'
import { menuCreate, menuDelete } from './menu.js'
import { contactCreate, contactDelete } from './contact.js'

/* CONTENT */

const content = document.getElementById("content");

/* HEADER */

const header = document.createElement("header");

/* MAIN */

const main = document.createElement("main");
main.setAttribute("id", "main-container");

/* FOOTER DOM */
const footer = document.createElement("footer");
footer.textContent = "The Odin Project 2023";

/* BUTTONS */

const homeButton = document.createElement("button");
const menuButton = document.createElement("button");
const contactButton = document.createElement("button");

homeButton.textContent = "Home";
menuButton.textContent = "Menu";
contactButton.textContent = "Contact";

header.appendChild(homeButton);
header.appendChild(menuButton);
header.appendChild(contactButton);

content.appendChild(header);
content.appendChild(main);
content.appendChild(footer);

homeCreate();

homeButton.addEventListener("click", () => {
    contactDelete();
    menuDelete();
    homeCreate();
})

menuButton.addEventListener("click", () => {
    homeDelete();
    contactDelete();
    menuCreate();
})

contactButton.addEventListener("click", () => {
    homeDelete();
    menuDelete();
    contactCreate();
})