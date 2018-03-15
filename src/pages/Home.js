import React from 'react'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Pool from '../assets/pool3.jpg'

const styles = {
  card: {
    height: window.innerHeight * .72,
    background: 'linear-gradient(to top left, rgba(255,0,0,0), rgba(211,184,174,0.9))'
  },
  media: {
    height: 300,
  },
  cards: {
    // width: 400
  }
}

const MediaCard = props => (
  <Card style={Object.assign( styles.cards)}>
    <CardMedia
      style={styles.media}
      image={Pool}
      title="Contemplative Reptile"
    />
    <CardContent>
      <Typography variant="headline" component="h3">
        Full Bar by the Pool
      </Typography>
      <Typography component="p">
        
      </Typography>
    </CardContent>
    <CardActions>
     
    </CardActions>
  </Card>
)

export default props => (
  <div className='animated fadeIn'>
      <Card raised={true} style={styles.card}>
        <CardContent>

          <MediaCard/>
          
        </CardContent>
      </Card>
  </div>
)