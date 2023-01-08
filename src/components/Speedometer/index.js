// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  acceleration = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({
        count: prevState.count + 10,
      }))
    }
  }

  brake = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({
        count: prevState.count - 10,
      }))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="paragraph-1"> Speed is {count}mph</h1>
        <p className="paragraph-2"> Min Limit is 0mph, Max Limit is 200mph </p>
        <div className="button-container">
          <button className="acc-btn" onClick={this.acceleration}>
            Accelerate
          </button>
          <button className="brk-btn" onClick={this.brake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
