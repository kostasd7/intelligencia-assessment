import { Action } from '../constants/Action'
import { ILoadingState } from './ILoadingState'

export interface ISetLoadingAction {
  type: Action
  payload: ILoadingState['loading']
}
