import { createSlice } from '@reduxjs/toolkit';
import reducers from './reducers';

export interface pokemon {
  name: string;
  url: string;
}

interface ability {
  ability: {
    name: string;
  };
}

interface stat {
  name: string;
}

interface stats {
  base_stat: number;
  stat: stat;
}

export interface pokemonStats extends pokemon {
  types: string;
  id: number;
  height: number;
  weight: number;
  abilities: ability[];
  stats: stats[];
}

export interface pokedex {
  pokemonsList: pokemon[];
  singlePokemon: pokemonStats;
}

const initialState: pokedex = {
  pokemonsList: [],
  singlePokemon: {
    name: '',
    url: '',
    types: '',
    id: 0,
    height: 0,
    weight: 0,
    abilities: [],
    stats: [],
  },
};

const pokedexSlice = createSlice({
  name: 'pokedex',
  reducers,
  initialState,
});

export const { setPokemonsList, setSinglePokemon } = pokedexSlice.actions;

export default pokedexSlice.reducer;
