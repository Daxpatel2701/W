import WeatherCard from './components/WeatherCard';
import DataCard from './components/DataCard';
import CountryTime from './components/CountryTime';
import Forecast from './components/Forecast';
import './App.css';

function App() {
  return (
    <div>
    <div className="App">
      <div className='search_can'>
        <h1 className='disc'>Discover the weather in every city you go</h1>
        <div className='search'>
          <input type='text' placeholder='Search for a city'/>
          <button>🔍</button>
        </div>
      </div>
      <WeatherCard></WeatherCard>
    </div>
    <div className='bottom-data'>
    <DataCard></DataCard>
    <CountryTime></CountryTime>
    <Forecast></Forecast>
    </div>
    </div>
  );
}

export default App;