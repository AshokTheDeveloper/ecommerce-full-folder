import './index.css'

const CapitalCityItem = props => {
  const {capitalsDetails} = props
  const {capitalDisplayText, id} = capitalsDetails

  return (
    <>
      <option className="capital" id={id} value={id}>
        {capitalDisplayText}
      </option>
    </>
  )
}

export default CapitalCityItem
