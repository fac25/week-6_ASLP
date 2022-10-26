import routeHandler from '../api/paths'

export async function getStaticPaths() {
    const plants = await routeHandler()

    const paths = plants.map((plant) => ({
        params: { name: String(plant.name) },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    return {
        props: {},
        revalidate: 10,
    }
}

export default function Post() {
    return <h1>Hello!</h1>
}
