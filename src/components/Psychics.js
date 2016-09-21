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

  setSelectedPsychic(psychic) {
    this.props.setSelectedPsychic(psychic)
    this.props.togglePsychicDialog(true)
  }

  render() {
    const psychicInfo = [
      {
        name: 'Harley',
        timeZone: 'MDT',
        image: '/images/psychics/harley.jpg',
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
        phone: 'No phone number yet.'
      },
      {
        name: 'Elemiah',
        timeZone: 'CST',
        image: '/images/psychics/elemiah.jpg',
        description: `Hello! My name is Elemiah, the Angel of Inward Journey. I was named after the Angel Elemiah, because she is thought to be beneficial to those seeking help with traveling within and anyone on a journey of self discovery. Let me help you achieve this goal. Being a professional card reader for almost 20 years, has given me insight into events and situations that cause stress and worry. The use of my Angel cards are also used to give you confirmations on the topics and special messages your Angels and Guides wish you to know!
        Elemiah is an Ordained Minister, Reiki Master, Certified Hypnosis Practitioner, Huna student and teacher, Time Line therapy associate and certified in Radical Forgiveness. In years past, Elemiah has been a radio personality and producer for several online radio/blog talk programs. Her skills as a Medium often accelerate the messages that she receives from friends and relatives that have crossed over.
        Stay Blessed,
        Elemiah`,
        phone: 'No phone number yet.'
      }
    ]
    return (
      <div>
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
        <form>
          <script
            src="https://checkout.stripe.com/checkout.js" className="stripe-button"
            data-key="pk_test_yoii5LoMXjZxA3R4jPRaitzj"
            data-amount="999"
            data-name="Demo Site"
            data-description="Widget"
            data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
            data-locale="auto">
          </script>
        </form>
      </div>
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


// <Dialog
//   className='psychicDialogOuterClass'
//   contentClassName='contentClass'
//   overlayClassName='overlayClass'
//   title={`Call ${this.props.selectedPsychic.name}: ${this.props.selectedPsychic.phone}`}
//   titleClassName='psychicDialogTitle'
//   modal={false}
//   bodyStyle={{overflow: 'auto', position: 'relative'}}
//   repositionOnUpdate={false}
//   autoScrollBodyContent={true}
//   autoDetectWindowHeight={true}
//   actions={[
//     <FlatButton
//       label='SUBMIT PAYMENT'
//       className='dialogButton'
//       keyboardFocused={true}
//       />,
//     <FlatButton
//       label='CLOSE'
//       className='dialogButton'
//       keyboardFocused={true}
//       onTouchTap={this.togglePsychicDialog.bind(this)}
//       />
//   ]}
//   actionsContainerClassName='psychicDialogActions'
//   open={this.props.showPsychicDialog}
//   onRequestClose={this.togglePsychicDialog.bind(this)}
//   bodyClassName='psychicDialog'
//   >
//   <p>{this.props.selectedPsychic.description}</p>
// </Dialog>
