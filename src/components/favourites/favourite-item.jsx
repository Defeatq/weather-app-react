import { getCityData, getCityDataUrl, getForecastUrl } from "../../js/request";
import LOCAL_STORAGE from "../../js/storage";
import store from "../../js/store";
import { setCurrentCity } from "../../js/actions";

export function FavouriteItem(props) {
  function handleListItem(cityName) {
    getCityData(getCityDataUrl(cityName))
      .then(cityData => {
        props.setCityData(cityData);
        store.dispatch(setCurrentCity(cityData.name));
        LOCAL_STORAGE.setCurrentCity(cityData.name);
      })
      .catch(error => {
        console.log(error.message)
      });

    getCityData(getForecastUrl(cityName))
      .then(forecastData => {
        props.setForecast(forecastData)
      })
      .catch(error => {
        console.log(error.message)
      });
  }

  return (
    <div className='favourite__element font-style'>
      <div className='favourite__text' onClick={() => handleListItem(props.cityName)}>
        {props.cityName}
      </div>
      <button className='favourite__close' onClick={() => props.handleDelete(props.cityName)}></button>
    </div>
  )
}