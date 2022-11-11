import mongoose from 'mongoose';

//idHabitacion:String
//fechaEntrada:Date
//fechaSalida: Date
//numeroadultos: Number
//numerokids:number
//costoreserva():number



const Schema = mongoose.Schema; 

const EsquemaReserva = new Schema({
    
    idHabitacion:{
        required:true,
        type:String,
    },
   
    
    fechaEntrada:{
        required:true,
        type:Date
    },
    fechaSalida:{
        required:true,
        type:Date
    },

    numeroAdultos:{
        required:true,
        type:Number
    },
    numeroKids:{
        required:true,
        type:Number
    },
    costoReserva:{
        required:true,
        type:Number
    },
 
  

  });

  export const modeloReserva=mongoose.model('Reservas', EsquemaReserva)