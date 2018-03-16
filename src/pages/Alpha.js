import React from 'react'
import Card, { CardContent } from 'material-ui/Card'


export default props => (
    <div className='animated fadeIn'>
      <Card raised={true} style={props.container}>
        <CardContent>Alpha</CardContent>
      </Card>
    </div>
)