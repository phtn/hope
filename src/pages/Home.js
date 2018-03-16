import React from 'react'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Pool from '../assets/pool3.jpg'

const settings = {
  dots: false,
  infinite: false,
  speed: 700,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  initialSlide: 0
}

const MediaCard = props => (
  <Card >
    <CardMedia
      style={props.media}
      image={Pool}
      title="Contemplative Reptile"
    />
    <CardContent>
     
    </CardContent>
    <CardActions>
     
    </CardActions>
  </Card>
)

const HomeSlides = props => (
  <Slider {...settings}>
    <div><MediaCard media={props.media}/></div>
    <div>Test 2</div>
  </Slider>
)

export default props => (
  <div className='animated fadeIn'>
      <Card raised={true} style={props.container}>
        <CardContent>
          
          <HomeSlides {...props}/>
        </CardContent>
      </Card>
  </div>
)