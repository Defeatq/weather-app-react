import { getCityData, getCityDataUrl, getForecastUrl } from "../../js/request";
import LOCAL_STORAGE from "../../js/storage";
import store from "../../js/store";
import { setCurrentCity, setCurrentCityAsync } from "../../js/actions";

export function FavouriteItem(props) {
  function handleListItem(cityName) {
    store.dispatch(setCurrentCityAsync(cityName))

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