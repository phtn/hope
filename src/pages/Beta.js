import React from 'react'
import Card, { CardContent } from 'material-ui/Card'

// const styles = {
//   card: {
//     height: window.innerHeight * .72,
//     background: 'linear-gradient(to top left, rgba(255,0,0,0), rgba(114,91,83,0.9))'
//   }
// }

export default props => (
  <div className='animated fadeIn'>
    <Card raised={true} style={props.container}>
      <CardContent>Beta</CardContent>
    </Card>
  </div>
)