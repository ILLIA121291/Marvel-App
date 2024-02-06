import './App.scss';
import AppHeader from '../2_AppHeader/AappHeader';
import Character from '../3_Character/Character';
import Comics from '../4_Comics/Comics';

const App = () => {
  return (
    <div className='app'>
      <AppHeader />
      <Character />
      {/* <Comics/> */}
    </div>
  );
};

export default App;
