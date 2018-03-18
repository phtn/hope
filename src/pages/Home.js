import React from 'react'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Pool from '../assets/pool3.jpg'
import Shows from '../assets/shows.jpg'

const imageArr = [Pool, Shows]



const settings = {
  dots: false,
  infinite: false,
  speed: 700,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  initialSlide: 0
}

const MediaCard = props => (
  <Card >
    
    <CardMedia
      style={props.media}
      image={props.image}
      title="Contemplative Reptile"
    />
    
  </Card>
)

const HomeSlides = props => (
  <Slider {...settings}>
    {imageArr.map(i=> (
      <div key={i.toString()}>
        <MediaCard media={props.media} styles={props.media} image={i}/>
      </div>
    ))}
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