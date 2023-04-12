import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Home } from '@/modules/Home/Home';
import { PokemonStats } from '@/modules/PokemonStats/PokemonStats';

// const AppMainLayout = () => (
//   <Fragment>
//     <Main />
//     <Outlet />
//   </Fragment>
// );

export const mainRouter = createBrowserRouter([
  {
    path: '/counter',
    element: <App />,
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'pokedex/:id',
    element: <PokemonStats />,
  },
]);
