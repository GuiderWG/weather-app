import { combineReducers, createStore } from 'redux'
import weatherReducer from './weatherReducer'

const reducers = combineReducers({
  weatherPage: weatherReducer,
})

const store = createStore(reducers)

export default store
