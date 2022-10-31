// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isFeedback: false}

  onClickImg = () => this.setState({isFeedback: true})

  renderFeedback = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="content">
        <h1 className="heading">
          How satisfied are you with our customer support performance
        </h1>
        <ul className="image-container">
          {emojis.map(each => (
            <li key={each.id}>
              <button
                type="button"
                className="emoji-btn"
                onClick={this.onClickImg}
              >
                <img src={each.imageUrl} alt={each.name} className="emoji" />
                <span className="description">{each.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankYouScreen = () => {
    const {resources} = this.props

    const {loveEmojiUrl} = resources
    return (
      <div className="content">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="heading">Thank You</h1>
        <p>
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedback} = this.state

    return (
      <div className="main-container">
        <div className="content-container">
          {isFeedback ? this.renderThankYouScreen() : this.renderFeedback()}
        </div>
      </div>
    )
  }
}
export default Feedback
