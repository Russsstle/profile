import React, { Component } from 'react'
import Typewriter from 'typewriter-effect';

class typeWriterComponent extends Component{
  constructor(props) {
    super(props)
  
    this.chatButton = this.chatButton.bind(this);
  }
     chatButton() {
        return 
     }
    render(){
        return (
          <div>
          <Typewriter
            onInit={(typewriter) => {
              if(this.props.textToType === "Hello.") {
                typewriter
                .typeString(this.props.textToType)
                .pauseFor(1500)
                .deleteAll()
                .changeDelay(56)
                .typeString("Russell John Santos  <br/> Web Developer at Cafe 24")
                .pauseFor(500)
                .callFunction(()=>{ 
                  this.props.updateText(true)
                 })
             
                .start()
              } else {
                typewriter
                .changeDelay(56)
                .typeString(this.props.textToType)
                .stop()
                .start()
              }
          }}
        />
        </div>
           
           
        )
    }
}
    
export default typeWriterComponent