import { combineReducers } from 'redux'
import { pageReducer } from './pageReducer'
import { sizeReducer } from './sizeReducer'
import { loadingReducer } from './loadingReducer'

export const rootReducer = combineReducers({
  pageReducer,
  sizeReducer,
  loadingReducer
})

export type TRootState = ReturnType<typeof rootReducer>
