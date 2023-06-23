// Write your JS code here
import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home-Main-container">
        <Header />
        <div className="Home-container">
          <div className="Home-sub-container">
            <h1 className="home-heading">Clothes That Get YOU Noticed</h1>
            <img
              className="Home-image"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
            />
            <p className="home-para">
              Fashion is part of the daily air and it does not quite help that
              it changes all the time.Clothes have always been a marker of the
              era and we are in a evolution. Your fashion makes you been seen
              and heard that way you are. So, celebrate seasons new and exciting
              fashion in your own way.
            </p>
            <button type="button" className="home-btn">
              Shop Now
            </button>
          </div>
          <div>
            <img
              className="Home-image2"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default Home
