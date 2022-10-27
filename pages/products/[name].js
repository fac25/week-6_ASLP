// import prisma from '../../lib/prisma.js'
// import { makeSerializable } from '../../lib/utils'

// export const getServerSideProps = async (context) => {
//     const plant = await prisma.plant.findUnique({
//         where: { name: String(context.params.name) },
//     })
//     console.log(plant)
//     return { props: { ...makeSerializable(plant) } }
// }

// export all the Paths that we have

export async function getStaticPaths() {
    const res = await fetch('http://localhost:3000/api/plants')
    const plants = await res.json()

    const path = plants.map((plant) => ({
        params: { name: String(plant.name) },
    }))

    return {
        paths: path,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const res = await fetch('http://localhost:3000/api/plants/')

    const plants = await res.json()
    const filterplants = plants.filter(
        (plant) => plant.name.toString() === params.name
    )

    return {
        props: filterplants[0],
        revalidate: 10,
    }
}
export default function Plant(props) {
    //
    return <h1>{props.name}</h1>
}
