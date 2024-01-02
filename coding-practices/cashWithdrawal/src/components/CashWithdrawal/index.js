// Write your code here
import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    initialCash: 2000,
  }

  onClickWithDrawCase = value => {
    this.setState(prevState => ({
      initialCash: prevState.initialCash - value,
    }))
  }

  render() {
    const {initialCash} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="cash-withdraw-container">
          <div className="customer-profile-container">
            <p className="customer-profile-picture">S</p>
            <p className="customer-name">Sara Williams</p>
          </div>
          <div className="balance-rupees-container">
            <p className="your-balance-text">Your Balance</p>
            <div className="balance-container">
              <p className="cash">{initialCash}</p>
              <p className="rupees-text">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <p className="withdraw-heading">Withdraw</p>
            <p className="sub-heading">CHOOSE SUM (IN RUPEES)</p>
            <ul className="buttons-container">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  onClickWithDrawCase={this.onClickWithDrawCase}
                  denominationsList={eachItem}
                  key={eachItem.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
