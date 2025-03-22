import 'reflect-metadata'
import { DataSource } from 'typeorm'
import dotenv from 'dotenv'

dotenv.config ();

export const ApDataSource = new DataSource({
type: 'postgres',
host: process.env.DB_HOST,
port: Number(process.env.DB_HOST),
username: process.env.DB_USERNAME,
password: process.env.DB_PASSWORD,
database: process.env.DB_DATABASE,
synchronize:true,
logging: false,
entities:[
"src/entity/**/*.ts"

],

/*
esto es cuando no se esta trabajando local
ssl: {
    rejectUnauthorized:false
}*/

});

export const connecDB = async () => {
try{
await ApDataSource.initialize();
console.log ("Conectado a la base de datos");
}catch(error){

    console.log("Error al conectar a la base de datos");
}


}



