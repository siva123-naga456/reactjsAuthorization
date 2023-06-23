// Write your JS code here
import {Component} from 'react'
import './index.css'

class Header extends Component {
  render() {
    return (
      <nav className="nav-container">
        <div className="nav-sub-container">
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <img
            className="icon"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
          />

          <div className="sub2-container">
            <ul className="unOrder-list">
              <li className="list">Home</li>
              <li className="list">Products</li>
              <li className="list">Cart</li>
            </ul>
            <button type="button" className="btn">
              Logout
            </button>
          </div>
        </div>
        <div className="sub1-container">
          <img
            className="icons"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
          />
          <img
            className="icons"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
          />
          <img
            className="icons"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
          />
        </div>
      </nav>
    )
  }
}
export default Header
