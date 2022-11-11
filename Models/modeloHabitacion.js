import mongoose from 'mongoose';

//ESQUEMA DE DATOS ESTANDARD DONDE APARECEN SOLO LOS DATOS CON LOS QUE EL API VA A TRABAJAR
const Schema = mongoose.Schema; 

const EsquemaHabitacion = new Schema({
    
    nombre:{
        required:true,
        type:String,
    },
    valorNoche:{
        required:true,
        type:Number
    },
    descripcion:{
        required:true,
        type:String
    },
    fotografias:{
        required:true,
        type:[String]
    },
    numeroMaximoPersona:{
        required:true,
        type:Number
    }

  });

  export const modeloHabitacion=mongoose.model('habitaciones', EsquemaHabitacion)

