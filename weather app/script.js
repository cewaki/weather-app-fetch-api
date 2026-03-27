document.addEventListener("DOMContentLoaded", () => {
  const weatherDiv = document.getElementById("weather");

  // Use your real API key here
  const apiKey = "2cf971b7e7eb1ab5a6c05479f07132ecf0";
  const city = "Nairobi"; // you can change this to any city

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
      weatherDiv.textContent =
        `Temperature in ${city}: ${data.main.temp}°C, ${data.weather[0].description}`;
    })
    .catch(error => {
      weatherDiv.textContent = "Error fetching weather data.";
      console.error(error);
    });
});
