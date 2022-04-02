export function DetailsHeader(props) {
  return (
    <h3 className='details__header font-style'>
      {props.cityName || 'City name'}
    </h3>
  )
}