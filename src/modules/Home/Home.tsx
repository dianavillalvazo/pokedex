import { selectPokemonsList } from '@/store/pokedex/selectors';
import { buttonTypes, getPokemons } from '@/store/pokedex/thunks';
import { AppDispatch } from '@/store/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const dispatchPokemons = (button: buttonTypes) => {
    dispatch(getPokemons(button));
  };

  useEffect(() => {
    dispatchPokemons('initial');
  }, []);

  const pokemonsList = useSelector(selectPokemonsList);

  console.log(pokemonsList);
  return (
    <div>
      <h1>Pokedex</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {pokemonsList.map(({ name, url }) => (
            <tr onClick={() => navigate('')}>{name}</tr>
          ))}
          <tr></tr>
        </tbody>
      </table>
      <button onClick={() => dispatchPokemons('prev')}>Prev</button>
      <button onClick={() => dispatchPokemons('next')}>Next</button>
    </div>
  );
};
