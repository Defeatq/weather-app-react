import { getCityData, getCityDataUrl, getForecastUrl } from "../../js/request";

export function FavouriteItem(props) {
  function handleListItem(cityName) {
    getCityData(getCityDataUrl(cityName))
      .then(cityData => {
        props.setCityData(cityData);
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