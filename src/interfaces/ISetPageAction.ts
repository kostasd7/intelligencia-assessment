import { Action } from '../constants/Action'
import { IPageState } from './IPageState'

export interface ISetPageAction {
  type: Action
  payload: IPageState['page']
}
