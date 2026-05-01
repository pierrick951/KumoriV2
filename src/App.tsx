import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react'; // 1. Ajout de useState ici
import axios from 'axios';
import { type WeatherData, type OpenWeatherResponse } from './types/weather';

import Home from './pages/Home';
import Forecast from './pages/Forecast';
import Favorites from './pages/Favorites';

// // 2. Importation des composants de structure
// import Sidebar from './components/Sidebar';
// import SearchBar from './components/SearchBar';

function App() {
  const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;
  
  // 2. Création du state pour stocker les données
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      
      const response = await axios.get<OpenWeatherResponse>(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=en`
      );

      const formattedData: WeatherData = {
        city: response.data.name,
        temp: Math.round(response.data.main.temp),
        feelsLike: Math.round(response.data.main.feels_like),
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        windSpeed: response.data.wind.speed,
        sunrise: response.data.sys.sunrise,
        sunset: response.data.sys.sunset,
        humidity: response.data.main.humidity,
      };
      console.log("💎 MAIN CHECK - Objet complet :", formattedData);
    console.log("📊 MAIN CHECK - Types :", {
      city: typeof formattedData.city,      // string
      temp: typeof formattedData.temp,      // number
      wind: typeof formattedData.windSpeed  // number
    });

      setWeather(formattedData);
    });
  }, [API_KEY]);

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar fixe à gauche */}
      {/* <Sidebar /> */}

      <div className="flex-1 flex flex-col">
        {/* Search Bar persistante en haut */}
        <header className="p-6">
          {/* <SearchBar /> */}
        </header>

        {/* Zone dynamique avec passage des props */}
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home weather={weather} />} />
            <Route path="/forecast" element={<Forecast weather={weather} />} />
            <Route path="/favorites" element={<Favorites weather={weather} />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;