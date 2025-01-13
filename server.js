import express from 'express'
import publicRoutes from './routes/publicas.js'
import privateRoutes from './routes/privada.js'
import cors from 'cors'

import auth from './middlewares/auth.js'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/', publicRoutes)
app.use('/', auth,  privateRoutes)
/*3 rotas

    Publicas
         Cadastrar e login
         
    Privadas
         Listar Usuarios
*/

app.listen(3000, () => console.log("Servidor está Rodando🚀"));

