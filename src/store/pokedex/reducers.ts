import { PayloadAction } from '@reduxjs/toolkit';
import { pokedex, pokemon, pokemonStats } from '.';

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

const reducers = {
  setPokemonsList,
  setSinglePokemon,
};

export default reducers;
