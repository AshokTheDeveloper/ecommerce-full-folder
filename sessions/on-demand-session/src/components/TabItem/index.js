import './index.css'

const TabItem = props => {
  const {tabDetails, onChangeTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const onChangeTab = () => {
    onChangeTabId(tabId)
  }

  const selectedTabItem = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${selectedTabItem}`}
        onClick={onChangeTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
