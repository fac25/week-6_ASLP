import '../styles/globals.css'
import React, { useState } from 'react'

export const globalStateContext = React.createContext()

function MyApp({ Component, pageProps }) {
    const [amount, setAmount] = useState(0)

    function addToCart() {
        const basket = localStorage.getItem('basket')
        const array = JSON.parse(basket)

        const sum = array
            .map((element) => element.quantities)
            .reduce((a, b) => a + b, 0)
        setAmount((amount = sum))
    }
    return (
        <globalStateContext.Provider value={amount}>
            <Component {...pageProps} />
            {/* <button onClick={addToCart}>add to cart test</button> */}
        </globalStateContext.Provider>
    )
}

export default MyApp
