export function SearchCityForm(props) {
  const {onSubmit, onChange, value} = props;

  return (
    <form className='weather__search' onSubmit={onSubmit}>
      <input type='text' className='search__input font-style' placeholder='Type something' value={value} onChange={onChange} />
      <button type='submit' className='search__icon font-style'>
        <i className='fas fa-search'></i>
      </button>
    </form>
  )
}