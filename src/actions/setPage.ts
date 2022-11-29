import { Action } from '../constants/Action'
import { IPageState } from '../reducers/pageReducer'

export interface ISetPageAction { type: Action, payload: IPageState['page'] }

export const setPage = (page: IPageState['page']): ISetPageAction => ({
  type: Action.SET_PAGE,
  payload: page
})
