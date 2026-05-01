import { type WeatherData } from '../types/weather';

interface Props {
  weather: WeatherData | null;
}

const Forecast = ({ weather }: Props) => {
  console.log("📅 Props reçues dans Forecast:", weather);
  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold mb-4">5-Day Forecast</h1>
      <p className="text-zinc-500">
        {weather ? `Showing forecast for ${weather.city}` : "Waiting for location..."}
      </p>
      {/* On s'occupera du mapping de la liste des jours après manger */}
    </div>
  );
};

export default Forecast;