const current_year = new Date().getFullYear();
document.getElementById('current-year').textContent = current_year;

const last_modified = document.lastModified;
document.getElementById('last-modified').textContent = "Last modified: " + last_modified;

function calculate_wind_chill(temperature, wind_speed) {
    if (temperature <= 10 && wind_speed > 4.8) {
        const wind_chill = 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(wind_speed, 0.16)) + (0.3965 * temperature * Math.pow(wind_speed, 0.16));
        document.getElementById('wind-chill').textContent = `${wind_chill.toFixed(2)} °C`;
    } else {
        document.getElementById('wind-chill').textContent = 'N/A';
    }
}

const temperature = 32;
const wind_speed = 14;

calculate_wind_chill(temperature, wind_speed);