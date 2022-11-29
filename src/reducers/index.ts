import { combineReducers } from 'redux'
import { pageReducer } from './pageReducer'
import { sizeReducer } from './sizeReducer'

export const rootReducer = combineReducers({
  pageReducer,
  sizeReducer
})

export type TRootState = ReturnType<typeof rootReducer>
