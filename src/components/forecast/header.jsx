export function ForecastHeader(props) {
  const {cityName} = props;

  return (
    <h3 className='forecast__header font-style'>
      {cityName || 'City name'}
    </h3>
  )
}