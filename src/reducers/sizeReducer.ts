import { Default } from '../constants/Default'
import { Action } from '../constants/Action'
import { ISizeState } from '../interfaces/ISizeState'
import { ISetSizeAction } from '../interfaces/ISetSizeAction'

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
