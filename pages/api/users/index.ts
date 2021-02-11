// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const users = await prisma.user.findMany()
      res.status(201).json(users)
    } else if (req.method === 'POST') {
      const { name, email, password } = req.body
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password
        }
      })
      res.status(201).json(newUser)
    } else {
      res.status(500).json({ message: "Error" })
    }
  } catch (error) {
    res.status(500).json(error)
  }
}
