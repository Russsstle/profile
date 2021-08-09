import React from 'react'
import LiveChatImage from '../../../images/livechatroom.png';
import BlResortImage from '../../../images/Blresort.png';
import { Link } from 'react-router-dom'
class about extends React.Component {
  constructor(props) {
    super(props)

  }
  

  render() {
    return (
        <div> 
            <div className="uk-margin-bottom " data-uk-grid>
                <div className="border border-white border-2 border-primary uk-padding uk-text-center uk-width-1-2@s uk-margin-left uk-animation-slide-left" >
                    <h3 className="white uk-text-lead ">About</h3>
                    <p className="uk-text-small	">I provide full stack development on web/mobile applications and networking. I have 2 years of experience in 
                        designing and developing user interfaces, back-end infrastructures, software peer testing and debugging. 
                        knowledgeable in using different languages and frameworks of the current trends.
                    </p>
                </div>
                <div className="border border-white border-5 border-primary uk-padding  uk-width-expand@s uk-margin-left uk-animation-slide-right" >
                <h3 className="white uk-text-lead uk-text-center ">Skills</h3>
                    <div data-uk-grid>
                        <div className = "progressbar-width">
                            PHP
                            <div className="progress margin-bottom">
                                <div className="bar secondary w-95"></div>
                            </div>
                        </div>
                        <div className = "progressbar-width">
                            Laravel
                            <div className="progress margin-bottom">
                                <div className="bar secondary w-85"></div>
                            </div>
                        </div>
                        <div className = "progressbar-width">
                            Js/Jquery
                            <div className="progress margin-bottom">
                                <div className="bar secondary w-90"></div>
                            </div>
                        </div>
                        <div className = "progressbar-width">
                            React JS
                            <div className="progress margin-bottom">
                                <div className="bar secondary w-85"></div>
                            </div>
                        </div>
                        <div className = "progressbar-width">
                            Python
                            <div className="progress margin-bottom">
                                <div className="bar secondary w-63"></div>
                            </div>
                        </div>
                        <div className = "progressbar-width">
                            Vue Js
                            <div className="progress margin-bottom">
                                <div className="bar secondary w-75"></div>
                            </div>
                        </div>
                        <div className = "progressbar-width">
                            Networking
                            <div className="progress margin-bottom">
                                <div className="bar secondary w-66"></div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            <div>
            <div className = "border border-white border-5 uk-padding uk-animation-slide-bottom-medium">
                <h3 className="white uk-text-lead uk-text-center ">Projects</h3>
                <div className="collapsible">
                    <input id="collapsible1" type="checkbox" name="collapsible"/>
                    <label htmlFor="collapsible1" className="white">Realtime Chatrooms (2021)</label>
                    <div className="collapsible-body">
                        <img src={LiveChatImage} style={{objectFit: "cover"}} />
                        - An application that allows the users to create and join rooms and have a realtime conversation, you can try access the page from <Link className="uk-button uk-animation-slide-bottom-medium uk-button-default white bgimg-none" to="/rooms">here</Link>
                    </div>
                </div>
                <div className="collapsible">
                    <input id="collapsible2" type="checkbox" name="collapsible"/>
                    <label htmlFor="collapsible2" className="white">BL Resort and Hotel (2017-2019)</label>
                    <div className="collapsible-body">
                    <img className="uk-align-center" src={BlResortImage}  style={{objectFit: "cover"}}/>
                    <span>- A system that tracks reservation of their guests and generates report. Sees  available rooms and receipt</span>
                    </div>
                </div>
                <div className="collapsible">
                    <input id="collapsible3" type="checkbox" name="collapsible"/>
                    <label htmlFor="collapsible3" className="white">933 Website</label>
                    <div className="collapsible-body">
                    <span>- An infosite that has an admin side for configuration.</span>
                    </div>
                </div>
                <div className="collapsible">
                    <input id="collapsible4" type="checkbox" name="collapsible"/>
                    <label htmlFor="collapsible4" className="white">Accounting System</label>
                    <div className="collapsible-body">
                    <span>A system that allows you to record incomes and expenses, track them and viewing reports</span>
                    </div>
                </div>
                <div className="collapsible">
                    <input id="collapsible5" type="checkbox" name="collapsible"/>
                    <label htmlFor="collapsible5" className="white">HR Management System</label>
                    <div className="collapsible-body">
                    <span>a management system that tracks attendances, leaves, and attachments.</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
        
    )
  }
}

export default about
