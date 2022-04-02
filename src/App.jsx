import { useEffect, useState } from 'react'
import './style.css'
import { SearchCityForm } from './components/search-form'
import { WeatherInfo } from './components/weather-info'
import { getCityData, getCityDataUrl, getForecastUrl } from './js/request'
import { FavouriteCitiesList } from './components/favourites/favourite-list'
import { LOCAL_STORAGE } from './js/storage'

function App() {
  const [text, setText] = useState('');
  const [cityName, setCityName] = useState(LOCAL_STORAGE.getCurrentCity() || '');
  const [cityData, setCityData] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [favourites, setFavourites] = useState(LOCAL_STORAGE.getFavouriteCities() || []);

  function handleInput(event) {
    setText(event.target.value);
  };

  function handleFavourite(event, cityName) {
    const isAdded = event.target.checked;

    if (isAdded) {
      setFavourites([...favourites, cityName]);
    }
  };

  function handleDelete(cityName) {
    setFavourites(favourites.filter(city => city !== cityName));
  };

  function handleForm(event) {
    event.preventDefault();

    setCityName(text);
    setText('');
  };

  useEffect(() => {
    getCityData(getCityDataUrl(cityName))
      .then(cityData => {
        setCityData(cityData);

        LOCAL_STORAGE.setCurrentCity(cityName);
      })
      .catch(error => {
        console.log(error.message)
      });

    getCityData(getForecastUrl(cityName))
      .then(forecastData => {
        setForecast(forecastData)
      })
      .catch(error => {
        console.log(error.message)
      });
  }, [cityName]);

  useEffect(() => {
    LOCAL_STORAGE.saveFavouriteCities(favourites);
  }, [favourites]);

  return (
    <section className='wrapper'>
      <div className='weather'>
        <SearchCityForm onChange={handleInput} onSubmit={handleForm} value={text} />
        <div className='weather__content'>
          <WeatherInfo cityData={cityData} forecastData={forecast} favouriteList={favourites} handleFavourite={handleFavourite} />
          <FavouriteCitiesList favouriteList={favourites} setCityData={setCityData} setForecast={setForecast} handleDelete={handleDelete} />
        </div>
      </div>
    </section>
  )
}

export default App
