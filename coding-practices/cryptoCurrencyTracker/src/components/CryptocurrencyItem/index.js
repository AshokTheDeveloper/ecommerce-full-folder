// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {coinDetails} = props
  const {currencyName, currencyLogo, usdValue, euroValue} = coinDetails
  return (
    <li className="coin-item-container">
      <div className="coin-and-type">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="currency-values-container">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
