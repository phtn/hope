import React from 'react'
import Card, { CardContent } from 'material-ui/Card'
import ExpansionPanel, { 
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanelActions
} from 'material-ui/ExpansionPanel'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
const styles = {
  card: {
    height: 400,
    backgroundColor: '#eee'
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