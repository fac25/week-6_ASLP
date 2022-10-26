import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/layout'
import Products from '../components/products'


export default function Home({ products }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <div className={utilStyles.grid}>
                <Products />
            </div>
        </Layout>
    )
}
