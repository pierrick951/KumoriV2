import { Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import Forecast from './pages/Forecast';
import Favorites from './pages/Favorites';

// // 2. Importation des composants de structure
// import Sidebar from './components/Sidebar';
// import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar fixe à gauche (validera la navigation Home/5 days/Favorites) */}
      {/* <Sidebar /> */}

      <div className="flex-1 flex flex-col">
        {/* Search Bar persistante en haut */}
        <header className="p-6">
          {/* <SearchBar /> */}
        </header>

        {/* Zone dynamique qui affiche la page demandée */}
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forecast" element={<Forecast />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

// 3. L'export indispensable pour que main.tsx puisse l'utiliser
export default App;