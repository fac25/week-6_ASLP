import '../styles/globals.css'
import React from 'react'
const globalState = {
  amount: 0,
}

const globalStateContext = React.createContext(globalState)
// const dispatchStateContext = React.createContext(undefined)

function MyApp({ Component, pageProps }) {
  return (
  <globalStateContext.Provider value={globalState}>
  <Component {...pageProps} />
  </globalStateContext.Provider>
)}

export default MyApp
