import { URLS } from "../urls";

export function getCityData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(urlBody => urlBody.json())
      .then(urlContent => {
        checkErrorCode(urlContent.cod) ? resolve(urlContent) : reject(urlContent)
      })
      .catch(() => {
        console.log(new Error('Failed to connect').message)
      });
  });
};

export function getCityDataUrl(cityName) {
  return `${URLS.WEATHER_URL.SERVER_URL}?q=${cityName}&appid=${URLS.WEATHER_URL.API_KEY}`
}

export function getForecastUrl(cityName) {
  return `${URLS.FORECAST_URL.SERVER_URL}?q=${cityName}&appid=${URLS.FORECAST_URL.API_KEY}`
}

export function checkErrorCode(code) {
  switch(code) {
    case '200':
      return true
    case '404':
      return false
    case '400':
      return false
    default:
      return new Error('Unrecognized error')
  }
}