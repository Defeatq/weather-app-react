export function WeatherProperty(props) {
  return (
    <span className='details__parameter-value'>
      {props.value || ''}
    </span>
  )
}