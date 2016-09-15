import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import {
  GridList,
  GridTile,
  Dialog,
  FlatButton,
  RaisedButton,
  FontIcon,
  List,
  ListItem,
  Divider,
  Avatar,
  Paper
} from 'material-ui'
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble'

class Psychics extends Component {

  togglePsychicDialog() {
    this.props.togglePsychicDialog(!this.props.showPsychicDialog)
  }

  setSelectedPsychic(a,b) {
    console.log('A', a, 'B', b);
    this.props.setSelectedPsychic(a)
    this.props.togglePsychicDialog(true)
  }

  render() {
    const psychicInfo = [
      {
        name: 'Dina Faye',
        timeZone: 'MDT',
        image: '/images/psychics/dina.jpg'
      },
      {
        name: 'Crystal Meshell',
        timeZone: 'PDT',
        image: '/images/psychics/crystal.jpg'
      }
    ]

    return (
      <Paper className='psychicList'>
        <List>
          <div className='psychicListHeader'>
            <h1>Our Psychics</h1>
          </div>
          {psychicInfo.map((psychic) => {
            return (
              <ListItem className='psychicListItem' key={psychic.name} onClick={this.setSelectedPsychic.bind(this, psychic)}>
                <span>
                  <img src={psychic.image} className='psychicListItemImage' alt=""/>

                  <p className='psychicListItemText'>
                    {psychic.name}
                  </p>
                  <p className='psychicListTimeZone'>
                    Time Zone: {psychic.timeZone}
                  </p>
                </span>
              </ListItem>
            )
          })}

        </List>
        <Dialog
          title={this.props.selectedPsychic.name}
          actions={[
            <FlatButton
              label='CLOSE'
              className='dialogButton'
              keyboardFocused={true}
              onTouchTap={this.togglePsychicDialog.bind(this)}
              />
          ]}
          modal={false}
          open={this.props.showPsychicDialog}
          onRequestClose={this.togglePsychicDialog.bind(this)}
          >
        </Dialog>
      </Paper>
    )
  }
}

function mapStateToProps(state) {
  return {
    gridCols: state.material_ui.gridCols,
    selectedPsychic: state.psychic.selectedPsychic,
    showPsychicDialog: state.psychic.showPsychicDialog
  }

}

export default connect(mapStateToProps, actions)(Psychics)








// <ListItem className='psychicListItem'>
//   <span>
//     <img src="/images/psychics/dina.jpg" className='psychicListItemImage'alt=""/>
//
//     <p className='psychicListItemText'>
//       Dina Faye
//     </p>
//     <p className='psychicListTimeZone'>
//       Time Zone: MDT
//     </p>
//   </span>
// </ListItem>
// <ListItem className='psychicListItem'>
//   <span>
//     <img src="/images/psychics/crystal.jpg" className='psychicListItemImage'alt=""/>
//
//     <p className='psychicListItemText'>
//       Crystal Meshell
//     </p>
//     <p className='psychicListTimeZone'>
//       Time Zone: PDT
//     </p>
//   </span>
// </ListItem>
