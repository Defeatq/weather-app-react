import { checkErrorCode, getCityDataUrl } from './request';

const SET_CITY = 'SET_CITY';
const ADD_CITY = 'ADD_CITY';
const REMOVE_CITY = 'REMOVE_CITY';
const SET_DATA = 'SET_DATA';

const createAction = (type) => (payload) => {
  return {
    type,
    payload,
  }
}

const setCurrentCity = createAction(SET_CITY);

const addFavouriteCity = createAction(ADD_CITY);

const removeFavouriteCity = createAction(REMOVE_CITY);

const setCurrentCityData = createAction(SET_DATA);

function setCurrentCityAsync(cityName) {
  return function (dispatch) {
    return fetch(getCityDataUrl(cityName))
      .then(response => response.json())
      .then(json => {
        if (checkErrorCode(json.cod)) {
          dispatch(setCurrentCity(json.name));
          dispatch(setCurrentCityData(json));
        }
      })
  }
}

export { 
  ADD_CITY,
  REMOVE_CITY,
  SET_CITY,
  SET_DATA,
  setCurrentCity,
  addFavouriteCity,
  removeFavouriteCity,
  setCurrentCityAsync,
  setCurrentCityData,
}