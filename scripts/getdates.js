const current_year = new Date().getFullYear();
document.getElementById('current-year').textContent = current_year;

const last_modified = document.lastModified;
document.getElementById('last-modified').textContent = "Last modified: " + last_modified;