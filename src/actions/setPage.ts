import { Action } from '../constants/Action'
import { ISetPageAction } from '../interfaces/ISetPageAction'
import { IPageState } from '../interfaces/IPageState'

export const setPage = (page: IPageState['page']): ISetPageAction => ({
  type: Action.SET_PAGE,
  payload: page
})
