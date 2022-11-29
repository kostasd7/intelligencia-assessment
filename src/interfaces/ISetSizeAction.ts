import { Action } from '../constants/Action'
import { ISizeState } from './ISizeState'

export interface ISetSizeAction {
  type: Action
  payload: ISizeState['size']
}
