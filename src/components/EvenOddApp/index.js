// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNumber = this.getRandomNumber()

    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="heading">Count {count}</h1>
          {count % 2 === 0 && <p className="result">Count is Even</p>}
          {count % 2 !== 0 && <p className="result">Count is Odd</p>}
          <button className="button" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="instruction">
            <sup>*</sup>Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
