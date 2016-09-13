import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Paper,
  Card,
  CardMedia,
  CardTitle
} from 'material-ui'

class About extends Component {

  render() {
    return (
      <div>
        <div className='authContainer'>
          <Card className='authCard'>
            <CardMedia
              overlay={<CardTitle title='About Rocky Mountain Psychics' />}
              >
            </CardMedia>
          </Card>
          <Paper className='authForm' zDepth={5}>
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
        </div>
      </div>
    )
  }
}

export default connect()(About)
