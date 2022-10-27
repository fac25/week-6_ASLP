import prisma from '../api/paths'
import { makeSerializable } from '../../lib/utils'

const Plant = (props) => {
    let plantName = props.name
    return <h1>{plantName}</h1>
}
export const getServerSideProps = async (context) => {
    const plant = await prisma.plant.findUnique({
        where: { name: String(context.params.name) },
    })
    console.log(plant)
    return { props: { ...makeSerializable(plant) } }
}

export default Plant

// export async function getStaticPaths() {
//     const plants = await routeHandler()

//     const paths = plants.map((plant) => ({
//         params: { name: String(plant.name) },
//     }))

//     return {
//         paths,
//         fallback: false,
//     }
// }

// export async function getStaticProps({ params }) {
//     return {
//         props: {},
//         revalidate: 10,
//     }
// }

// export default function Post() {
//     return <h1>Hello!</h1>
// }
