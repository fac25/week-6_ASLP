const { PrismaClient } = require ('@prisma/client')

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const plants = await prisma.plant.findMany()

  res.status(200).json(plants)
  
}