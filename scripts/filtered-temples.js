const current_year = new Date().getFullYear();
document.getElementById('current-year').textContent = current_year;

const last_modified = document.lastModified;
document.getElementById('last-modified').textContent = "Last modified: " + last_modified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

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
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-daylight-1416668-wallpaper.jpg"
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
	  templeName: "San Diego California",
	  location: "San Diego, California",
	  dedicated: "1993, April, 25",
	  area: 72000,
	  imageUrl: 
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/400x250/san-diego-temple-765109-wallpaper.jpg"
	},
	{
	  templeName: "Rome Italy",
	  location: "Rome, Italy",
	  dedicated: "2019, March, 10",
	  area: 41010,
	  imageUrl: 
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/2-Rome-Temple-2190090.jpg"
	},
	{
	  templeName: "Taipei Taiwan",
	  location: "Taipei, Taiwan",
	  dedicated: "1984, November, 17",
	  area: 9945,
	  imageUrl: 
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/taipei-taiwan/400x250/taipei-taiwan-temple-lds-1031626-wallpaper.jpg"
	},
];
  
function renderImages(temples) {
	const gallery = document.getElementById("temple-gallery");
    gallery.innerHTML = "";

    temples.forEach(temple => {
        const figure = document.createElement("figure");
        figure.className = "image-figure";

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
		img.loading = "lazy";

        const caption = document.createElement("figcaption");

        const h1 = document.createElement("h3");
        h1.textContent = temple.templeName;
        caption.appendChild(h1);

        const locationParagraph = document.createElement("p");
        locationParagraph.textContent = `Location: ${temple.location}`;
        caption.appendChild(locationParagraph);

        const dedicatedParagraph = document.createElement("p");
        dedicatedParagraph.textContent = `Dedicated: ${temple.dedicated}`;
        caption.appendChild(dedicatedParagraph);

        const sizeParagraph = document.createElement("p");
        sizeParagraph.textContent = `Size: ${temple.area} sq. ft.`;
        caption.appendChild(sizeParagraph);

        figure.appendChild(img);
        figure.appendChild(caption);

        gallery.appendChild(figure);
    });
}

renderImages(temples);
const title = document.getElementById("title");
title.textContent = "Home"

function filterImages(criteria, event) {
    event.preventDefault();

    let filteredImages = temples;

    if (criteria === 'small') {
        filteredImages = temples.filter(temple => temple.area < 10000); // Define 'small' as area < 20,000
    } else if (criteria === 'large') {
        filteredImages = temples.filter(temple => temple.area > 90000); // Define 'large' as area >= 20,000
    } else if (criteria === 'old') {
        filteredImages = temples.filter(temple => new Date(temple.dedicated) < new Date('1900-01-01')); // Old temples before 2000
    } else if (criteria === 'new') {
        filteredImages = temples.filter(temple => new Date(temple.dedicated) >= new Date('2000-01-01')); // New temples from 2000 onwards
    }

    renderImages(filteredImages);

	const title = document.getElementById("title");
	title.textContent = criteria.charAt(0).toUpperCase() + criteria.slice(1);
}