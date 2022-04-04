import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const body = req.body

    console.log('body: ', body)

    if (!body.username || !body.password) {
        return res.status(400).json({ data: 'Username or Password not found' })
    }

    res.status(200).json({ 
        signIn: true,
        data: `${body.username} ${body.password}` }
    )
}
