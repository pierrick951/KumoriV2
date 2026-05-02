

import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { type WeatherData, type OpenWeatherResponse } from './types/weather';
 
import Home from './pages/Home';
import Forecast from './pages/Forecast';
import Favorites from './pages/Favorites';
import Sidebar from './ui/Sidebar';
 
function App() {
  const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;
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
        city: typeof formattedData.city,
        temp: typeof formattedData.temp,
        wind: typeof formattedData.windSpeed
      });
      setWeather(formattedData);
    });
  }, [API_KEY]);
 
  // Valeurs Figma 1440px converties en vw
  const m = '3.9vw';   // 56px
  const gap = '4.7vw'; // 68px
  const r = '6.9vw';   // 100px
 
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#000000', color: '#ffffff' }}>
 
      {/* Sidebar fixed — respecte les marges Figma */}
      <div style={{
        position: 'fixed',
        top: m,
        left: m,
        bottom: m,
        zIndex: 50,
      }}>
        <Sidebar />
      </div>
 
      {/* Contenu — marginLeft = marge + sidebar + gap */}
      <div style={{
        marginLeft: `calc(${m} + 146px + ${gap})`,
        paddingRight: r,
        paddingTop: m,    // même top que la sidebar
        paddingBottom: m,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}>
 
        {/* Header — aligné avec le padding interne de la sidebar (16px) */}
        <header style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '44px',           // hauteur fixe de la searchbar
          marginBottom: '60px',     // 60px entre searchbar et première card
        }}>
 
          {/* Searchbar blanche */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: '#F3F4F6',
            borderRadius: '50px',
            padding: '12px 20px',
            width: '380px',
            height: '100%',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="rgba(0,0,0,0.35)" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
              style={{ flexShrink: 0 }}>
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              placeholder="Enter a city name"
              style={{
                background: 'none', border: 'none', outline: 'none',
                color: 'rgba(0,0,0,0.45)',
                fontSize: '14px',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                width: '100%',
              }}
            />
          </div>
 
          {/* Avatar */}
          <div style={{
            width: '40px', height: '40px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #FF6B47, #ff9a47)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontSize: '14px', fontWeight: 600,
            fontFamily: "'Inter', sans-serif", flexShrink: 0,
          }}>
            K
          </div>
        </header>
 
        {/* Pages */}
        <main style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '26px',
        }}>
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