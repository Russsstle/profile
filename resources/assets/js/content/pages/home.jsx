import React from 'react'
import { Link } from 'react-router-dom'
import TypeWriterComponent from '.././design/typeWriterComponent'
class home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Hello.",
      revealButton: false
    }
  }
  updateText = value => {
    this.setState({revealButton: value})
  }
  ChatButton() {
    const revealButton = this.state.revealButton;
    if (revealButton) {
      return <div className="uk-text-center"><button className="uk-button uk-animation-slide-bottom-medium uk-button-default white">Chat</button></div>;
    }
  }
  render() {
    const revealButton = this.state.revealButton;
    let ChatButton = '';
    if (revealButton) {
      ChatButton = <Link className="uk-button uk-animation-slide-bottom-medium uk-button-default white bgimg-none" to="/rooms">Try Live Chat</Link>;
    }

    return (
      <div className="uk-flex uk-flex-column uk-position-center uk-height-small" >
          <div>
              <h4><TypeWriterComponent textToType = {this.state.name} updateText={this.updateText} /></h4>
          </div>
          <div className="uk-text-center">
            {ChatButton}
        </div>
      </div>
        
     
    )
  }
}

export default home
