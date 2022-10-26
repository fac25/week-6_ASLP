import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/layout'

import useSWR from 'swr'

const fetcher =  (...args) =>  fetch(...args).then((res) => res.json())

function Plant() {
const { data, error} = useSWR('/api/plants', fetcher)
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <ul>    
    {data.map((obj)=>(
      <li key={obj.id}>
        <p>{obj.name}</p>  
        <p>{obj.price}</p>  
        <p>{obj.description}</p> 
      </li>
    ) )
  }
  </ul>
  )
}
export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Plant />
            <div className={utilStyles.grid}>
                <div className={utilStyles.card}>
                    <Image
                        priority
                        src="/products/pot_02.jpg"
                        className={utilStyles.cardImg}
                        height={144}
                        width={144}
                        alt=""
                    />
                    <div className={utilStyles.cardDetails}>
                        <h2>Ficus</h2>
                        <span>£30</span>
                    </div>
                </div>
               
                <div className={utilStyles.card}>
                    <Image
                        priority
                        src="/products/pot_03.jpg"
                        className={utilStyles.cardImg}
                        height={144}
                        width={144}
                        alt=""
                    />
                    <div className={utilStyles.cardDetails}>
                        <h2>Spider</h2>
                        <span>£80</span>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
