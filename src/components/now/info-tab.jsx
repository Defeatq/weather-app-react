import { NowTabHeader } from "./header";
import { URLS } from "../../urls";
import store from "../../js/store";

export function NowInfoTab(props) {
  const cityData = store.getState().cityData;
  const style = {
    backgroundImage: `url(${URLS.ICON_URL}${cityData?.weather[0].icon}@4x.png)`,
  }
  const isAdded = store.getState().favourites.includes(cityData?.name);

  return (
    <div className='tabs__content now font-style'>
      <div className='now__temperature font-style'>
        {`${Math.round(cityData?.main.temp || 0)}°`}
      </div>
      <div className='now__weather-icon' style={style}></div>
      <div className='now__about'>
        <NowTabHeader cityName={cityData?.name || 'City name'} />
        <input className='now__favourite' type='checkbox' checked={isAdded} onChange={event => {
          props.handleFavourite(event, cityData.name)
        }} />
      </div>
    </div>
  )
}