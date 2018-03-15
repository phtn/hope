import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
// import AppBar from 'material-ui/AppBar'
// import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'
// import Icon from 'material-ui/Icon'
// import Typography from 'material-ui/Typography'
import './animated.css'

import Alpha from './pages/Alpha'
import Beta from './pages/Beta'



const navStyles = {
  textDecoration: 'none',
}
const styles={
  nav:{
    // margin: 20,
    backgroundColor: 'teal'
  },
  button: {
    
    color: '#eee',
    // fontWeight: 'bolder'
  },
  link: {textDecoration: 'none',},
  page: {
    margin: 5
  }
}
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div className='animated fadeInDown nav' style={styles.nav}>
        <NavLink activeStyle={navStyles} style={styles.link} to='/'><Button color='default' style={styles.button}>clarion</Button></NavLink>
        <NavLink activeStyle={navStyles} style={styles.link} to='/b'><Button color='default' style={styles.button}>rooms</Button></NavLink>
        </div>
          <div style={styles.page}>
            <Route exact path='/' component={Alpha}/>
            <Route path='/b' component={Beta}/>
          </div>
      </div>
      </Router>
    )
  }
}

export default App
