// Write your JS code here

import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {usernameInput: '', passwordInput: '', showErrMsg: false, ErrMsg: ''}

  onChangeName = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  success = () => {
    const {history} = this.props
    history.replace('/')
  }

  formSubmit = async event => {
    event.preventDefault()
    const {usernameInput, passwordInput} = this.state
    const userDetails = {usernameInput, passwordInput}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.success()
    } else {
      this.setState({
        showErrMsg: true,
        ErrMsg: data.error_msg,
      })
    }
  }

  renderUserName = () => {
    const {usernameInput} = this.state
    return (
      <>
        <label htmlFor="username" className="label-name">
          USERNAME
        </label>
        <input
          className="name-box"
          id="username"
          type="text"
          placeholder="Username"
          value={usernameInput}
          onChange={this.onChangeName}
        />
      </>
    )
  }

  renderPassword = () => {
    const {passwordInput} = this.state
    return (
      <>
        <label htmlFor="password" className="label-name">
          PASSWORD
        </label>
        <input
          className="name-box"
          id="password"
          type="password"
          placeholder="Password"
          value={passwordInput}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  render() {
    const {showErrMsg, ErrMsg} = this.state
    return (
      <div className="Main-login-container">
        <img
          className="website-login"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <img
          className="login-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.formSubmit}>
          <img
            className="form-login"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <div className="name-container">{this.renderUserName()}</div>
          <div className="password-container">{this.renderPassword()}</div>
          <button type="submit" className="login-btn">
            Login
          </button>
          {showErrMsg && <p className="err-msg">*{ErrMsg}</p>}
        </form>
      </div>
    )
  }
}
export default LoginForm
