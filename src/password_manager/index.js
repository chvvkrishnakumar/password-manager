import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import Passwords from '../passwords/index'

class PasswordManager extends Component {
  state = {
    savedList: [],
    webSite: '',
    userName: '',
    password: '',
    show: false,
    search: '',
  }

  onName = event => {
    this.setState({userName: event.target.value})
  }

  onWebsite = event => {
    this.setState({webSite: event.target.value})
  }

  onPassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onAdd = event => {
    event.preventDefault()
    const {userName, webSite, password} = this.state
    const newList = {
      id: uuidv4(),
      userName,
      webSite,
      password,
    }
    this.setState(prevState => ({
      savedList: [...prevState.savedList, newList],
      userName: '',
      webSite: '',
      password: '',
    }))
  }

  onSearch = event => {
    this.setState({search: event.target.value})
  }

  onShow = () => {
    this.setState(prevState => ({show: !prevState.show}))
  }

  deleteItem = id => {
    this.setState(prevState => ({
      savedList: prevState.savedList.filter(each => each.id !== id),
    }))
  }

  render() {
    const {savedList, userName, webSite, password, search, show} = this.state
    const filteredList = savedList.filter(each =>
      each.webSite.toLowerCase().includes(search.toLowerCase()),
    )
    console.log(savedList)
    return (
      <div className="main">
        <img
          className="head-img"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="container1">
          <form onSubmit={this.onAdd} className="form">
            <h1>Add New Password</h1>
            <div className="inputs">
              <img
                className="input-img"
                htmlFor="web"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
              />
              <input
                type="text"
                value={webSite}
                onChange={this.onWebsite}
                id="web"
                placeholder="Enter WebSite"
              />
            </div>
            <div className="inputs">
              <img
                className="input-img"
                htmlFor="name"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
              />
              <input
                type="text"
                value={userName}
                onChange={this.onName}
                id="name"
                placeholder="Enter Username"
              />
            </div>
            <div className="inputs">
              <img
                className="input-img"
                htmlFor="password"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
              />
              <input
                type="password"
                value={password}
                onChange={this.onPassword}
                id="password"
                placeholder="Enter Password"
              />
            </div>
            <button className="add-btn" type="submit">
              Add
            </button>
          </form>
          <img
            className="main-img"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
          />
        </div>
        <div className="container2">
          <div className="search-box">
            <div className="count">
              <h1>Your Passwords</h1>
              <p className="paswrdcnt" type="button">
                {savedList.length}
              </p>
            </div>
            <div className="inputs">
              <img
                className="input-img"
                htmlFor="search"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <input
                placeholder="search"
                onChange={this.onSearch}
                type="search"
                id="search"
              />
            </div>
          </div>
          <hr />
          <div className="check">
            <input
              onChange={this.onShow}
              className="search"
              id="show"
              type="checkbox"
            />
            <label className="search" htmlFor="show">
              Show Passwords
            </label>
          </div>
          <ul>
            {filteredList.length === 0 ? (
              <div className="no">
                <img
                  className="no-password"
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                />
                <p>No Passwords</p>
              </div>
            ) : (
              filteredList.map(each => (
                <Passwords
                  details={each}
                  key={each.id}
                  show={show}
                  deleteItem={this.deleteItem}
                />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default PasswordManager
