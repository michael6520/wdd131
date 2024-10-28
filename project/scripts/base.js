document.getElementById('hamburger-button').addEventListener('click', function () {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('open');
});

const collectionKey = 'userCollection'; // LocalStorage key for collection

function displayCollection() {
    const collectionList = document.getElementById('collection-list');
    const collection = JSON.parse(localStorage.getItem(collectionKey)) || [];

    collectionList.innerHTML = ''; // Clear previous collection items

    collection.forEach(card => {
        const li = document.createElement('li');
        li.classList.add('card');
        
        // Set up card content
        li.innerHTML = `
            <img src="${card.image}" alt="${card.pokemon}" class="card-image">
            <h2 class="card-title">${card.set} ${card.number} ${card.pokemon}</h2>
        `;

        // Append the card to the collection list
        collectionList.appendChild(li);
    });
}

// Run displayCollection on home page load
displayCollection();