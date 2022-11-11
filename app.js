import * as dotenv from 'dotenv' 
dotenv.config()

import { ServidorAPI } from './API/ServidorAPI.js'

let servidorHoteles=new ServidorAPI() //INSTANCIA DE UNA CLASE (OBJETO)
servidorHoteles.despertarServidor()


    

