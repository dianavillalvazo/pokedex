import { PayloadAction } from '@reduxjs/toolkit';
import { pokedex } from '.';
import { pokemon, pokemonStats } from '@/types/pokedex';

const setPokemonsList = (
  state: pokedex,
  action: PayloadAction<pokemon[]>
): void => {
  state.pokemonsList = action.payload;
};

const setSinglePokemon = (
  state: pokedex,
  action: PayloadAction<pokemonStats>
): void => {
  state.singlePokemon = action.payload;
};

const setPageChange = (state: pokedex, action: PayloadAction<number>): void => {
  state.offset = action.payload;
};

const cleanSinglePokemon = (state: pokedex): void => {
  state.singlePokemon = {
    name: '',
    url: '',
    types: [],
    id: 0,
    height: 0,
    weight: 0,
    abilities: [],
    stats: [],
    sprites: { front_default: '' },
  };
};

const reducers = {
  cleanSinglePokemon,
  setPokemonsList,
  setSinglePokemon,
  setPageChange,
};

export default reducers;
