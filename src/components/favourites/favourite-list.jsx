import { FavouriteItem } from "./favourite-item";
import store from "../../js/store";

export function FavouriteCitiesList(props) {
  const {setCityData, handleDelete, setForecast} = props;
  const favouritesList = store.getState().favourites;

  return (
    <div className='weather__favourite'>
      <h3 className='favourite__header font-style' >
        Added Locations:
      </h3>
      <div className='favourite__list'>
        {
          favouritesList.map((city, index) => {
            return <FavouriteItem key={index} cityName={city} setCityData={setCityData} setForecast={setForecast} handleDelete={handleDelete} />
          })
        }
      </div>
    </div>
  )
}