import { type WeatherData } from '../types/weather';

interface Props {
  weather: WeatherData | null;
}

const Favorites = ({ weather }: Props) => {
    console.log("⭐️ Props reçues dans Favorites:", weather);
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Saved Cities</h1>
      <p className="text-zinc-500">Manage your favorite locations here.</p>
    </div>
  );
};

export default Favorites;