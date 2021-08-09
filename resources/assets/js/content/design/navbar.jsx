import React from 'react'
import { Link } from 'react-router-dom'
class home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      typeMessage: "I'm Russell",
    }
  }
  render() {
    return (
      <div className='navbar uk-align-center '>
        <ul className="breadcrumb border-5 border border-white">
            <li><Link to="/">Home</Link></li> 
            <li><Link to="/about">About</Link></li> 
            <li><Link to="/contact">Contact</Link></li> 
        </ul>
      </div> 
    )
  }
}

export default home
