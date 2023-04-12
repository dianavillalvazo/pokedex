import { RootState } from '../store';

export const selectPokemonsList = (state: RootState) =>
  state.pokedex.pokemonsList;
export const selectSinglePokemon = (state: RootState) =>
  state.pokedex.singlePokemon;
export const selectOffset = (state: RootState) => state.pokedex.offset;
