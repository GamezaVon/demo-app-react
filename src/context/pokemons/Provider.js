import { useState } from "react";
import PokemonContext from "./index";
import apiCall from "../../api/index"
export default function PokemonProvider({ children }) {
    const [pokemons, setPokemons] = useState([]);
    const getPokemons = async () => {
        try {
           const pokemonsResult = await apiCall({ url: "https://pokeapi.co/api/v2/pokemon?limit=100" });
           setPokemons(pokemonsResult.results);
        } catch (error) {
            setPokemons([]);
        }
    }

    return(
        <PokemonContext.Provider value= {{ getPokemons, pokemons }}>
            {children}
        </PokemonContext.Provider>
    );
}