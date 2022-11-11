import { ServicioHabitacion } from "../services/ServicioHabitacion.js"

export class ControladorHabitacion{
    constructor(){}

   async buscarHabitaciones(request, response){

        let objetoServicioHabitaciones = new ServicioHabitacion()

       // let buscarHabitaciones = request.body
        try{
            response.status(200).json({
                "mensaje":"exito en la consulta",
                "datos": await objetoServicioHabitaciones.buscarHabitaciones()
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"ERROR en la consulta " +error,
                "datos":null,
                "estado":false
            })
        }
     //  response.send("estoy buscando habitaciones desde el controlador")

     }

    async buscarHabitacionPorID(request, response){
        let id =request.params.idHabitacion // recibo id de la peticion
        let objetoServicioHabitacion=new ServicioHabitacion()

        try{
            response.status(200).json({
                "mensaje":"exito en la consulta " +id,
                "datos": await objetoServicioHabitacion.buscarHabitacionPorId(id),
                "estado":true
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"ERROR en la consulta " +error,
                "datos":null,
                "estado":false
            })
        }
    // response.send("estoy buscando una habitacion por ID desde el controlador")

     }

     async registrarHabitacion(request, response){
            
        let datosHabitacion= request.body
        let objetoServicioHabitacion=new ServicioHabitacion()
      //  let habitacion = buscarHabitacionPorId(id)

        try{
            console.log(datosHabitacion.numeroMaximoPersona)
        //    console.log(habitacion)
            if(datosHabitacion.numeroMaximoPersona<8){

                await objetoServicioHabitacion.agregarHabitacionEnBD(datosHabitacion)

                response.status(200).json({
                    "mensaje":"exito registrando la habitacion " +datosHabitacion.numeroMaximoPersona ,
                    "datos":null,
                })
            }else{
                response.status(400).json({
                    "mensaje":"Numero de personas excedido - " +datosHabitacion.numeroMaximoPersona ,
                    "datos":null,
                })
            }

      
        
        }catch(error){
            response.status(400).json({
                "mensaje":"ERROR en la consulta " +error,
                "datos":null,
                "estado":false
            })
        }
        //response.send("estoy agregando una habitacion desde el controlador")

     }

     async editarHabitacion(request, response){

        let id = request.params.idHabitacion
        let datosHabitacion = request.body

        let objetoServicioHabitacion=new ServicioHabitacion()

        try{
            await objetoServicioHabitacion.editarHabitacion(id,datosHabitacion) 
            
            response.status(200).json({
                "mensaje":"exito en editando la habitacion" +id,
                "datos": null,
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"ERROR en la consulta " +error,
                "datos":null,
                "estado":false
            })
        }
        //response.send("estoy agregando una habitacion desde el controlador")

     }

    async eliminarHabitacion(request, response){
        let id = request.params.idHabitacion
        let datosHabitacion = request.body

        let objetoServicioHabitacion=new ServicioHabitacion()

        try{
            await objetoServicioHabitacion.eliminarHabitacion(id)

            response.status(200).json({
                "mensaje":"exito en eliminando la habitacion" +id,
                "datos": null,
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"ERROR en la consulta " +error,
                "datos":null,
                "estado":false
            })
        }
    }

}

