import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/layout'


export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
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
