import { ISetSizeAction } from '../actions/setSize'
import { Default } from '../constants/Default'

export interface SizeState {
  size: number
}

const initialState = {
  size: Default.SIZE
}

export const sizeReducer = (state: SizeState = initialState, action: ISetSizeAction): SizeState => {
  switch (action.type) {
    case 'SET_SIZE': {
      return { ...state, size: action.payload }
    }
    default:
      return state
  }
}
