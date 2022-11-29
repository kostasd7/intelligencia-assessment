import React, { ChangeEvent } from 'react'
import Pagination from '@mui/material/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { setPage } from '../actions/setPage'
import { IPageState } from '../reducers/pageReducer'
import { TRootState } from '../reducers'

export const Footer: () => JSX.Element = () => {
  const page = useSelector<TRootState, IPageState['page']>(
    (state) => state.pageReducer.page
  )
  const dispatch = useDispatch()
  const onChange = (event: ChangeEvent<unknown>, page: number): void => {
    dispatch(setPage(page))
  }

  return (
      <footer>
        <Pagination count={10} page={page} size="large" showFirstButton showLastButton onChange={onChange} />
      </footer>
  )
}

export default Footer
