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