import { useEffect, useState } from 'react';
import { setCurrentCity, addFavouriteCity, removeFavouriteCity, setCurrentCityAsync } from './js/actions';
import './style.css';
import { SearchCityForm } from './components/search-form';
import { WeatherInfo } from './components/weather-info';
import { getCityData, getForecastUrl } from './js/request';
import { FavouriteCitiesList } from './components/favourites/favourite-list';
import LOCAL_STORAGE from './js/storage';
import store from './js/store';

function App() {
  const [text, setText] = useState('');
  const [forecast, setForecast] = useState(null);
  const [favourites, setFavourites] = useState(LOCAL_STORAGE.getFavouriteCities() || []);

  function handleInput(event) {
    setText(event.target.value);
  };

  function handleFavourite(event, cityName) {
    const isAdded = event.target.checked;

    if (isAdded) {
      store.dispatch(addFavouriteCity(cityName));
      setFavourites([...favourites, cityName]);
    }
  };

  function handleDelete(cityName) {
    store.dispatch(removeFavouriteCity(cityName));
    setFavourites(favourites.filter(city => city !== cityName));
  };

  function handleForm(event) {
    event.preventDefault();
    
    store.dispatch(setCurrentCity(text));
    setText('');
  };

  useEffect(() => {
    store.dispatch(setCurrentCityAsync(store.getState().currentCity));
    LOCAL_STORAGE.setCurrentCity(store.getState().currentCity);

    getCityData(getForecastUrl(store.getState().currentCity))
      .then(forecastData => {
        setForecast(forecastData)
      })
      .catch(error => {
        alert(error.message)
      });
  }, [store.getState().currentCity]);

  useEffect(() => {
    LOCAL_STORAGE.saveFavouriteCities(store.getState().favourites);
  }, [store.getState().favourites]);

  return (
    <section className='wrapper'>
      <div className='weather'>
        <SearchCityForm onChange={handleInput} onSubmit={handleForm} value={text} />
        <div className='weather__content'>
          <WeatherInfo forecastData={forecast} handleFavourite={handleFavourite} />
          <FavouriteCitiesList setForecast={setForecast} handleDelete={handleDelete} />
        </div>
      </div>
    </section>
  )
}

export default App
