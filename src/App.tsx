import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
// import { getTerms } from './api/terms'

const App: () => JSX.Element = () => {
  // const data2 = getTerms(2, 5)
  //   .then(console.log)

  return (
    <>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
    </>
  )
}

export default App
