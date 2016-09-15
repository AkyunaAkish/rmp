import {
  TOGGLE_TABS,
  TOGGLE_SIDE_NAV,
  SET_CURRENT_TAB,
  SET_GRID_COLS,
  TOGGLE_CARD_DIALOG
} from '../actions/types'

const initialState = {
  showTabs: true,
  showSideNav: false,
  currentTab: 0,
  gridCols: {
    bootStrap: 4,
    materialUI: 3
  },
  showCardDialog: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_TABS:
    return { ...state, showTabs: action.payload }
    break
    case TOGGLE_SIDE_NAV:
    return { ...state, showSideNav: action.payload }
    break
    case SET_CURRENT_TAB:
    return { ...state, currentTab: action.payload }
    break
    case SET_GRID_COLS:
    return { ...state, gridCols: action.payload }
    break
    case TOGGLE_CARD_DIALOG:
    return { ...state, showCardDialog: action.payload }
    break
  }
  return { ...state }
}
