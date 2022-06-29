import { createReducer } from "@reduxjs/toolkit";
import { addFavouriteCity, setCurrentCity, removeFavouriteCity, setCurrentCityData } from "./actions";
import LOCAL_STORAGE from "./storage";

const initialState = {
  currentCity: LOCAL_STORAGE.getCurrentCity() || '',
  favourites: LOCAL_STORAGE.getFavouriteCities() || [],
  cityData: {
    base: '',
    clouds: {
      all: 0,
    },
    cod: 200,
    coords: {
      lon: 0,
      lat: 0,
    },
    dt: 0,
    id: 0,
    main: {
      feels_like: 0,
      grnd_level: 0,
      humidity: 0,
      pressure: 0,
      sea_level: 0,
      temp: 0,
      temp_max: 0,
      temp_min: 0,
    },
    name: 'City name',
    sys: {
      country: '',
      id: 0,
      sunrise: 0,
      sunset: 0,
      type: 0,
    },
    timezone: 0,
    visibility: 0,
    weather: [{
      description: '',
      icon: '04d',
      id: 0,
      main: '',
    }],
    wind: {
      deg: 0,
      gust: 0,
      speed: 0,
    },
  },
}

const weatherInit = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      Object.assign(state, {
        currentCity: action.payload,
      })
    })
    .addCase(addFavouriteCity, (state, action) => {
      Object.assign(state, {
        favourites: [...state.favourites, action.payload],
      })
    })
    .addCase(removeFavouriteCity, (state, action) => {
      Object.assign(state, {
        favourites: state.favourites.filter(city => city !== action.payload),
      });
    })
    .addCase(setCurrentCityData, (state, action) => {
      Object.assign(state, {
        cityData: action.payload,
      });
    });
});

// function weatherInit(state = initialState, action) {
//   switch (action.type) {
//     case SET_CITY:
//       return Object.assign({}, state, {
//         currentCity: action.payload,
//       });
//     case ADD_CITY:
//       return Object.assign({}, state, {
//         favourites: [...state.favourites, action.payload],
//       });
//     case REMOVE_CITY:
//       return Object.assign({}, state, {
//         favourites: state.favourites.filter(city => city !== action.payload),
//       });
//     case SET_DATA:
//       return Object.assign({}, state, {
//         cityData: action.payload,
//       });
//     default:
//       return state
//   }
// }

export default weatherInit