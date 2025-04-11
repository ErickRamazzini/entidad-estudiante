import{AppDataSource} from "../config/db";
import { Carrera } from "../entities/Carrera.entity";


// crear el repositorio
const carreraRepository = AppDataSource.getRepository(Carrera);


// c = create
// ler todas las carreras 
export const srvGetCarreras = async ()=> {
//
const carreras =  await carreraRepository.find({
order: { nombreCarrera: 'ASC'}
});

return carreras;
}

// crear una nueva carrera

export const srvCreateCarrera = async(PNombreCarrera: string)=>{
 const nuevaCarrera = new Carrera();

 nuevaCarrera.nombreCarrera = PNombreCarrera;
 return await carreraRepository.save(nuevaCarrera);


}

// Obtener un carrera

export const srvGetCarreraByID = async(pIdCarrera: number) =>{


    const carrera = await carreraRepository.findOne({

        where: {idCarrera: pIdCarrera}
    })

    return carrera;

}

// actualizar carrera

export const srvUpdateCarrera = async(pIdCarrera: number, pNombreCarrera: string) =>{

// Buscar la carrera

const carrera = await carreraRepository.findOne({

    where: {idCarrera: pIdCarrera}
});

// validacion
if (!carrera)return null;
carrera.nombreCarrera = pNombreCarrera;
return  await carreraRepository.save(carrera);

}

//eliminar carrera
export const srvDeleteCarrera = async (pIdCarrera: number)=>{

    // buscar la carrera
     const carrera = await carreraRepository.findOne({
where: {idCarrera: pIdCarrera}

     });

     // validacion
if (!carrera)return null;
 return await carreraRepository.remove(carrera);
}

