import React from 'react'
import Card, { CardContent } from 'material-ui/Card'

const styles = {
  card: {
    height: 200
  }
}

export default props => (
    <div className='animated fadeIn'>
    
    <Card raised={true} style={styles.card}>
      <CardContent>Beta</CardContent>
    </Card>
    </div>
)