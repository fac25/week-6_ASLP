import Image from 'next/image'
import Link from 'next/link'

import utilStyles from '../styles/utils.module.css'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Products() {
    const { data, error } = useSWR('/api/plants', fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <>
            {data.map((obj) => (
                <div className={utilStyles.card} key={obj.id}>
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
                        <addToBasketBtn />
                        <Link
                            href={
                                'products/' +
                                obj.name.toLowerCase().replace(' ', '-')
                            }
                        >
                            View product
                        </Link>
                    </div>
                </div>
            ))}
        </>
    )
}
