document.getElementById('hamburger-button').addEventListener('click', function () {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('open');
});

function displaySets(setsToDisplay) {
    const setList = document.getElementById('set-list');
    setList.innerHTML = ''; // Clear the list before displaying

    setsToDisplay.forEach(set => {
        const li = document.createElement('li');
        li.classList.add('set-card'); // Add a class for styling

        // Create an anchor link to the set's detail page
        const link = document.createElement('a');
        link.href = `pokedex.html?set=${set.set_number}`;
        link.classList.add('set-link');

        // Add the set's logo as an image element
        const img = document.createElement('img');
        img.src = set.image;
        img.alt = `${set.name} logo`;
        img.classList.add('set-logo');

        // Add the set name as a title
        const title = document.createElement('h2');
        title.textContent = set.name;
        title.classList.add('set-title');

        // Append image and title to the link, and the link to the list item
        link.appendChild(img);
        link.appendChild(title);
        li.appendChild(link);

        // Append the list item to the set list
        setList.appendChild(li);
    });
}

// Display all sets initially
displaySets(sets);