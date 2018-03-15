import React from 'react'
import Card, { CardContent } from 'material-ui/Card'
import ExpansionPanel, { 
  // ExpansionPanelDetails,
  ExpansionPanelSummary,
  // ExpansionPanelActions
} from 'material-ui/ExpansionPanel'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
const styles = {
  card: {
    height: window.innerHeight * .72,
    background: 'linear-gradient(to top left, rgba(255,0,0,0), rgba(161,136,127,0.9))'
  }
}

export default props => (
    <div className='animated fadeIn'>
      <Card raised={true} style={styles.card}>
        <CardContent>Alpha</CardContent>
        <CardContent>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}/>
          </ExpansionPanel>
        </CardContent>
      </Card>
    </div>
)