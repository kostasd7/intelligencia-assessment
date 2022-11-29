import React, { ChangeEvent } from 'react'
import Pagination from '@mui/material/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { setPage } from '../actions/setPage'
import { TRootState } from '../reducers'
import { IPageState } from '../interfaces/IPageState'

export const Footer: ({ maxPage }: { maxPage: number }) => JSX.Element = ({ maxPage }: { maxPage: number }) => {
  const page = useSelector<TRootState, IPageState['page']>(
    (state) => state.pageReducer.page
  )
  const dispatch = useDispatch()
  const onChange = (event: ChangeEvent<unknown>, page: number): void => {
    dispatch(setPage(page))
  }

  return (
      <footer>
        <Pagination count={maxPage} page={page} size="large" showFirstButton showLastButton onChange={onChange} />
      </footer>
  )
}

export default Footer
