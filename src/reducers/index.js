import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import materialUIReducer from './materialUIReducer'
import psychicReducer from './psychicReducer'

const rootReducer = combineReducers({
  form: formReducer,
  material_ui: materialUIReducer,
  psychic: psychicReducer
})

export default rootReducer
