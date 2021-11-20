import { NextApiRequest, NextApiResponse } from "next"


export default (request: NextApiRequest, response: NextApiResponse) =>{
    console.log(request.query)
    const id = request.query.id;
    const users = [
        { id: 1, name: 'iago'},
        { id: 2, name: 'natalia'},
        { id: 3, name: 'caramelo'}
    ]

    const user = (users.filter(user =>{
        if(user.id == parseInt(id.toString())){
            return user;

        }
    }))
    return response.json(user);
}