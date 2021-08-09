import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import home from './pages/home'
import contact from './pages/contact'
import about from './pages/about'
import rooms from './pages/chat/rooms'
import notFoundPage from './pages/notFoundPage'
import Chat from './pages/chat/chatRoom'
import ParticleComponent from './design/particleComponent'
import Navbar from './design/navbar'
export class Router extends Component {
    render() {
      return (
        <div>
          <ParticleComponent />
          <div className="uk-flex uk-flex-column uk-padding-large max-height">
            <Navbar/>
              <Switch>
                <Route exact path='/' component={home} />
                <Route exact path='/about' component={about} />
                <Route exact path='/contact' component={contact}/>
                <Route exact path='/rooms' component={rooms} />
                <Route exact path='/chat/:id' component={Chat}/>
                <Route path='*' component={notFoundPage} />
              </Switch>
          </div>
        </div>
      )
    }
  }
  
  export default Router
  