import { ILoadingState } from '../interfaces/ILoadingState'
import { ISetLoadingAction } from '../interfaces/ISetLoadingAction'
import { Action } from '../constants/Action'

const initialState = {
  loading: false
}

export const loadingReducer = (state: ILoadingState = initialState, action: ISetLoadingAction): ILoadingState => {
  switch (action.type) {
    case Action.SET_LOADING: {
      return { ...state, loading: action.payload }
    }
    default:
      return state
  }
}
