import { ForecastHeader } from "./header"
import { ForecastCard } from "./card"

export function ForecastInfoTab(props) {
  const {forecastData} = props;

  return (
    <div className='tabs__content font-style forecast'>
      <ForecastHeader cityName={forecastData?.city.name} />
      <div className='forecast__times'>
        <div className='forecast__timetable'>
          {
            forecastData?.list.map((timeData, index) => {
              return <ForecastCard key={index} timeData={timeData} />
            })
          }
        </div>
      </div>
    </div>
  )
}