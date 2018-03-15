import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from 'react-router-dom'

import './animated.css'
import Button from 'material-ui/Button'
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import HomeIcon from './assets/home.svg';
import HotelIcon from './assets/hotel.svg';
import BarIcon from './assets/glass.svg';
import Pattern from './assets/pattern.png'
import { withStyles } from 'material-ui/styles'
import { LinearProgress } from 'material-ui/Progress'

class DynamicImport extends Component {
  state = {
    component: null
  }
  componentWillMount () {
    this.props.load()
      .then((component) => {
        this.setState(() => ({
          component: component.default ? component.default : component
        }))
      })
  }
  render() {
    return this.props.children(this.state.component)
  }
}

const Home = (props) => (
  <DynamicImport load={() => import('./pages/Home')}>
    {(Component) => Component === null
      ? <LinearProgress/>
      : <Component {...props} />}
  </DynamicImport>
)

const Rooms = (props) => (
  <DynamicImport load={() => import('./pages/Alpha')}>
    {(Component) => Component === null
      ? <LinearProgress/>
      : <Component {...props} />}
  </DynamicImport>
)

const Bar = (props) => (
  <DynamicImport load={() => import('./pages/Beta')}>
    {(Component) => Component === null
      ? <LinearProgress/>
      : <Component {...props} />}
  </DynamicImport>
)

const Icon = props => (
  <div>
    <img src={props.src} alt='' height={25}/>
  </div>
)
// styles
const navStyles = {
  textDecoration: 'none',
}
const styles={
  container: {
    background: `url(${Pattern})`,
    // height: window.innerHeight
    width: 400
  },
  nav:{
    // margin: 20,
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 15,
    width: '100%'
  },
  button: {
    color: '#666',
    // fontWeight: 'bolder'
  },
  link: {textDecoration: 'none',},
  page: {
    margin: 0
  },
  title: {
    fontFamily: 'Great Vibes, cursive',
    fontSize: 30,
    color: '#A1887F',
    textShadow: '1px 1px #ccc',
    // fontWeight: 'bolder',
    padding: 20,
  }
}

class Dyna extends Component {
 state = {
   updatedHeight: 300
 }
  componentDidMount(){
    window.addEventListener('resize', ()=> {
      console.log(window.innerHeight)
    })
  }
  componentWillUnmount(){
    window.removeEventListener('resize', ()=> {
      console.log(window.innerWidth)
    })
  }
  render() {
 
    return (

      <Router>

        

        

      <div className="Dyna" style={Object.assign(this.state.updatedHeight, styles.container)}>
        <div className='animated fadeInDown' style={styles.title}>
          The Clarion Inn & Suites
        </div>
     
      <div style={styles.page}>
        <Route exact path='/' component={Home} height={400}/>
        <Route path='/rooms' component={Rooms}/>
        <Route path='/bar' component={Bar}/>
      </div>
       <BottomNavigation
        style={styles.nav}
      >
        <NavLink activeStyle={navStyles} style={styles.link} to='/'>
          <BottomNavigationAction label="Home" icon={<Icon src={HomeIcon}/> } />
        </NavLink>
        <NavLink activeStyle={navStyles} style={styles.link} to='/rooms'>
          <BottomNavigationAction label="Rooms" icon={<Icon src={HotelIcon}/>} />
        </NavLink>
        <NavLink activeStyle={navStyles} style={styles.link} to='/bar'>
          <BottomNavigationAction label="Bar" icon={<Icon src={BarIcon}/>} />
        </NavLink>
      </BottomNavigation>

      {/* <BottomNavigation
        value={value}
        onChange={this.handleChange}
        className={classes.root}
      >
        <BottomNavigationAction label="Home" value='Home' icon={<HomeIcon />} />
        <BottomNavigationAction label="Rooms" value='Rooms' icon={<HotelIcon />} />
        <BottomNavigationAction label="Bar" value='Bar' icon={<BarIcon />} />
      </BottomNavigation> */}
        <div className='animated fadeInDown nav' style={styles.nav}>

        </div>
          
      </div>
      </Router>
      
      
    )
  }
}

export default withStyles(styles)(Dyna)