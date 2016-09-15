import {
  SET_SELECTED_PSYCHIC,
  TOGGLE_PSYCHIC_DIALOG
} from '../actions/types'

const initialState = {
  selectedPsychic: {},
  showPsychicDialog: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_PSYCHIC:
    return { ...state, selectedPsychic: action.payload }
    break
    case TOGGLE_PSYCHIC_DIALOG:
    return { ...state, showPsychicDialog: action.payload }
    break
  }
  return { ...state }
}
