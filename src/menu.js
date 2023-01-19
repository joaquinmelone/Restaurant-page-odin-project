/* MAIN DOM */
const temp = document.createElement("div");

export function menuCreate() {
    const main = document.getElementById("main-container");

    const menuTemp = document.createElement("div");
    menuTemp.classList.add("menu-temp");

    const menuTitle = document.createElement("div");
    menuTitle.classList.add("menu-title");
    const menuText = document.createElement("div");
    menuText.classList.add("menu-text");
    
    menuTitle.textContent = "Menu"
    menuText.textContent = "Our menu consist of Pizza, we are not very creative as you can see";

    menuTemp.appendChild(menuTitle);
    menuTemp.appendChild(menuText);

    main.appendChild(menuTemp);
}

export function menuDelete() {
    const main = document.getElementById("main-container");

    if (main) {
        while (main.firstChild) {
            main.removeChild(main.firstChild);
        }
    }   
}