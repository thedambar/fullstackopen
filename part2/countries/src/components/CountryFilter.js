const CountryFilter = ({filter, setFilter}) => {

  const handleFilterChange = (event) => setFilter(event.target.value)

  return (
    <form>
      <input value={filter} onChange={handleFilterChange} />
    </form>
  )
}

export default CountryFilter;