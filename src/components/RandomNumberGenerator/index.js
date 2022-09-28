// Write your code here

import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  onGenerateNumber = () => {
    const {number} = this.state
    const randomNumber = number <= 100 ? Math.round(Math.random() * 100) : null
    this.setState({number: randomNumber})
  }

  render() {
    const {number} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button onClick={this.onGenerateNumber} type="button">
            Generate
          </button>
          <p className="number">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
