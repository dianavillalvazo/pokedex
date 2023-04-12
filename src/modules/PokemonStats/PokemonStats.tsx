import { selectSinglePokemon } from '@/store/pokedex/selectors';
import { getSinglePokemon } from '@/store/pokedex/thunks';
import { AppDispatch } from '@/store/store';
import { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import pokedexImg from '@/assets/pokedex.webp';
import './PokemonStats.css';
import { cleanSinglePokemon } from '@/store/pokedex';

export const PokemonStats = () => {
  let { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const pokemonStats = useSelector(selectSinglePokemon);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) dispatch(getSinglePokemon(id));
    return () => {
      dispatch(cleanSinglePokemon());
    };
  }, []);

  const {
    abilities,
    height,
    id: number,
    name,
    sprites,
    stats,
    types,
    weight,
  } = pokemonStats;

  return (
    <Fragment>
      <div className='navBar'>
        <button onClick={() => navigate('/')}>Go Back</button>
        <img src={pokedexImg} alt='pokedex' />
      </div>
      <div className='container'>
        <div className='mainContainer'>
          <div className='generalContainer'>
            <h1 className='title'>{name}</h1>
            <div className='imageContainer'>
              <img src={sprites.front_default} alt={`${name}-front-default`} />
            </div>
            <div className='generalInfoContainer'>
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
            <div className='taContainer'>
              <div>
                <h3>Types</h3>
                {types.map(({ type }) => (
                  <p key={type.name}>{type.name}</p>
                ))}
              </div>
              <div>
                <h3>Abilities</h3>
                {abilities.map(({ ability }) => (
                  <p key={ability.name}>{ability.name}</p>
                ))}
              </div>
            </div>
          </div>
          <div className='statsContainer'>
            <h3>Stats</h3>
            {stats.map(({ base_stat, stat }) => (
              <div className='stat' key={stat.name}>
                <h4 className='statName'>{stat.name}</h4>
                <div className='progressBarContainer'>
                  <p className='statName'>{base_stat}</p>
                  <div className='progressBarBackground'>
                    <div
                      className='progressBar'
                      style={{ height: '24px', width: `${base_stat}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
