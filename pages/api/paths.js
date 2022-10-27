import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default prisma

// export default async function routeHandler(req, res) {
//     const plants = await prisma.plant.findMany()
//     console.log(plants)
//     return plants
// }

// export function getPlantData() {
//     const plants = prisma.plant.findMany()

//     return plants.map((plant) => {
//         return {
//             params: {
//                 name: plant.name,
//             },
//         }
//     })
// }
