import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import AddToBasket from './addToBasketBtn'
import { itemCount, setItemCount } from './layout'
import useSWR from 'swr'
import React from 'react'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Products() {
    // const { amount } = React.useContext(globalStateContext)
    // console.log(amount)
    console.log(React.useContext(globalStateContext))
    const { data, error } = useSWR('/api/plants', fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <>
            {data.map((obj) => (
                <div className={utilStyles.card} key={obj.id}>
                    {/* Amount: {amount} */}
                    <Image
                        priority
                        src={obj.image_link}
                        className={utilStyles.cardImg}
                        height={144}
                        width={144}
                        alt=""
                    />
                    <div className={utilStyles.cardDetails}>
                        <h2>{obj.name}</h2>
                        <span>£{obj.price}</span>
                        <AddToBasket />
                    </div>
                </div>
            ))}
        </>
    )
}
