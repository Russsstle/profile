import React from 'react'
import axios from 'axios'
class contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: "Inquire me via Email",
      name:'',
      email: '',
      content:''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  async handleSubmit(e) {
    e.preventDefault()
    const params = {name:this.state.name, email:this.state.email, content: this.state.content}
    if (params.name === '' || params.email === '' || params.content === '') {
      alert("Please fill up all necessary requirements")
    } else {
      const emailValidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (emailValidation.test(params.email)) {
        await axios.post('/api/contact', {params})
      } else {
        alert('Incorrect Email')
      }
    }
  }

  render() {
    return (
      <div className="uk-align-center ">
        <div className="uk-animation-slide-bottom-medium">
          <div className="uk-margin-medium-bottom" data-uk-grid>
            <form  autoComplete="off">
                <div className="uk-flex-center " data-uk-grid>
                    <div className="uk-margin m20">
                        <label className="uk-form-label white" htmlFor="form-stacked-text">Name</label>
                        <div className="uk-form-controls">
                            <input className=" w300 input-block border-white border-5" id="name" type="text" placeholder="Enter Name" autoComplete="off"onChange={(e)=>{this.setState({name:e.target.value})}} />
                        </div>
                    </div>
                    <div className="uk-margin">
                        <label className="uk-form-label white" htmlFor="form-stacked-text">Email Address</label>
                        <div className="uk-form-controls">
                            <input className="w300 input-block border-white border-5" id="email" type="text" placeholder="example@email.com" autoComplete="off" onChange={(e)=>{this.setState({email:e.target.value})}} />
                        </div>
                    </div>
                </div>
                <div className="uk-margin">
                    <label className="uk-form-label white" htmlFor="form-stacked-text">Message</label>
                    <textarea className="large-input border-white white input-block w100-percent"  id="message" rows="10"  placeholder="Enter Message" onChange={(e)=>{this.setState({content:e.target.value})}} ></textarea>
                </div>
                <div className="uk-text-center ">
                    <button className="paper-btn btn-primary-outline" onClick={this.handleSubmit.bind(this)}>Submit</button>
                </div>
            </form>
            </div>
            <div  className="uk-child-width-expand@s" data-uk-grid>
              <div>
                
                <p><span data-uk-icon="icon: mail"></span> santosrusselljohn@gmail.com</p>
                <p><span data-uk-icon="icon: receiver"></span> +63905-499-5648</p>
              </div>
              <div className="uk-flex uk-flex-center uk-margin-medium-bottom">
                <a href="https://www.facebook.com/russelljohn.santos.5" className="uk-icon-link bgimg-none uk-margin-right" uk-icon="facebook"></a>
                <a href="https://twitter.com/Russsstle" className="uk-icon-link bgimg-none uk-margin-right" uk-icon="twitter"></a>
                <a href="https://github.com/Russsstle" className="uk-icon-link bgimg-none" uk-icon="github"></a>
              </div>
            </div>
           
        </div>
      </div>
    )
  }
}

export default contact
