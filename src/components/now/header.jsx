export function NowTabHeader(props) {
  return (
    <div className='now__name font-style'>
      {props.cityName || 'City name'}
    </div>
  )
}