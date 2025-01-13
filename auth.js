import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET

const auth = (req, res, next) => {

    const token = req.headers.authorization
    
    if(!token){
        return res.status(401).json({ message: 'Acesso negado'})
    }

    next()
}



export default auth