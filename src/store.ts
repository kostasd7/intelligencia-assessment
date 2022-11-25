import { createStore } from 'redux'
import { sizeReducer } from './reducers/sizeReducer'

export const store = createStore(sizeReducer)
