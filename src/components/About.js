import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Link } from 'react-router'
import {
  Paper,
  Card,
  CardMedia,
  CardTitle,
  Dialog,
  FlatButton
} from 'material-ui'

class About extends Component {

  toggleCardDialog() {
    this.props.toggleCardDialog(!this.props.showCardDialog)
  }

  render() {
    return (
      <div>
        <div className='aboutContainer'>
          <Card className='aboutCard'>
            <CardMedia
              overlay={<CardTitle title='About Rocky Mountain Psychics' />}
              >
            </CardMedia>
          </Card>
          <Paper className='aboutForm' zDepth={5}>
            <p>
              Rocky Mountain Psychics LLC wants to make sure you are satisfied with your reading. We hand select and screen every single psychic working for Rocky Mountain Psychics to ensure extraordinary talent available to you.
            </p>
            <p>
              Yes, even psychics and energy can have an off day. If  you are not completely satisfied with your reading, we want the chance to make it right and provide several options for you. You can choose to have another reading with the same psychic on a different day, choose and schedule another psychic of your choice, or make a formal request for a refund if you stopped your reading within the first five minutes. Your time is valuable and so is your psychic's, so we want a winning and postive outcome for all.
            </p>
            <p>
              Please contact us at <a href='mailto:info@rockymountainpsychics.com'>info@rockymountainpsychics.com</a> and your concerns will be addressed by our wonderful staff. We would also love to hear about your positive readings and experiences. Feel free to reach out, give us a testimonial, and share. The only tips we accept are referrals and they are greatfully appreciated. Each call time is determined by you since this reading is all about you and how we may be of service.
            </p>
            <p>
              Thank you for considering doing business with us!
            </p>
            <p>Blessings to you light being!</p>
            <h1>
              <span>Call us!</span>
              <span>1-888-334-8145</span>
            </h1>
          </Paper>

          <div className="container aboutGrid">
            <div className="row row-centered">
              <Link to='/psychics'>
                <div className={`col-xs-${this.props.gridCols.bootStrap} col-centered`}><div className="item psychic"><div className="content">
                  <div>
                    <h2>Rocky Mountain Psychics</h2>
                    <p> Meet your Psychics! Review our Psychic Reader Bio's to ensure the right fit for your individual needs.</p>
                  </div>
                </div></div></div>
              </Link>
              <div onClick={this.toggleCardDialog.bind(this)} className={`col-xs-${this.props.gridCols.bootStrap} col-centered cardCol`}><div className="item cards"><div className="content">
                <div>
                  <h2>10 Minute Reading Sample Layout</h2>
                  <p>No two readers or readings are the same, but here is a sample picture of a 10 minute reading 3-card spread for Past, Present, and Future.</p>
                </div>
              </div></div></div>
              <div className={`col-xs-${this.props.gridCols.bootStrap} col-centered`}><div className="item community"><div className="content">
                <div>
                  <h2>Community and Events</h2>
                  <p>Coming Soon! Please check back often for availability with local and community events across the nation. Rocky Mountain Psychics LLC will soon be traveling to your town for larger group event readings with our top talent!</p>
                </div>
              </div></div></div>
            </div>
          </div>

        </div>
        <Dialog
          title='10 Minute Reading Sample Layout'
          actions={[
            <FlatButton
              label='CLOSE'
              className='dialogButton'
              keyboardFocused={true}
              onTouchTap={this.toggleCardDialog.bind(this)}
              />
          ]}
          modal={false}
          open={this.props.showCardDialog}
          onRequestClose={this.toggleCardDialog.bind(this)}
          >
          <img src="/images/cards.JPG" alt="10 Minute Reading Sample Layout" className="dialogImg"/>
        </Dialog>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    gridCols: state.material_ui.gridCols,
    showCardDialog: state.material_ui.showCardDialog
  }
}

export default connect(mapStateToProps, actions)(About)
