import { FavouriteItem } from "./favourite-item"

export function FavouriteCitiesList(props) {
  const {setCityData, handleDelete, favouriteList, setForecast} = props;

  return (
    <div className='weather__favourite'>
      <h3 className='favourite__header font-style' >
        Added Locations:
      </h3>
      <div className='favourite__list'>
        {
          favouriteList.map((city, index) => {
            return <FavouriteItem key={index} cityName={city} setCityData={setCityData} setForecast={setForecast} handleDelete={handleDelete} />
          })
        }
      </div>
    </div>
  )
}