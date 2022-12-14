import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import userReducer from '../reducers/userReducer'
import authReducer from '../reducers/authReducer'
import blogReducer from '../reducers/blogReducer'
import notificationReducer from '../reducers/notificationReducer'
const decreaser = combineReducers({
  user: authReducer,
  users: userReducer,
  blog: blogReducer,
  notification: notificationReducer
})
const store = createStore(decreaser, composeWithDevTools(applyMiddleware(thunk)))
export default store
