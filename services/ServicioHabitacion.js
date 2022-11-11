import { modeloHabitacion } from "../Models/modeloHabitacion.js";

export class ServicioHabitacion{
    //aqui programo metodos para cada una de las consultas
    //que quiero hacer en BD

   async buscarHabitaciones(){
        let habitaciones= await modeloHabitacion.find()
        return habitaciones
    }

    async buscarHabitacionPorId(id){
        let habitacion= await modeloHabitacion.findById(id)
        return habitacion
    }

    async agregarHabitacionEnBD(datos){
        let datosValidados= new modeloHabitacion(datos)
        return await datosValidados.save()
    }

    async editarHabitacion(id,datosHabitacion){
        return await modeloHabitacion.findByIdAndUpdate(id,datosHabitacion)
    }

    async eliminarHabitacion(id){
        return await modeloHabitacion.findByIdAndDelete(id)
    }

}