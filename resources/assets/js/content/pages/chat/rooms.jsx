import React from 'react'
import { Link } from 'react-router-dom'
import io from 'socket.io-client'
import TypeWriterComponent from '../../design/typeWriterComponent'

class rooms extends React.Component {
    _isMounted = true;
    constructor(props){

        super(props)
        this.state= {
            title: "Room List",
            roomLinks: [],
            roomList:[],
            room:'',
            serverUrl: 'https://139.162.120.153:3000'
        }
            
        this.createRoom = this.createRoom.bind(this);
        this.socket = io(this.state.serverUrl, { transports: ['websocket', 'polling', 'flashsocket']})
        this.generateRooms = this.generateRooms.bind(this);
        }
    
    componentDidMount() {

       this.socket.on('getRoomList', (roomList) => {
            this.generateRooms(roomList)
            
        })    
    }
    componentWillUnmount() {
        this._isMounted = false;
    } 
  
    generateRooms(roomList) {   
        const roomLinks = [];
        Object.entries(roomList).map((roomData, index) => {
            roomLinks.push(<Link to={"chat/" + roomData[0]} className="paper-btn  uk-margin-left m20 uk-width-medium" key ={index}>
                {roomData[0]} <br/> <span className="uk-text-small uk-align-right">In Lobby: {Object.keys(roomData[1]).length}</span>
                </Link>);
         
        })
        if (this._isMounted === false) return 
        this.setState({roomLinks: roomLinks, roomList: roomList})    
    }
    
    async createRoom() {
        const room = this.state.room;
        if(!(room in this.state.roomList) === true) {
            window.sessionStorage.setItem("roomname", room);
            this.props.history.push("/chat/" + room);
        } else {
            alert("Room already exists")
        }    
    }

    render() {
        return (
            <div>
                <div className="uk-text-center uk-text-center">
                    <h3><TypeWriterComponent textToType = {this.state.title}/></h3>
                </div>
                <div className="uk-text-center">
                <label className="paper-btn margin" htmlFor="modal-1" style={{border:'none'}}><span  uk-icon="icon: plus-circle; ratio: 1.5"></span></label>
                </div>
                <div className="border-white white uk-flex-center  uk-child-width-1-3" data-uk-grid>
                    {this.state.roomLinks}
                </div>
                <input className="modal-state" id="modal-1" type="checkbox"/>
                <div className="modal">
                    <label className="modal-bg" htmlFor="modal-1"></label>
                    <div className="modal-body">
                        <label className="btn-close" htmlFor="modal-1">X</label>
                        <h4 className="modal-title">Create a Room</h4>
                        <div className="uk-margin">
                            <label className="uk-form-label " htmlFor="form-stacked-text">Room Name</label>
                            <div className="uk-form-controls">
                                <input className="w300 input-block border-5" type="text" placeholder="Room Name" autoComplete="off" onChange={(e)=>{this.setState({room:e.target.value})}} />
                            </div>
                        </div>
                        <button className="uk-align-center" onClick={this.createRoom.bind(this)}>Create</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default rooms
