// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationsList, onClickWithDrawCase} = props
  const {value} = denominationsList

  const onClickDeduct = () => {
    onClickWithDrawCase(value)
  }

  return (
    <li className="buttons-container">
      <button type="button" className="button" onClick={onClickDeduct}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
