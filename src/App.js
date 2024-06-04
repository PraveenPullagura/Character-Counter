import './App.css'
import {v4} from 'uuid'
import {Component} from 'react'
import SearchItem from './components/SearchItem'

class App extends Component {
  state = {searchInput: '', searchInputList: []}

  onChangeInputValue = event => {
    this.setState({searchInput: event.target.value})
  }

  onAdduserInput = event => {
    event.preventDefault()
    const {searchInput} = this.state
    const newUserInput = {
      id: v4(),
      userEnteredText: searchInput,
      textLength: searchInput.length,
    }
    this.setState(prevState => ({
      searchInputList: [...prevState.searchInputList, newUserInput],
      searchInput: '',
    }))
  }

  render() {
    const {searchInputList, searchInput} = this.state
    return (
      <div className="main-conatiner">
        <div className="text-container">
          <h1 className="heading">Count the characters like a Boss...</h1>
          <div className="count">
            <ul>
              {searchInputList.length === 0 ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                  className="image"
                />
              ) : (
                searchInputList.map(eachList => (
                  <SearchItem details={eachList} key={eachList.id} />
                ))
              )}
            </ul>
          </div>
        </div>
        <div className="search-container">
          <h1 className="character-count">Character Counter</h1>
          <div className="text-element">
            <form onSubmit={this.onAdduserInput}>
              <input
                type="text"
                onChange={this.onChangeInputValue}
                value={searchInput}
                placeholder="Enter the Characters here"
                className="inputValue"
              />
              <button className="button" type="submit">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App
