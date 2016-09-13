import React, { Component, PropTypes } from 'react'
import * as actions from '../actions'
import { connect } from 'react-redux'
import { Router } from 'react-router'
import { determineTab } from '../helpers/determineTab'
import { browserHistory } from 'react-router'
import {
  AppBar,
  Tabs,
  Tab,
  Drawer,
  MenuItem,
  Paper,
  Card,
  CardMedia,
  CardTitle
} from 'material-ui'

class Layout extends Component {
  constructor(props) {
    super(props)
    this.props.setCurrentTab(determineTab(this.props.location.pathname))
  }

  static contextTypes = {
    router: PropTypes.object
  }

  checkDimensions(dimensions) {
    if (dimensions < 500) {
      this.props.toggleTabs(false)
    } else {
      if (this.props.showSideNav) {
        this.toggleSideNav()
      }
      this.props.setCurrentTab(determineTab(this.props.location.pathname))
      this.props.toggleTabs(true)
    }
  }

  componentWillMount() {
    this.checkDimensions(window.innerWidth)
    window.addEventListener('resize', () => {
      this.checkDimensions(window.innerWidth)
    })
    browserHistory.listen((location) => {
      this.props.setCurrentTab(determineTab(location.pathname))
    })
  }

  toggleSideNav() {
    this.props.toggleSideNav(!this.props.showSideNav)
  }

  switchComponent(link) {
    this.context.router.push(link)
    if (this.props.showSideNav) {
      this.toggleSideNav()
    }
  }

  handleTabChange(tabValue) {
    this.props.setCurrentTab(tabValue)
  }

  render() {
    const underLineStyle = {
      backgroundColor: '#EEF1EF'
    }

    return (
      <div>
        <AppBar
          className='navBar'
          title={this.props.showTabs ? <img src='images/RMPBLUEWHITE.png' className='navLogo'/> : null}
          iconElementRight={!this.props.showTabs ? <img src='images/RMPBLUEWHITE.png' className='navLogo'/> : null}
          showMenuIconButton={!this.props.showTabs}
          onLeftIconButtonTouchTap={this.toggleSideNav.bind(this)}
          children={this.props.showTabs ? [
            <Tabs
              key={1}
              inkBarStyle={underLineStyle}
              value={this.props.currentTab}
              onChange={this.handleTabChange.bind(this)}
              >
              <Tab
                label='ABOUT'
                value={0}
                className='navTabs'
                onClick={() => this.switchComponent('/')}
                />
              <Tab
                label='PSYCHICS'
                value={1}
                className='navTabs'
                onClick={() => this.switchComponent('/psychics')}
                />
            </Tabs>
          ] : []}
          />

        <Drawer
          open={this.props.showSideNav}
          docked={false}
          onRequestChange={() => this.toggleSideNav()}
          containerClassName='sideNav'
          >
          <MenuItem
            className='sideNavItem'
            onClick={this.toggleSideNav.bind(this)}
            id='closeNavItem'>
            <p className='iconText'>CLOSE MENU</p>
          </MenuItem>
          <MenuItem
            className='sideNavItem'
            onClick={() => this.switchComponent('/')}>
            ABOUT
          </MenuItem>
          <MenuItem
            className='sideNavItem'
            onClick={() => this.switchComponent('/psychics')}>
            PSYCHICS
          </MenuItem>
        </Drawer>

        {this.props.children}

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    showTabs: state.material_ui.showTabs,
    showSideNav: state.material_ui.showSideNav,
    currentTab: state.material_ui.currentTab
  }
}

export default connect(mapStateToProps, actions)(Layout)
