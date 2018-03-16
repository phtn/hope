import React from 'react'
import Grid from 'material-ui/Grid'
import Logo from './assets/clarion-logo.png'
import Diamond from './assets/diamond.png'

const styles = {
  header: {
    fontFamily: 'IBM Plex, serif',
    fontSize: 18,
    color: 'rgb(114,91,83)',
    textShadow: '1px 1px #ccc',
    padding: 10,
    lineHeight: '50px',
  },
  title: {

  }
}
export default props => (
  <div className='animated fadeIn' style={styles.header}>
    <Grid container>
      <Grid item xs={2}>
        <img src={Logo} alt='' height={50}  />
      </Grid>
      <Grid item xs={9}>
        The Clarion Inn & Suites
      </Grid>
      <Grid item xs={1}>
      <img src={Diamond} alt='' height={50}  />
      </Grid>
    </Grid>
  </div>
)