import React from 'react'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Pool from '../assets/pool3.jpg'



const MediaCard = props => (
  <Card >
    <CardMedia
      style={props.media}
      image={Pool}
      title="Contemplative Reptile"
    />
    <CardContent>
      <Typography variant="headline" component="h3">
        
      </Typography>
      <Typography component="p">
        Choice Privilege Member
      </Typography>
    </CardContent>
    <CardActions>
     
    </CardActions>
  </Card>
)

export default props => (
  <div className='animated fadeIn'>
      <Card raised={true} style={props.container}>
        <CardContent>
          <MediaCard media={props.media}/>
         
        </CardContent>
      </Card>
  </div>
)