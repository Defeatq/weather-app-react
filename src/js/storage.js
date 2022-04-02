import { getCityDataUrl, getCityData, getForecastUrl } from './request';

export const LOCAL_STORAGE = {
  saveFavouriteCities: function(cityList) {
    localStorage.setItem('favouriteCities', JSON.stringify([...cityList]));
  },
  getFavouriteCities: function() {
    return JSON.parse(localStorage.getItem('favouriteCities'))
  },
  setCurrentCity: function(cityName) {
    localStorage.setItem('currentCity', cityName);
  },
  getCurrentCity: function() {
    return localStorage.getItem('currentCity')
  },
  loadStorage: function() {
    return
  }
}