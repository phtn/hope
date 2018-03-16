import React from 'react'
import Grid from 'material-ui/Grid'
import Logo from './assets/clarion-logo.png'
import Diamond from './assets/diamond.png'

const styles = {
  header: {
    padding: 10,
  },
  title: {
    fontFamily: 'IBM Plex, serif',
    fontSize: 18,
    color: 'rgb(114,91,83)',
    textShadow: '1px 1px #ccc',
  }
}
export default props => (
  <div className='animated fadeIn' style={styles.header}>
    <Grid container>
      <Grid item xs={2}>
        <img src={Logo} alt='' height={50}  />
      </Grid>
      <Grid item xs={8}>
        <h1 style={styles.title}>The Clarion Inn & Suites</h1>
      </Grid>
      
    </Grid>
  </div>
)