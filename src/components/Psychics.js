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
        image: '/images/psychics/dina.jpg',
        description: 'No description yet.',
        phone: 'No phone number yet.'
      },
      {
        name: 'Crystal Meshell',
        timeZone: 'PDT',
        image: '/images/psychics/crystal.jpg',
        description: `Lightworker and guide to the angelic realm.
        Crystal has been working with the tarot deck for 15 years. She specializes in love, money,health, and career. She is a reiki energy healer; including prayer, remote viewing,color ray healing, and work with the Angels and Archangels in each session.
        She has been drawn to the healing and esoteric arts since the age of 12 and her devotion to the Divine is timeless. Her specialty is to help uncover the unconscious beliefs  systems or obstacles so that your True Self can
        come forth and you can more easily create the life you long for.`,
        phone: '310-309-1996'
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
          className='psychicDialogOuterClass'
          contentClassName='contentClass'
          overlayClassName='overlayClass'
          title={`Call ${this.props.selectedPsychic.name}: ${this.props.selectedPsychic.phone}`}
          titleClassName='psychicDialogTitle'
          modal={false}
          bodyStyle={{overflow: 'auto', position: 'relative'}}
          repositionOnUpdate={false}
          autoScrollBodyContent={true}
          autoDetectWindowHeight={true}
          actions={[
            <FlatButton
              label='SUBMIT PAYMENT'
              className='dialogButton'
              keyboardFocused={true}
              />,
            <FlatButton
              label='CLOSE'
              className='dialogButton'
              keyboardFocused={true}
              onTouchTap={this.togglePsychicDialog.bind(this)}
              />
          ]}
          actionsContainerClassName='psychicDialogActions'
          open={this.props.showPsychicDialog}
          onRequestClose={this.togglePsychicDialog.bind(this)}
          bodyClassName='psychicDialog'
          >
          <p>{this.props.selectedPsychic.description}</p>
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
