/* MAIN DOM */


export function homeCreate() {
    const main = document.getElementById("main-container");

    const homeTemp = document.createElement("div");
    homeTemp.classList.add("home-temp");

    const homeTitle = document.createElement("div");
    homeTitle.classList.add("home-title");
    const homeText = document.createElement("div");
    homeText.classList.add("home-text");
    
    homeTitle.textContent = "Welcome to our restaurant!"
    homeText.textContent = "The Longwood Medical Area in Boston, Massachusetts, renowned for its medical and academic institutions, is the site of The Longwood Galleria. A collection of nearly 20 eateries, shops, and services, The Longwood Galleria uniquely blends a relaxing town atmosphere with sophisticated urban convenience.";

    homeTemp.appendChild(homeTitle);
    homeTemp.appendChild(homeText);

    main.appendChild(homeTemp);
}

export function homeDelete() {
    const main = document.getElementById("main-container");

    if (main) {
        while (main.firstChild) {
            main.removeChild(main.firstChild);
        }
    }   
}
