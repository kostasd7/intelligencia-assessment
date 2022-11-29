import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import CircularProgress from '@mui/material/CircularProgress'
import { getTerms } from './api/terms'
import { useSelector } from 'react-redux'
import { IResponse } from './interfaces/IResponse'
import { TRootState } from './reducers'
import { ITerm } from './interfaces/ITerm'
import { ISizeState } from './interfaces/ISizeState'
import { IPageState } from './interfaces/IPageState'

const App: () => JSX.Element = () => {
  const size = useSelector<TRootState, ISizeState['size']>(
    (state) => state.sizeReducer.size
  )
  const page = useSelector<TRootState, IPageState['page']>(
    (state) => state.pageReducer.page
  )

  const [totalPages, setTotalPages] = useState(0)
  const [terms, setTerms] = useState<ITerm[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getTerms(page, size)
      .then((response: IResponse) => {
        setTotalPages(response.page.totalPages - 1)
        setTerms(response._embedded.terms)
      })
      .catch(console.error)
      .finally(() => {
        setLoading(false)
      })
  }, [page, size])

  return (
    <>
        <Header></Header>
        {((terms.length === 0) && loading)
          ? <CircularProgress color="primary" />
          : <>
              <Main data={terms}></Main>
              <Footer maxPage={totalPages}></Footer>
            </>
        }
    </>
  )
}

export default App
