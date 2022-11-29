import { Action } from '../constants/Action'
import { ISetSizeAction } from '../interfaces/ISetSizeAction'
import { ISizeState } from '../interfaces/ISizeState'

export const setSize = (size: ISizeState['size']): ISetSizeAction => ({
  type: Action.SET_SIZE,
  payload: size
})
