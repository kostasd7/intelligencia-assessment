import { Action } from '../constants/Action'
import { ISizeState } from '../reducers/sizeReducer'

export interface ISetSizeAction { type: Action, payload: ISizeState['size'] }

export const setSize = (size: ISizeState['size']): ISetSizeAction => ({
  type: Action.SET_SIZE,
  payload: size
})
