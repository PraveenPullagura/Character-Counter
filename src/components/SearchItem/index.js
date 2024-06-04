import './index.css'

const SearchItem = props => {
  const {details} = props
  const {userEnteredText, textLength} = details

  return (
    <li className="list-container">
      <div className="user-enter-text-container">
        <p className="user-enter-text">
          {userEnteredText}: {textLength}
        </p>
      </div>
    </li>
  )
}

export default SearchItem
