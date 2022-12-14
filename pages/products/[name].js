// export all the Paths that we have
import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import Product from '../../components/product'
import { nicePermalinks } from '../../lib/utils'

//import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// require('dotenv').config()
// console.log(dotenv)
// import useSWR from 'swr'
// const fetcher = (...args) => fetch(...args).then((res) => res.json())

export async function getStaticPaths() {
    //const plants = useSWR('/api/plants', fetcher)
    const res = await fetch('http://localhost:3000/api/plants')
    const plants = await res.json()

    const path = plants.map((plant) => ({
        params: { name: nicePermalinks(String(plant.name)) },
    }))

    return {
        paths: path,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    // const plants = useSWR('/api/plants', fetcher)
    //console.log({ params })
    const res = await fetch('http://localhost:3000/api/plants')
    const plants = await res.json()

    const filterplants = plants.filter(
        (plant) => nicePermalinks(String(plant.name)) === params.name
    )

    return {
        props: filterplants[0],
        revalidate: 10,
    }
}
export default function Plant({ name, description, image_link, price }) {
    //
    return (
        <Layout>
            <Head>
                <title>
                    {siteTitle} | {name}
                </title>
            </Head>

            <div className={utilStyles.grid}>
                <Product
                    name={name}
                    description={description}
                    image_link={image_link}
                    price={price}
                />
            </div>
        </Layout>
    )
}
// Alternatively use getServerSideProps
// import prisma from '../../lib/prisma.js'
// import { makeSerializable } from '../../lib/utils'

// export const getServerSideProps = async (context) => {
//     const plant = await prisma.plant.findUnique({
//         where: { name: String(context.params.name) },
//     })
//     console.log(plant)
//     return { props: { ...makeSerializable(plant) } }
// }
