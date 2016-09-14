import axios from 'axios'
import { HOST } from '../helpers/constants'

import {
  TOGGLE_TABS,
  SET_CURRENT_TAB,
  TOGGLE_SIDE_NAV,
  SET_GRID_COLS,
  TOGGLE_CARD_DIALOG
} from './types'

export function toggleTabs(bool) {
  return {
    type: TOGGLE_TABS,
    payload: bool
  }
}

export function setCurrentTab(currentTab) {
  return {
    type: SET_CURRENT_TAB,
    payload: currentTab
  }
}

export function toggleSideNav(bool) {
  return {
    type: TOGGLE_SIDE_NAV,
    payload: bool
  }
}

export function toggleCardDialog(bool) {
  return {
    type: TOGGLE_CARD_DIALOG,
    payload: bool
  }
}

export function setGridCols(cols) {
  return {
    type: SET_GRID_COLS,
    payload: cols
  }
}
