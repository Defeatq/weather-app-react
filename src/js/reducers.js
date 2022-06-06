import { ADD_CITY, SET_CITY, REMOVE_CITY } from "./actions";
import LOCAL_STORAGE from "./storage";

const initialState = {
  currentCity: LOCAL_STORAGE.getCurrentCity() || '',
  favourites: LOCAL_STORAGE.getFavouriteCities() || [],
  cityData: {},
}

function weatherInit(state = initialState, action) {
  switch (action.type) {
    case SET_CITY:
      return Object.assign({}, state, {
        currentCity: action.payload,
      });
    case ADD_CITY:
      return Object.assign({}, state, {
        favourites: [...state.favourites, action.payload],
      });
    case REMOVE_CITY:
      return Object.assign({}, state, {
        favourites: state.favourites.filter(city => city !== action.payload),
      });
    default:
      return state
  }
}

export default weatherInit