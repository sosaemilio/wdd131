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
        templeName: "Madrid Spain",
        location: "Madrid, Spain",
        dedicated: "1999, March, 19",
        area: 45800,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/_temp/056-Madrid-Spain-Temple.jpg"
    },
    {
        templeName: "Caracas Venezuela",
        location: "Caracas, Venezuela",
        dedicated: "2017, May, 21",
        area: 44175,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/_temp/096-Caracas-Venezuela-Temple.jpg"
    },
    {
        templeName: "Paris France",
        location: "Paris, France",
        dedicated: "2000, August, 20",
        area: 15332,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2056-main.jpg"
    }
    // Add more temple objects here...
];

let mainBody = document.getElementById('grid-home');
temples.forEach(temple => {
    mainBody.innerHTML +=
        `<div class="card">
        <h3>${temple.templeName}</h3>
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Size: ${temple.area}</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    </div>`;
});

// Large Template menu item
document.getElementById("large").addEventListener("click", (e) => {
    // Filter Temples
    let filteredTemples = temples.filter((largeTemple) => largeTemple.area > 90000);

    mainBody.innerHTML = "";

    // Add Temples
    filteredTemples.forEach(temple => {
        mainBody.innerHTML +=
            `<div class="card">
            <h3>${temple.templeName}</h3>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Size: ${temple.area}</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        </div>`;
    });
});

// Small template menu item
document.getElementById("small").addEventListener("click", (e) => {
    // Filter Temples
    let filteredTemples = temples.filter((largeTemple) => largeTemple.area < 100000);
    mainBody.innerHTML = "";

    // Add Temples
    filteredTemples.forEach(temple => {
        mainBody.innerHTML +=
            `<div class="card">
            <h3>${temple.templeName}</h3>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Size: ${temple.area}</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        </div>`;
    });
});

// Home template menu item
document.getElementById("home").addEventListener("click", (e) => {
    mainBody.innerHTML = "";
    temples.forEach(temple => {
        mainBody.innerHTML +=
            `<div class="card">
            <h3>${temple.templeName}</h3>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Size: ${temple.area}</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        </div>`;
    });
});

// Old template menu item
document.getElementById("old").addEventListener("click", (e) => {
    // Filter Temples
    let filteredTemples = temples.filter((temple) => {
        let templeDate = new Date(temple.dedicated);
        return templeDate.getFullYear() < 1900;
    });
    mainBody.innerHTML = "";

    // Add Temples
    filteredTemples.forEach(temple => {
        mainBody.innerHTML +=
            `<div class="card">
            <h3>${temple.templeName}</h3>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Size: ${temple.area}</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        </div>`;
    });
});

// Old template menu item
document.getElementById("new").addEventListener("click", (e) => {
    // Filter Temples
    let filteredTemples = temples.filter((temple) => {
        let templeDate = new Date(temple.dedicated);
        return templeDate.getFullYear() > 2000;
    });
    mainBody.innerHTML = "";

    // Add Temples
    filteredTemples.forEach(temple => {
        mainBody.innerHTML +=
            `<div class="card">
            <h3>${temple.templeName}</h3>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Size: ${temple.area}</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        </div>`;
    });
});
