import { setPokemonsList, setSinglePokemon } from '.';
import { AppThunk } from '../store';

export type buttonTypes = 'next' | 'prev' | 'initial';
const pokemonsByPage = 20;

export const getPokemons =
  (button: buttonTypes): AppThunk =>
  async (dispatch) => {
    try {
      let offset = pokemonsByPage;

      if (offset && button === 'next') {
        offset += pokemonsByPage;
      } else if (button === 'prev') {
        offset -= pokemonsByPage;
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
    } catch {}
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
