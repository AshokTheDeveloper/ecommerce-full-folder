// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTab, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickTabItem = () => {
    onClickTab(tabId)
  }

  const highLightText = isActive ? 'textHighlight' : ''

  return (
    <>
      <li className="tab-item-container">
        <button
          type="button"
          className={`tab-name ${highLightText}`}
          onClick={onClickTabItem}
        >
          {displayText}
        </button>
      </li>
    </>
  )
}

export default TabItem
