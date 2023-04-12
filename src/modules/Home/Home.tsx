import { selectOffset, selectPokemonsList } from '@/store/pokedex/selectors';
import { buttonTypes, getPokemons } from '@/store/pokedex/thunks';
import { AppDispatch } from '@/store/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import pokedexImg from '@/assets/pokedex.webp';
import pokeball from '@/assets/pokeball.png';
import './Home.css';

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const pokemonsList = useSelector(selectPokemonsList);
  const offsetValue = useSelector(selectOffset);

  const dispatchPokemons = (button: buttonTypes) => {
    dispatch(getPokemons(button));
  };

  useEffect(() => {
    dispatchPokemons('initial');
  }, []);

  const onClickName = (url: string) => {
    const splitUrl = url.split('/');
    const id = splitUrl[splitUrl.length - 2];
    navigate(`pokedex/${id}`);
  };

  return (
    <div>
      <img className='pokedexImage' src={pokedexImg} alt='pokedex' />
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {pokemonsList.map(({ name, url }) => (
            <tr key={name} onClick={() => onClickName(url)}>
              <td className='pokemonName'>
                <img src={pokeball} alt='pokeball' />
                {name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='changeButtonsContainer'>
        <button
          disabled={offsetValue === 0}
          onClick={() => dispatchPokemons('prev')}
        >
          Prev
        </button>
        <button
          disabled={offsetValue === 150}
          onClick={() => dispatchPokemons('next')}
        >
          Next
        </button>
      </div>
    </div>
  );
};
