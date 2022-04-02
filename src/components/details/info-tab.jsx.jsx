import { DetailsHeader } from "./header"
import { WeatherProperty } from "./property";
import { convertUnixTime } from "../../helpers/time-converter";

export function DetailsInfoTab(props) {
  const {cityData} = props;
  const sys = cityData?.sys ? {
    sunrise: `${convertUnixTime(cityData.sys.sunrise).hours}:${convertUnixTime(cityData.sys.sunrise).minutes}`,
    sunset: `${convertUnixTime(cityData.sys.sunset).hours}:${convertUnixTime(cityData.sys.sunset).minutes}`,
  } 
  : {sunrise: '', sunset: ''};

  return (
    <div className='tabs__content font-style details'>
      <DetailsHeader cityName={cityData?.name} />
      <div className='details__parameters'>
        <div className='details__parameter font-style'>
          Temperature: <WeatherProperty value={`${Math.round(cityData?.main.temp)}°`}  />
        </div>
        <div className='details__parameter font-style'>
          Feels like: <WeatherProperty value={`${Math.round(cityData?.main.feels_like)}°`} />
        </div>
        <div className='details__parameter font-style'>
          Weather: <WeatherProperty value={cityData?.weather[0].main} />
        </div>
        <div className='details__parameter font-style'>
          Sunrise: <WeatherProperty value={sys.sunrise} />
        </div>
        <div className='details__parameter font-style'>
          Sunset: <WeatherProperty value={sys.sunset} />
        </div>
      </div>
    </div>
  )
}