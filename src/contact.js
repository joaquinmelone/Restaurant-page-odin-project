/* MAIN DOM */
const temp = document.createElement("div");

export function contactCreate() {
    const main = document.getElementById("main-container");

    const contactTemp = document.createElement("div");
    contactTemp.classList.add("contact-temp");

    const contactTitle = document.createElement("div");
    contactTitle.classList.add("contact-title");
    const contactText = document.createElement("div");
    contactText.classList.add("contact-text");
    
    contactTitle.textContent = "Contact"
    contactText.textContent = "Contact us at our mail: contact@restaurant.com";

    contactTemp.appendChild(contactTitle);
    contactTemp.appendChild(contactText);

    main.appendChild(contactTemp);
}

export function contactDelete() {
    const main = document.getElementById("main-container");

    if (main) {
        while (main.firstChild) {
            main.removeChild(main.firstChild);
        }
    }
}