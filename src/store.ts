import { createStore } from 'redux'
import { rootReducer } from './reducers'

declare let window: {
  __REDUX_DEVTOOLS_EXTENSION__?: any
}

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
)
