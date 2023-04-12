import { setPageChange, setPokemonsList, setSinglePokemon } from '.';
import { AppThunk } from '../store';

export type buttonTypes = 'next' | 'prev' | 'initial';
const pokemonsByPage = 20;

export const getPokemons =
  (button: buttonTypes): AppThunk =>
  async (dispatch, getState) => {
    try {
      let offset = getState().pokedex.offset;
      if (button === 'next') {
        offset === 140 ? (offset = 150) : (offset += pokemonsByPage);
      } else if (button === 'prev') {
        offset === 150 ? (offset = 140) : (offset -= pokemonsByPage);
      }

      const pokemons = await fetch(
        'https://pokeapi.co/api/v2/pokemon/?' +
          new URLSearchParams({
            offset: offset.toString(),
            limit: '20',
          })
      )
        .then((response) => response.json())
        .then((response) => response.results);
      dispatch(setPokemonsList(pokemons));
      dispatch(setPageChange(offset));
    } catch (e) {
      console.log(e);
    }
  };

export const getSinglePokemon =
  (id: string): AppThunk =>
  async (dispatch) => {
    try {
      const pokemon = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      ).then((response) => response.json());
      dispatch(setSinglePokemon(pokemon));
    } catch {}
  };
