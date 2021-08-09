import React from 'react';
import io from 'socket.io-client'
import axios from 'axios'
class chatRoom extends React.Component {
  _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.getMessage()
    }
  }
  constructor(props){
      super(props)  
      this.state = {
        roomname:this.props.match.params.id,
        users: {},
        messages:[],
        inputMessage:'',
        currentUser:'',
        serverUrl: 'http://localhost:3000'
      }
      this.socket = io('http://localhost:3000', { transports: ['websocket', 'polling', 'flashsocket']})
      this.joinRoom = this.joinRoom.bind(this);
      this.formatMessage = this.formatMessage.bind(this);
      this.getMessage = this.getMessage.bind(this);
    }

    componentDidMount() {
      this.joinRoom();
      this.socket.on('getUsers', (users) => {
        this.setState({users:users})
      }) 
   
      this.socket.on('getMessage', (params) => {
        console.log()
        this.formatMessage("getMessage", params)
      }) 
      this.socket.on('userDisconnect', (user) => {
        this.formatMessage("userDisconnect", user)
      })    
    }

    componentWillUnmount() { 
      this.socket.close();
    }

    formatMessage(type, param) {
      const {messages} = this.state
      const connectionMessage = {userConnect:' has connected', userDisconnect: ' has diconnected'}
      const align = type !== 'getMessage' ? ' uk-align-center' : ' border border-white border-6 border-primary align-left'
      const messageContent = (type in connectionMessage) ? param + connectionMessage[type] : param.user + ': ' + param.message;
      messages.push(<div className={" uk-width-auto uk-padding-small uk-margin-small  fit-content" + align} key={Math.random()}>
        {messageContent}
        </div>);
        this.setState({messages: messages})
    }

    getMessage() {
      const {roomname, currentUser, inputMessage, messages} = this.state
      if (inputMessage.trim() !== '') {
        messages.push(<p className="border border-white border-6 border-primary uk-padding-small uk-margin-small align-right fit-content" key={Math.random()}>
        {inputMessage}
        </p>);
        this.setState({messages: messages, inputMessage: ''})
        this.socket.emit('sendMessage',({roomname, currentUser, inputMessage}))
      }
    }
   
    async joinRoom() {
      const room = this.state.roomname;
      var username = prompt("Please enter your username");
      if (username !== null && username.trim() !== '') {
        const result = await axios.post(this.state.serverUrl + '/fetchroom', {room, username})
        if(result.data !== true && username.length < 11) {
          this.socket.emit('joinRoom', {room, username})
          this.socket.on('userConnect', (user) => {
            this.setState({currentUser: username}, ()=> { 
              this.formatMessage('userConnect', user);
            });
           
          }) 
        } else {
          var message =  username.length > 10 ? 'Username should not exceed 10 characters' : 'Username already exists in this room';
            alert(message)
            this.joinRoom();
        
        } 
      } else {
        this.props.history.push("/rooms");
      } 
    } 
  
    render() {
      const {users, currentUser} = this.state
      var userList = []
      for (const [key, value] of Object.entries(users)) {
        var username  = value === currentUser  ? <p key={key}><u>{value}</u></p> : <p key={key}>{value}</p> 
        userList.push(username);
      }
      return (
        <div className=" "  uk-grid="true">
          <div className="w300">
            <div className="border border-white border-6 border-primary uk-padding uk-text-center"> {userList}</div>
          </div>   
          <div className="uk-width-3-4@s " >
            <div className="card uk-height-large"  uk-height-viewport="offset-bottom: 30">
              <div className="card-body uk-panel-scrollable flex" >
                {this.state.messages}
              </div>
              <div className="uk-flex uk-padding-small">
                <div className="uk-width-expand">
                  <input className="border-white uk-width-expand" type="text" id="paperInputs2" onKeyDown={(e)=>{this._handleKeyDown(e)}} value={this.state.inputMessage} onChange={(e)=>{this.setState({inputMessage:e.target.value})}} autoComplete="off"/>
                </div>
                <div className="uk-width-auto uk-margin-left">
                  <button className="paper-btn paper-btn" onClick={this.getMessage.bind(this)}><span uk-icon="chevron-right"></span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      
      )
    }
}

export default chatRoom
