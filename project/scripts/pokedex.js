document.getElementById('hamburger-button').addEventListener('click', function () {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('open');
});

const cardList = document.getElementById('card-list');
const collectionKey = 'userCollection'; // LocalStorage key for collection

// Load collection from localStorage
let userCollection = JSON.parse(localStorage.getItem(collectionKey)) || [];

// Function to render the cards
function displayCards(cardsArray) {
    cardList.innerHTML = ''; // Clear previous cards

    cardsArray.forEach(card => {
        const li = document.createElement('li');
        li.classList.add('card');
        
        // Check if this card is already in the user's collection
        const isInCollection = userCollection.some(c => c.set === card.set && c.number === card.number);
        if (isInCollection) li.classList.add('selected');

        // Set up card content
        li.innerHTML = `
            <img src="${card.image}" alt="${card.pokemon}" class="card-image">
            <h2 class="card-title">${card.set} ${card.number} ${card.pokemon}</h2>
        `;
        
        // Handle click event for adding/removing card from collection
        li.addEventListener('click', () => toggleCardSelection(card, li));

        // Append the card to the list
        cardList.appendChild(li);
    });
}

// Function to add/remove card from collection
function toggleCardSelection(card, element) {
    const cardIndex = userCollection.findIndex(c => c.set === card.set && c.number === card.number);

    if (cardIndex > -1) {
        // Remove card if already in collection
        userCollection.splice(cardIndex, 1);
        element.classList.remove('selected');
    } else {
        // Add card if not in collection
        userCollection.push(card);
        element.classList.add('selected');
    }

    // Save updated collection to localStorage
    localStorage.setItem(collectionKey, JSON.stringify(userCollection));
}

// Function to get query parameters
function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Display only cards from the selected set
function displayCardsBySet() {
    const setNumber = getQueryParameter('set'); // Get the set number from the URL
    const filteredCards = cards.filter(card => card.set_number == setNumber); // Filter cards by set number

    const cardList = document.getElementById('card-list');
    cardList.innerHTML = ''; // Clear previous cards

    if (setNumber == null || setNumber === undefined) {
        displayCards(cards);
        return;
    }

    filteredCards.forEach(card => {
        const li = document.createElement('li');
        li.classList.add('card');

        // Set up card content
        li.innerHTML = `
            <img src="${card.image}" alt="${card.pokemon}" class="card-image">
            <h2 class="card-title">${card.set} ${card.number} ${card.pokemon}</h2>
        `;

        // Append the card to the list
        cardList.appendChild(li);
    });
}

// Run the display function when the page loads
displayCardsBySet();