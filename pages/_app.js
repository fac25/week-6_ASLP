import '../styles/globals.css'
import React, { useState } from 'react'

export const globalStateContext = React.createContext()
// const dispatchStateContext = React.createContext(undefined)

function MyApp({ Component, pageProps }) {
    const [amount, setAmount] = useState(0)
    return (
        <globalStateContext.Provider value={amount}>
            <Component {...pageProps} />
        </globalStateContext.Provider>
    )
}

export default MyApp
