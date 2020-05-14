import { combineReducers } from 'redux'
import app from './app'
import dictionary from './dictionary'

const appReducer = combineReducers({
  app,
  dictionary,
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer
