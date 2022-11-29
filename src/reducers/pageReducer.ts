import { Default } from '../constants/Default'
import { Action } from '../constants/Action'
import { IPageState } from '../interfaces/IPageState'
import { ISetPageAction } from '../interfaces/ISetPageAction'

const initialState = {
  page: Default.PAGE
}

export const pageReducer = (state: IPageState = initialState, action: ISetPageAction): IPageState => {
  switch (action.type) {
    case Action.SET_PAGE: {
      return { ...state, page: action.payload }
    }
    default:
      return state
  }
}
