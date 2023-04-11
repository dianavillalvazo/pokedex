import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { changeCounter } from './store/counter';
// import { getNumber } from './store/counter/thunks';
import { AppDispatch, AppThunk } from './store/store';
import { useDispatch, useSelector } from 'react-redux';
import { selectCount } from './store/counter/selectors';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const count = useSelector(selectCount);
  // dispatch(getNumber(1, 1000));
  const triggerChange = (operation: string) => {
    dispatch(changeCounter(operation));
  };
  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => triggerChange('minus')}>-</button>
        <div>
          <p>count is {count}</p>
        </div>
        <button onClick={() => triggerChange('plus')}>+</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
function AppDispatch(arg0: AppThunk) {
  throw new Error('Function not implemented.');
}
