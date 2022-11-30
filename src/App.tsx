import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Grid from '@mui/material/Grid'
import CircularProgress from '@mui/material/CircularProgress'
import { getTerms } from './api/terms'
import { useDispatch, useSelector } from 'react-redux'
import { IResponse } from './interfaces/IResponse'
import { TRootState } from './reducers'
import { ITerm } from './interfaces/ITerm'
import { ISizeState } from './interfaces/ISizeState'
import { IPageState } from './interfaces/IPageState'
import { ILoadingState } from './interfaces/ILoadingState'
import { setPage } from './actions/setPage'
import { setLoading } from './actions/setLoading'
import { Default } from './constants/Default'

const App: () => JSX.Element = () => {
  const size = useSelector<TRootState, ISizeState['size']>(
    (state) => state.sizeReducer.size
  )
  const page = useSelector<TRootState, IPageState['page']>(
    (state) => state.pageReducer.page
  )
  const loading = useSelector<TRootState, ILoadingState['loading']>(
    (state) => state.loadingReducer.loading
  )

  const [totalPages, setTotalPages] = useState(0)
  const [terms, setTerms] = useState<ITerm[]>([])
  const dispatch = useDispatch()

  // Runs API call and handles loading
  useEffect(() => {
    dispatch(setLoading(true))
    getTerms(page, size)
      .then((response: IResponse) => {
        if (typeof response._embedded !== 'undefined') {
          setTotalPages(response.page.totalPages - 1)
          setTerms(response._embedded.terms)
        } else {
          // Go to first page in case response was empty
          dispatch(setPage(Default.PAGE))
        }
      })
      .catch(console.error)
      .finally(() => {
        dispatch(setLoading(false))
      })
  }, [page, size])

  return (
    <>
      <Header></Header>
      {
        ((terms.length === 0) && loading)
          ? <Grid container justifyContent="center" style={{ padding: '50px' }}>
              <CircularProgress color="primary" />
            </Grid>
          : <>
            <Main data={terms}></Main>
            <Footer maxPage={totalPages}></Footer>
          </>
      }
    </>
  )
}

export default App
