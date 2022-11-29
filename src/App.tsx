import React, { useEffect } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { getTerms } from './api/terms'
import { useSelector } from 'react-redux'
import { ISizeState } from './reducers/sizeReducer'
import { IPageState } from './reducers/pageReducer'
import { TRootState } from './reducers'

const App: () => JSX.Element = () => {
  const size = useSelector<TRootState, ISizeState['size']>(
    (state) => state.sizeReducer.size
  )
  const page = useSelector<TRootState, IPageState['page']>(
    (state) => state.pageReducer.page
  )

  useEffect(() => {
    getTerms(page, size)
      .then(console.log).catch(console.error)
  }, [page, size])

  return (
    <>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
    </>
  )
}

export default App
