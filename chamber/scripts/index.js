document.getElementById("currentyear").innerHTML = new Date().getFullYear();

  // Update the last modified date
const lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = `Last modified on: ${lastModified}`;

// 1. Fetch weather data from OpenWeatherMap API
async function getWeatherData() {
    const apiKey = '2919150a203c4558b58ba36da7495d46'; // Replace with your actual API key
    const city = 'Venezuela'; // Replace with your desired city
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}

  // 2. Display weather data
    async function displayWeather() {
    const weatherData = await getWeatherData();
    if (weatherData) {
        const temperature = weatherData.main.temp;
        const description = weatherData.weather[0].description;
      // ... (Get forecast data and display)
        const weatherElement = document.getElementById('weather');
        weatherElement.innerHTML = `
        <h2>Current Weather in ${weatherData.name}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
        <!-- ... (Display forecast data) -->
`;
    } else {
      // Handle error case (e.g., display a message)
    }
}
  // 3. Fetch chamber member data from JSON
async function getChamberMembers() {
    // Assuming your JSON data is in a file named 'members.json'
    const response = await fetch('members.json');
    const members = await response.json();
    return members;
}

  // 4. Display chamber members with filtering
async function displayChamberMembers() {
    const members = await getChamberMembers();
    const goldSilverMembers = members.filter(member => member.membership === 'gold' || member.membership === 'silver');

    // Randomly select 2-3 members
    const selectedMembers = goldSilverMembers.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 2) + 2);

    // Display selected members in the 'spotlights' section
    const spotlightsElement = document.getElementById('spotlights');
    spotlightsElement.innerHTML = ''; // Clear previous members
    selectedMembers.forEach(member => {
        const memberElement = document.createElement('div');
        memberElement.innerHTML = `
        <h3>${member.name}</h3>
        <p>Membership: ${member.membership}</p>
        <!-- ... (Display other member details) -->
        `;
        spotlightsElement.appendChild(memberElement);
    });
}
  // Call the functions to initially display the data
displayWeather();
displayChamberMembers();