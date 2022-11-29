import { ISetSizeAction } from '../actions/setSize'
import { Default } from '../constants/Default'
import { Action } from '../constants/Action'

export interface ISizeState {
  size: number
}

const initialState = {
  size: Default.SIZE
}

export const sizeReducer = (state: ISizeState = initialState, action: ISetSizeAction): ISizeState => {
  switch (action.type) {
    case Action.SET_SIZE: {
      return { ...state, size: action.payload }
    }
    default:
      return state
  }
}
