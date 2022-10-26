const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
 
const plants = [
  { id: 1, image_link:'/products/pot_01.jpg', name: 'orchid', price:10, description: 'a diverse and widespread group of flowering plants with blooms that are often colourful and fragrant.'},
  { id: 2, image_link:'/products/pot_02.jpg', name: 'sun flower', price:8, description: 'Sunflowers are bee magnets; each flower head produces a large volume of pollen and nectar that lures in bees and other pollinators'},
  { id: 3, image_link:'/products/pot_03.jpg', name: 'Croton', price:12, description: 'Native to India, Sri Lanka, Malaysia and the western Pacific islands, the croton enjoys hot, humid climates.'},
  { id: 4, image_link:'/products/pot_04.jpg', name: 'Aspidistra', price:15, description: 'Aspidistra are sometimes known as the Cast Iron Plant because they’re almost impossible to kill. They’re practically bomb-proof (we have not tested this). '},
  { id: 5, image_link:'/products/pot_05.jpg', name: 'Aspidistra2', price:15, description: 'Aspidistra are sometimes known as the Cast Iron Plant because they’re almost impossible to kill. They’re practically bomb-proof (we have not tested this). '},
]

async function main() {
    await prisma.$transaction(
    plants.map(({ id, image_link, name,price,description }) => {
        return prisma.plant.create({
          data: {
            id,
            image_link,
            name,
            price,
            description 
            // It's this easy to either `create` or `connect`
            // accounts when creating a `user`.
          },
        })
      }),
    )
  }
   
  main()
    .catch((e) => {
      console.error(e)
      process.exit(1)
    })
    .finally(async () => {
      await prisma.$disconnect()
    })