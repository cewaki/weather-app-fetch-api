Weather App (Fetch API) – Beginner Toolkit

1. Title & Objective
This project demonstrates how to build a simple weather app using the Fetch API.  
Goal: Learn how to call an external API, display data in the browser, and deploy with GitHub Pages.

2. Quick Summary of the Technology
The Fetch API is a modern JavaScript interface for making HTTP requests.  
It’s widely used in web apps to get data from servers.  
Example use cases: Weather apps, stock tickers, or news feeds.

3. System Requirements
- OS: Windows/Mac/Linux  
- Editor: Notepad, Notepad++, or VS Code  
- Browser: Chrome/Edge/Firefox  
- GitHub account for deployment  

4. Installation & Setup Instructions
1. Clone or download this repository.  
2. Ensure index.html, style.css, and script.js are in the same folder.  
3. Open index.html in your browser to test locally.  
4. Deploy via GitHub Pages:  
   - Go to Settings → Pages  
   - Select branch: main and folder: /root  
   - Save and wait for deployment.  

5. Minimal Working Example
The app fetches weather data for a city and displays temperature + conditions.

`html
<!-- index.html -->
<h1>Weather App</h1>
<div id="weather"></div>
`

`javascript
// script.js
document.addEventListener("DOMContentLoaded", () => {
  const weatherDiv = document.getElementById("weather");
  const apiKey = "YOURAPIKEY"; // Replace with your OpenWeatherMap key
  const city = "Nairobi";

  fetch(https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric)
    .then(res => res.json())
    .then(data => {
      weatherDiv.textContent =
        Temperature in ${city}: ${data.main.temp}°C, ${data.weather[0].description};
    })
    .catch(error => {
      weatherDiv.textContent = "Error fetching weather data.";
      console.error(error);
    });
});
`

Expected output:  
Temperature in Nairobi: 28°C, clear sky

6. AI Prompt Journal
- Prompt: “Give me starter code for index.html, style.css, and script.js for a weather app.”  
  Reflection: Helped scaffold the project quickly with clean starter files.  

- Prompt: “Show me how to connect Fetch API to OpenWeatherMap.”  
  Reflection: Guided me to integrate live weather data using an API key.  

- Prompt: “Explain how to deploy a project with GitHub Pages.”  
  Reflection: Clarified the steps to publish my app online with a live demo link.  

7. Common Issues & Fixes
- Problem: Files saved as .txt instead of .html/.css/.js.  
  Fix: Use “Save as type → All Files” in Notepad.  

- Problem: API key error (invalid or missing).  
  Fix: Ensure you copied the correct key from OpenWeatherMap and replaced "YOURAPIKEY".  

- Problem: GitHub Pages not showing updates.  
  Fix: Clear browser cache or wait a few minutes for deployment to refresh.  

8. References
- MDN Fetch API Documentation (developer.mozilla.org in Bing)  
- OpenWeatherMap API  
- GitHub Pages Guide  

9. Live Demo
Click here to view the app (cewaik.github.io in Bing)
