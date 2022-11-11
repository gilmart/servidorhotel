import { request } from "express"
import {ServicioReserva} from "../services/ServicioReserva.js"
import { ServicioHabitacion } from "../services/ServicioHabitacion.js"
import { modeloHabitacion } from "../Models/modeloHabitacion.js"
export class ControladorReserva{

    constructor(){}
    async buscarReservas(request, response){
     // let buscar= request.body
      let objetoServicioReservas = new ServicioReserva()
        try {
          response.status(200).json({
            "mensaje":"exito en la consulta",
            "datos": await objetoServicioReservas.buscarReservas(),
            "estado":true  
          })  
        } catch (error) {
            response.status(400).json({
                "mensaje":"ERROR en la consulta " +error,
                "datos":null,
                "estado":false
              })
        }
       
        //response.send("estoy buscando reservas desde el controlador")
    }
 
    async buscarReservaPorID(request, response){
      let id =request.params.idReserva
      let objetoServicioReserva = new ServicioReserva()
        try {
            response.status(200).json({
              "mensaje":"exito en la consulta " +id,
              "datos": await objetoServicioReserva.buscarReservaPorId(id),
              "estado":true  
            })  
          } catch (error) {
              response.status(400).json({
                  "mensaje":"ERROR en la consulta " +error,
                  "datos":null,
                  "estado":false
                })
          }
    
    
        //response.send("estoy buscando una reserva por ID desde el controlador")

    }

    async registrarReserva(request, response){
/*
      let datosReserva= request.body
      let objetoServicioReserva = new ServicioReserva()
      let objetoServicioHabitacion = new ServicioHabitacion()
      let datos = datosReserva.idHabitacion

      try {
        let objetoHabitacion= await objetoServicioHabitacion.buscarHabitacionPorId(datos)

        console.log(objetoHabitacion)
      }catch(error){

        response.status(400).json({
            "mensaje":"Error en la consulta"+error, 
            "datos":null
        })
    }
   // response.send("estoy agregando desde el controlador")
}
*/
      let datosReserva= request.body
      let objetoServicioReserva = new ServicioReserva()
      let objetoServicioHabitacion = new ServicioHabitacion()   

      let idHabitacion = datosReserva.idHabitacion
     
      let fechaEntrada =datosReserva.fechaEntrada
      let fechaSalida = datosReserva.fechaSalida   

      fechaSalida = new Date(fechaSalida)
      fechaEntrada = new Date(fechaEntrada)

      let numAdultos= datosReserva.numeroAdultos
      let numKids= datosReserva.numeroKids
      let totalPersonas= numAdultos+numKids

        //PLAN B

         try {
        let habitacion = await objetoServicioHabitacion.buscarHabitacionPorId(idHabitacion)
        
        let diasReserva= ((fechaSalida.getTime()-fechaEntrada.getTime())/1000/60/60)/24
        console.log("cantidad de día reservados: " +diasReserva)

        let numMaxPersonas=habitacion.numeroMaximoPersona
        console.log("numero de personas permitido es: " +numMaxPersonas)
        console.log("numero de personas es " +totalPersonas)

        let costoReservaHab= habitacion.valorNoche*diasReserva
        datosReserva.costoReserva=costoReservaHab
        console.log("costo de la reserva es: " +costoReservaHab)
        
          if (diasReserva>=1&& totalPersonas>=1 && totalPersonas<=numMaxPersonas) {
            
              
            response.status(200).json({

              "mensaje":"Exito en el registro", 
              "datos": datosReserva
          })
          }

          else{
            response.status(404).json ({
              "mensaje":"error " , 
              "datos": null
          })
          }   

      }
        
      catch (error) {
        response.status(400).json({
          "mensaje":"ERROR en la consulta " +error,
          "datos":null,
          "estado":false
        })
    
  }
  }
      
    


    async editarReserva(request, response){
      
      let id = request.params.idReserva
      let datosReserva = request.body

      let objetoServicioReserva=new ServicioReserva()
      try {
            await objetoServicioReserva.editarReserva(id,datosReserva)
            response.status(200).json({
              "mensaje":"exito en la edicion" + id , datosReserva,
              "datos":"aqui van los editando las reservas",
              "estado":true  
            })  
          } catch (error) {
              response.status(400).json({
                  "mensaje":"ERROR en la consulta " +error,
                  "datos":null,
                  "estado":false
                })
          }
        //response.send("estoy editando una reserva desde el controlador")

    }

    async eliminarReserva(request,response){
      let id= request.params.idReserva
      let datosReserva = request.body

      let objetoServicioReserva=new ServicioReserva()
      try{
        await objetoServicioReserva.eliminarReserva(id)
        response.status(200).json({
          "mensaje":"exito eliminando a " + id,

        })
      } catch (error) { 
       response.status(400).json({
        "mensaje":"ERROR en la consulta " +error,
        "datos":null,
        "estado":false
      })
}
    }


  }


  //https://www.geeksforgeeks.org/login-form-using-node-js-and-mongodb/