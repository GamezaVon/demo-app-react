import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import FourOFour from './views/404/NotFound';
import PokemonsProvider from './context/pokemons/Provider';
import PokemonContext from './context/pokemons';
import PokeDetail from './views/PokeDetail';
 
function App() {
  return (
    <PokemonsProvider>
      <Routes>
        <Route path="*" element={<FourOFour />} />
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<PokeDetail />} />
      </Routes>
    </PokemonsProvider>

  );
}

export default App;
