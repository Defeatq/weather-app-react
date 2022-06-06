import { getCityDataUrl } from './request';

const SET_CITY = 'SET_CITY';
const ADD_CITY = 'ADD_CITY';
const REMOVE_CITY = 'REMOVE_CITY';

const createAction = (type) => (payload) => {
  return {
    type,
    payload,
  }
}

const setCurrentCity = createAction(SET_CITY);

const addFavouriteCity = createAction(ADD_CITY);

const removeFavouriteCity = createAction(REMOVE_CITY);

function setCurrentCityAsync(cityName) {
  return function (dispatch) {
    return fetch(getCityDataUrl(cityName))
      .then(response => response.json())
      .then(json => {
        dispatch(setCurrentCity(json.name));
      })
  }
}

export { 
  ADD_CITY,
  REMOVE_CITY,
  SET_CITY,
  setCurrentCity,
  addFavouriteCity,
  removeFavouriteCity,
  setCurrentCityAsync
}