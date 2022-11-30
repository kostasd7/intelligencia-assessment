import React, { ChangeEvent } from 'react'
import Pagination from '@mui/material/Pagination'
import Grid from '@mui/material/Grid'
import { useDispatch, useSelector } from 'react-redux'
import { setPage } from '../actions/setPage'
import { TRootState } from '../reducers'
import { IPageState } from '../interfaces/IPageState'
import { ILoadingState } from '../interfaces/ILoadingState'

export const Footer: ({ maxPage }: { maxPage: number }) => JSX.Element = ({ maxPage }: { maxPage: number }) => {
  const page = useSelector<TRootState, IPageState['page']>(
    (state) => state.pageReducer.page
  )
  const loading = useSelector<TRootState, ILoadingState['loading']>(
    (state) => state.loadingReducer.loading
  )
  const dispatch = useDispatch()
  const onChange = (event: ChangeEvent<unknown>, page: number): void => {
    dispatch(setPage(page))
  }

  return (
      <footer>
       <Grid container justifyContent="center" style={{ padding: '20px 60px' }}>
        <Pagination count={maxPage} page={page} size="large" disabled={loading} showFirstButton showLastButton onChange={onChange} />
       </Grid>
      </footer>
  )
}

export default Footer
