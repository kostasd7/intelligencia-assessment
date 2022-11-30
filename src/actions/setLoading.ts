import { Action } from '../constants/Action'
import { ISetLoadingAction } from '../interfaces/ISetLoadingAction'
import { ILoadingState } from '../interfaces/ILoadingState'

export const setLoading = (loading: ILoadingState['loading']): ISetLoadingAction => ({
  type: Action.SET_LOADING,
  payload: loading
})
