// Next.js API route support: https://nextjs.org/docs/api-routes/
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            const id = req.query.userId
            const user = await prisma.user.findUnique({
                where: {
                    id: Number(id)
                }
            })
            res.status(201).json(user)
        } else if (req.method === 'PUT') {
            const id = req.query.userId
            const { name, email, password } = req.body
            const updatedUser = await prisma.user.update({
                where: {
                    id: Number(id)
                }, data: {
                    name,
                    email,
                    password
                }
            })
            res.status(201).json(updatedUser)
        } else if (req.method === 'DELETE') {
            const id = req.query.userId
            const deletedUser = await prisma.user.delete({
                where: {
                    id: Number(id)
                }
            })
            res.status(200).json(deletedUser)
        }
        else {
            res.status(500).json({ message: "Error" })
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
