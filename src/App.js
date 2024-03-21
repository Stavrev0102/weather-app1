import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import { WEATHER_API_URL , WEATHER_API_KEY } from './api';

function App() {

    const handleOnSearchChange = (searchData) => {
      const [lat,long] = searchData.value.split(" ");
      const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat={lat}&lon={lon}&appid=${WEATHER_API_KEY}`)
    }

  return (
    <div className="container">
      <Search onSearchChange={ handleOnSearchChange } />
      <CurrentWeather />
    </div>
  );
}

export default App;
