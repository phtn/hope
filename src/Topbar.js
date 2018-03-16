import React from 'react'
import Grid from 'material-ui/Grid'
import Logo from './assets/clarion-logo.png'
const styles = {
  header: {
    fontFamily: 'IBM Plex, serif',
    fontSize: 24,
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
      <Grid item xs={1}>
        <img src={Logo} alt='' height={50}  />
      </Grid>
      <Grid item xs={8}>
        The Clarion Inn & Suites
      </Grid>
      <Grid item xs={3}>
        test
      </Grid>
    </Grid>
  </div>
)