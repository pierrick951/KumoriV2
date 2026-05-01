// Structure des données que tu as demandées pour ton dashboard
export interface WeatherData {
  city: string;
  temp: number;
  feelsLike: number;
  description: string;
  icon: string;
  windSpeed: number;
  uvIndex?: number; // Optionnel car demande un appel séparé
  sunrise: number;
  sunset: number;
  humidity: number;
}

// Structure brute de l'API (pour ton service Axios)
export interface OpenWeatherResponse {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: Array<{
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
}