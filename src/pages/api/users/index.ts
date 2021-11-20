import { NextApiRequest, NextApiResponse } from "next"


export default (request: NextApiRequest, response: NextApiResponse) =>{
    const users =[
        { id: 1, name: 'iago'},
        { id: 2, name: 'natalia'},
        { id: 3, name: 'caramelo'}
    ]

    return response.json(users);
}