import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ message: "Hello world" })
}