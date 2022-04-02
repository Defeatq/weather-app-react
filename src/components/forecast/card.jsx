import { convertUnixTime } from "../../helpers/time-converter";
import { URLS } from "../../urls";

export function ForecastCard(props) {
  const {timeData} = props;
  const {hours, minutes, month, day} = convertUnixTime(timeData?.dt);
  const style = {
    backgroundImage: `url(${URLS.ICON_URL}${timeData?.weather[0].icon}@4x.png)`,
  }

  return (
    <div className='forecast__card'>
      <div className='card__moment'>
        <div className='card__date font-style'>
          {`${day} ${month}`}
        </div>
        <div className='card__time font-style'>
          {`${hours}:${minutes}`}
        </div>
      </div>
      <div className='card__details'>
        <div className='card__properties'>
          <div className='card__parameter font-style'>
            Temperature: {Math.round(timeData?.main.temp)}°
          </div>
          <div className='card__parameter font-style'>
            Feels like: {Math.round(timeData?.main.feels_like)}°
          </div>
        </div>
        <div className='card__weather font-style'>
          {timeData?.weather[0].main}
          <div className='card__icon' style={style}></div>
        </div>
      </div>
    </div>
  )
}