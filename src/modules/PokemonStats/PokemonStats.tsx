import { selectSinglePokemon } from '@/store/pokedex/selectors';
import { getSinglePokemon } from '@/store/pokedex/thunks';
import { AppDispatch } from '@/store/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './PokemonStats.css';

export const PokemonStats = () => {
  const dispatch = useDispatch<AppDispatch>();

  let { id } = useParams();

  useEffect(() => {
    if (id) dispatch(getSinglePokemon(id));
  }, []);

  const pokemonStats = useSelector(selectSinglePokemon);

  const {
    name,
    weight,
    types,
    abilities,
    stats,
    height,
    id: number,
  } = pokemonStats;

  console.log(pokemonStats);
  return (
    <div>
      <h1>{name}</h1>
      <div className='generalInfo'>
        <div>
          <h3>Number</h3>
          <p>{number}</p>
        </div>
        <div>
          <h3>Height</h3>
          <p>{height}</p>
        </div>
        <div>
          <h3>Weight</h3>
          <p>{weight}</p>
        </div>
      </div>
      <div>
        <div>
          <h3>Abilities</h3>
          {abilities.map(({ ability }) => (
            <p>{ability.name}</p>
          ))}
        </div>
        <div>
          <h3>Stats</h3>
          {stats.map(({ base_stat, stat }) => (
            <>
              <h4>{stat.name}</h4>
              <p>{base_stat}</p>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
