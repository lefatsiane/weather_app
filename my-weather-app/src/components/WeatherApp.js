import React, { useState } from "react";

const WeatherApp = () => {
  // State to store the user-entered city name
  const [city, setCity] = useState("");

  // State to store the retrieved weather data
  const [weatherData, setWeatherData] = useState(null);

  // Function to fetch weather data from the API
  const fetchWeatherData = async () => {
    try {
      const apiKey = "ed9c8b15cbbf4e0f85d124024242903"; 
      const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

      // Make an API request
      const response = await fetch(apiUrl);
      const data = await response.json();

      // Update the weather data state
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  return (
    <div>
      <h1>Weather App</h1>
      {/* Form for user input */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button on type="submit">Get Weather</button>
      </form>

      {/* Display weather data if available */}
      {weatherData && (
        <div>
          <h2>{weatherData.location.name}</h2>
          <p>Temperature: {weatherData.current.temp_c}°C</p>
          <p>Condition: {weatherData.current.condition.text}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;

// import React, { useState } from "react";

// const WeatherApp = () => {
//   const [city, setCity] = useState("");
//   const [weatherData, setWeatherData] = useState(null);

//   const fetchWeatherData = async () => { //fetch data from weather api
//     try {
//       const apiKey = "ed9c8b15cbbf4e0f85d124024242903"; //api key retrived from "https://www.weatherapi.com/"
//       const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
//       const response = await fetch(apiUrl);
//       const data = await response.json();
//       setWeatherData(data);
//     } catch (error) {
//       console.error("Error fetching weather data:", error);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchWeatherData();
//   };

//   return (
//     <div>
//       <h1>Weather App</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter city name"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//         />
//         <button type="submit">Get Weather</button>
//       </form>
//       {weatherData && (
//         <div>
//           <h2>{weatherData.location.name}</h2>
//           <p>Temperature: {weatherData.current.temp_c}°C</p>
//           <p>Condition: {weatherData.current.condition.text}</p>
//           {/* Add more weather details as needed */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default WeatherApp;
