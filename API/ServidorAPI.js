import express from 'express'
import { rutasPersonalizadas } from '../Routes/rutas.js'
import { conectarConMongo } from '../Database/conexion.js'
import cors from 'cors'

export class ServidorAPI{

    constructor(){
        this.app = express()
        this.conectarConBD()
        this.activarBody()
        this.atenderPeticiones()
    }

    //METODOS DE LA CLASE ServidorAPI
    despertarServidor(){
        this.app.listen(process.env.PORT, function(){
            console.log("EXITO ENCENDIENDO SERVIDOR: "+process.env.PORT)
        })
    }

    atenderPeticiones(){
        this.app.use('/',rutasPersonalizadas)
    }

    conectarConBD(){
        conectarConMongo()
    }

    activarBody(){
        this.app.use(cors())
        this.app.use(express.json())
    }
}