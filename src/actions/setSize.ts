export interface ISetSizeAction { type: 'SET_SIZE', payload: number }

export const setSize = (size: number): ISetSizeAction => ({
  type: 'SET_SIZE',
  payload: size
})
