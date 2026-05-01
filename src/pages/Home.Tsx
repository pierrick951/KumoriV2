import { type WeatherData } from '../types/weather';

interface Props {
  weather: WeatherData | null;
}

const Home = ({ weather }: Props) => {
    console.log("🏠 Props reçues dans Home:", weather);
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {weather ? (
        <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800">
          <p className="text-4xl font-bold">{weather.temp}°C</p>
          <p className="text-zinc-400 capitalize">{weather.description} in {weather.city}</p>
        </div>
      ) : (
        <p className="text-zinc-500">Locating you and fetching weather...</p>
      )}
    </div>
  );
};

export default Home;