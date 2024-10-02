const currentyear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentyear;

const lastmodified = document.lastModified;
document.getElementById('lastmodified').textContent = "Last modified: " + lastmodified;