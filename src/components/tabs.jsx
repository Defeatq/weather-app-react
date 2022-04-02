export function TabSwitcher(props) {
  return (
    <nav className='tabs__list' onClick={props.onSwitch}>
      <button data-about='now' className='tabs__link selected font-style'>Now</button>
      <button data-about='details' className='tabs__link font-style'>Details</button>
      <button data-about='forecast' className='tabs__link font-style'>Forecast</button>
    </nav>
  )
}