const menuIcon = document.getElementById("menu-icon");

menuIcon.addEventListener("click", (e) => {
    // Pick menu and display
    const menuSelector = document.querySelector(".menu");
    if (menuIcon.src.includes("images/menu.svg")) {
        // Displays the menu
        menuSelector.style.display = "flex";
        // Update the src image to the close button
        menuIcon.src = "images/close.svg"
    } else {
        // Hides the menu
        menuSelector.style.display = "none";
        // Update the src image to the menu button
        menuIcon.src = "images/menu.svg"
    }
})

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
{
    templeName: "Madrid Spain Temple",
    location: "Madrid, Spain",
    dedicated: "1999, March, 21",
    area: 45800,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/_temp/056-Madrid-Spain-Temple.jpg"
  },
    {
    templeName: "Caracas Venezuela Temple",
    location: "Caracas, Venezuela",
    dedicated: "2000, August, 20",
    area: 15332,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/_temp/096-Caracas-Venezuela-Temple.jpg"
  },
  {
    templeName: "The Hague Netherlands Temple",
    location: "The Hague, Netherlands",
    dedicated: "2002, September, 8",
    area: 14447,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/the-hague-netherlands-temple/the-hague-netherlands-temple-40883-main.jpg"
  }
];

temples.forEach((temple) => {
    const templeContainer = document.createElement("div");
    templeContainer.classList.add("temple");

    const templeImage = document.createElement("img");
    templeImage.src = temple.imageUrl;
    templeImage.alt = `${temple.templeName} image`;

    const templeName = document.createElement("h3");
    templeName.textContent = temple.templeName;

    const templeLocation = document.createElement("p");
    templeLocation.innerHTML = `<b>Location:</b> ${temple.location}`;

    const templeDedicated = document.createElement("p");
    templeDedicated.innerHTML = `<b>Dedicated:</b> ${temple.dedicated}`;

    const templeArea = document.createElement("p");
    templeArea.innerHTML = `<b>Area:</b> ${temple.area} sq ft`;


    templeContainer.appendChild(templeName);
    templeContainer.appendChild(templeLocation);
    templeContainer.appendChild(templeDedicated);
    templeContainer.appendChild(templeArea);
    templeContainer.appendChild(templeImage);

  document.querySelector(".grid-home").appendChild(templeContainer);
});


/* Filtered Menu */

// Old Temples
document.getElementById("old").addEventListener("click", () => {
  document.querySelector(".grid-home").innerHTML = "";
  const filteredTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year < 1900;
  });
  
  filteredTemples.forEach((temple) => {
    const templeContainer = document.createElement("div");
    templeContainer.classList.add("temple");

    const templeImage = document.createElement("img");
    templeImage.src = temple.imageUrl;
    templeImage.alt = `${temple.templeName} image`;

    const templeName = document.createElement("h3");
    templeName.textContent = temple.templeName;

    const templeLocation = document.createElement("p");
    templeLocation.innerHTML = `<b>Location:</b> ${temple.location}`;

    const templeDedicated = document.createElement("p");
    templeDedicated.innerHTML = `<b>Dedicated:</b> ${temple.dedicated}`;

    const templeArea = document.createElement("p");
    templeArea.innerHTML = `<b>Area:</b> ${temple.area} sq ft`;

    templeContainer.appendChild(templeName);
    templeContainer.appendChild(templeLocation);
    templeContainer.appendChild(templeDedicated);
    templeContainer.appendChild(templeArea);
    templeContainer.appendChild(templeImage);

    document.querySelector(".grid-home").appendChild(templeContainer);
});
});

// New Temples
document.getElementById("new").addEventListener("click", () => {
  document.querySelector(".grid-home").innerHTML = "";
  const filteredTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year >= 2000;
  });
  
  filteredTemples.forEach((temple) => {
    const templeContainer = document.createElement("div");
    templeContainer.classList.add("temple");

    const templeImage = document.createElement("img");
    templeImage.src = temple.imageUrl;
    templeImage.alt = `${temple.templeName} image`;

    const templeName = document.createElement("h3");
    templeName.textContent = temple.templeName;

    const templeLocation = document.createElement("p");
    templeLocation.innerHTML = `<b>Location:</b> ${temple.location}`;

    const templeDedicated = document.createElement("p");
    templeDedicated.innerHTML = `<b>Dedicated:</b> ${temple.dedicated}`;

    const templeArea = document.createElement("p");
    templeArea.innerHTML = `<b>Area:</b> ${temple.area} sq ft`;

    templeContainer.appendChild(templeName);
    templeContainer.appendChild(templeLocation);
    templeContainer.appendChild(templeDedicated);
    templeContainer.appendChild(templeArea);
    templeContainer.appendChild(templeImage);

    document.querySelector(".grid-home").appendChild(templeContainer);
});
});

