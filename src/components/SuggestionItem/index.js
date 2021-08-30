import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearch} = props
  const {suggestion} = suggestionDetails
  const onClickArrow = () => {
    updateSearch(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p className="para">{suggestion}</p>
      <button type="button" className="arrow-button" onClick={onClickArrow}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
