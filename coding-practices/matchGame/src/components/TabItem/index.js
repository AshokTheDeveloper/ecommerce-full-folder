import './index.css'

const TabItem = props => {
  const {tabDetails, onSelectTab, isTrue} = props
  const {displayText, tabId} = tabDetails

  const onTabItem = () => {
    onSelectTab(tabId)
  }

  const isTabSelected = isTrue ? 'selected-tab-text' : ''
  return (
    <li className="tab-item-container">
      <button type="button" className="tab-button" onClick={onTabItem}>
        <p className={`tab-item-text ${isTabSelected}`}>{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
