import { NowTabHeader } from "./header"
import { URLS } from "../../urls"

export function NowInfoTab(props) {
  const style = {
    backgroundImage: `url(${URLS.ICON_URL}${props.cityData?.weather[0].icon}@4x.png)`,
  }
  const isAdded = props.favouriteList.includes(props.cityData?.name);

  return (
    <div className='tabs__content now font-style'>
      <div className='now__temperature font-style'>
        {`${Math.round(props.cityData?.main.temp || '0')}°`}
      </div>
      <div className='now__weather-icon' style={style}></div>
      <div className='now__about'>
        <NowTabHeader cityName={props.cityData?.name || 'City name'} />
        <input className='now__favourite' type='checkbox' checked={isAdded} onChange={event => {
          props.handleFavourite(event, props.cityData.name)
        }} />
      </div>
    </div>
  )
}