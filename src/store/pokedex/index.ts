import { createSlice } from '@reduxjs/toolkit';
import reducers from './reducers';
import { pokemon, pokemonStats } from '@/types/pokedex';
export interface pokedex {
  pokemonsList: pokemon[];
  singlePokemon: pokemonStats;
  offset: number;
}

const initialState: pokedex = {
  pokemonsList: [],
  singlePokemon: {
    name: '',
    url: '',
    types: [],
    id: 0,
    height: 0,
    weight: 0,
    abilities: [],
    stats: [],
    sprites: { front_default: '' },
  },
  offset: 0,
};

const pokedexSlice = createSlice({
  name: 'pokedex',
  reducers,
  initialState,
});

export const {
  cleanSinglePokemon,
  setPokemonsList,
  setSinglePokemon,
  setPageChange,
} = pokedexSlice.actions;

export default pokedexSlice.reducer;