// Large Temples
document.getElementById("large").addEventListener("click", () => {
  document.querySelector(".grid-home").innerHTML = "";
  const filteredTemples = temples.filter(temple => temple.area > 90000);
  
  filteredTemples.forEach((temple) => {
    const templeContainer = document.createElement("div");
    templeContainer.classList.add("temple");

    const templeImage = document.createElement("img");
    templeImage.src = temple.imageUrl;
    templeImage.alt = `${temple.templeName} image`;

    const templeName = document.createElement("h3");
    templeName.textContent = temple.templeName;

    const templeLocation = document.createElement("p");
    templeLocation.innerHTML = `<b>Location:</b> ${temple.location}`;

    const templeDedicated = document.createElement("p");
    templeDedicated.innerHTML = `<b>Dedicated:</b> ${temple.dedicated}`;

    const templeArea = document.createElement("p");
    templeArea.innerHTML = `<b>Area:</b> ${temple.area} sq ft`;

    templeContainer.appendChild(templeName);
    templeContainer.appendChild(templeLocation);
    templeContainer.appendChild(templeDedicated);
    templeContainer.appendChild(templeArea);
    templeContainer.appendChild(templeImage);

    document.querySelector(".grid-home").appendChild(templeContainer);
});
});

// Small Temples
document.getElementById("small").addEventListener("click", () => {
  document.querySelector(".grid-home").innerHTML = "";
  const filteredTemples = temples.filter(temple => temple.area <= 10000);
  
  filteredTemples.forEach((temple) => {
    const templeContainer = document.createElement("div");
    templeContainer.classList.add("temple");

    const templeImage = document.createElement("img");
    templeImage.src = temple.imageUrl;
    templeImage.alt = `${temple.templeName} image`;

    const templeName = document.createElement("h3");
    templeName.textContent = temple.templeName;

    const templeLocation = document.createElement("p");
    templeLocation.innerHTML = `<b>Location:</b> ${temple.location}`;

    const templeDedicated = document.createElement("p");
    templeDedicated.innerHTML = `<b>Dedicated:</b> ${temple.dedicated}`;

    const templeArea = document.createElement("p");
    templeArea.innerHTML = `<b>Area:</b> ${temple.area} sq ft`;

    templeContainer.appendChild(templeName);
    templeContainer.appendChild(templeLocation);
    templeContainer.appendChild(templeDedicated);
    templeContainer.appendChild(templeArea);
    templeContainer.appendChild(templeImage);

    document.querySelector(".grid-home").appendChild(templeContainer);
});
});

// All Temples
document.getElementById("home").addEventListener("click", () => {
  document.querySelector(".grid-home").innerHTML = "";
  
  temples.forEach((temple) => {
    const templeContainer = document.createElement("div");
    templeContainer.classList.add("temple");

    const templeImage = document.createElement("img");
    templeImage.src = temple.imageUrl;
    templeImage.alt = `${temple.templeName} image`;

    const templeName = document.createElement("h3");
    templeName.textContent = temple.templeName;

    const templeLocation = document.createElement("p");
    templeLocation.innerHTML = `<b>Location:</b> ${temple.location}`;

    const templeDedicated = document.createElement("p");
    templeDedicated.innerHTML = `<b>Dedicated:</b> ${temple.dedicated}`;

    const templeArea = document.createElement("p");
    templeArea.innerHTML = `<b>Area:</b> ${temple.area} sq ft`;

    templeContainer.appendChild(templeName);
    templeContainer.appendChild(templeLocation);
    templeContainer.appendChild(templeDedicated);
    templeContainer.appendChild(templeArea);
    templeContainer.appendChild(templeImage);

    document.querySelector(".grid-home").appendChild(templeContainer);
});
});