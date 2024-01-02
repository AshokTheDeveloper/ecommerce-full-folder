// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {languageFiltersDetails, getLanguageId, isTrue} = props
  const {id, language} = languageFiltersDetails
  const onClickLanguage = () => {
    getLanguageId(id)
  }

  const selected = isTrue ? 'color-button' : ''
  return (
    <li className="filter-item-container">
      <button
        type="button"
        className={`language-button ${selected}`}
        onClick={onClickLanguage}
      >
        <p className="language">{language}</p>
      </button>
    </li>
  )
}

export default LanguageFilterItem
