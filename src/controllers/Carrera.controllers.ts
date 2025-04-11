import { Request,Response } from "express";
import { srvCreateCarrera, srvDeleteCarrera, srvGetCarreraByID, srvGetCarreras } 

from "../services/carrera.services";

// obtener todas las carreras
export const getCarreras = async (req: Request, res:Response)=>{

    try {
       
        const Carreras = await srvGetCarreras();

        res.status(200).json(Carreras)

    } catch (error) {
        console.log("error al obtener las carreras")
        
    }
}

// obtener una carrera por id
export const getCarrera = async (req:Request, res:Response)=>{

    try {
    const {id}= req.params;
    const carrera = await srvGetCarreraByID(+id);

    if(!carrera) return  res.status(404).json({message: 'no se encontro la carrera con id' + id});

    res.status(200).json(carrera);

} catch (error) {
    console.log('error al obtener la carrera'+error)
    
}

}


// crear una  carrera
export const craeteCarrera = async (req:Request, res:Response)=>{

    try {
        const {nombreCarrera}= req.body;
        const carrera = await srvCreateCarrera(nombreCarrera);


        res.status(201).json(carrera)


    } catch (error) {
        console.log('error al crear la carrera'+error)
    }


}


// ACTUALIZAR UNA CARRERA
export const updateCarrera = async (req: Request, res: Response) => {

    const { id } = req.params; // const datos = req.params; // const id = datosid;
    const { nombreCarrera } = req.body;

    try {
        const carrera = await srvGetCarreraByID(+id);

        if(!carrera) return res.status(404).json({message: 'No se encontró la carrera con ID ' + id});

        const carreraUpdate = await srvCreateCarrera(nombreCarrera);

        res.status(200).json(carreraUpdate)
    }
    catch (error) {
        console.log('Error al catualizar la carrera ' + error)
    }
}


// elimminar carrera

export const deleteCarrera = async (req: Request, res:Response)=>{

const {id} = req.params; // const datos = re.parans;// const id = datos.id;
const {nombreCarrera}= req.body;

try {

    const carrera = await srvGetCarreraByID(+id);

    if(!carrera) return res.status(400).json({message:"no se encontro la carrera por ID "+id});

    await srvDeleteCarrera(+id);
    res.status(200).json({message:'carrera eliminda'})
    
} catch (error) {
    console.log('error al eliminra la carrera'+error)
}


}



//import { Request,Response } from "express";import { Request from 'express';
