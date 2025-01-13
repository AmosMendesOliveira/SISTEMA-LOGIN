import express from 'express'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const prisma = new PrismaClient()
const router = express.Router()

const JWT_SECRET = process.env.JWT_SECRET

// Cadastro
router.post('/cadastro', async ( req, res) => {

    try{
    const user = req.body

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(user.password, salt)

       
    const userDB = await prisma.user.create({
        data:{
            email: user.email,
            name: user.name,
            password: hashPassword,


        }
    })

    res.status(201).json(userDB)

} catch (error){

    res.status(500).json({message: "Erro no servidor, tente novamente"})
}
})

//Login
router.post('/login', async (req, res) => {
   
   try {
    const userInfo = req.body

     //Busca usuario no banco de dados
    const user = await prisma.user.findUnique({
        where: {email: req.body.email},
    })
    
    // Verifica se o usuario existe
    if (!user) {
        return   res.status(401).json({message: 'Usuario não encontrato ou não cadastrado'})
    }

     // Verifica a senha do usuario
    const isMatch = await bcrypt.compare(userInfo.password, user.password)

    if (!isMatch) {
        return res.status(400).json({message: 'Senha invalida'})
    }

     // Gerar token JWT
     const token = jwt.sign ({ id: user.id }, JWT_SECRET, { expiresIn: '7d' })

    res.status(200).json(token)
   } catch (error) {

    // Retorno, quando o erro no sevidor
    res.status(500).json({ message: 'Erro no servidor ao retornar o login, tente novamente'})
   }
    

})

export default router

//