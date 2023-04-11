import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

// const AppMainLayout = () => (
//   <Fragment>
//     <Main />
//     <Outlet />
//   </Fragment>
// );

export const mainRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);
