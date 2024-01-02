import './index.css'

const HistoryItem = props => {
  const {historyList, onDeleteItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyList

  const onDeleteHistoryItem = () => {
    onDeleteItem(id)
  }

  return (
    <li className="item-container">
      <div className="history-item-container">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="domain-logo" />
        <p className="title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <div className="delete-icon-container">
        <button
          type="button"
          data-testid="delete"
          className="button"
          onClick={onDeleteHistoryItem}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
