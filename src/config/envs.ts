import 'dotenv/config';

import * as joi from 'joi';
// TODO: validar mediante un esquema
interface EnvVars {
    PORT: number;
}

const envsSchema = joi.object({
    PORT: joi.number().required()
})
.unknown(true);

const {error, value} = envsSchema.validate(process.env);

// console.log({error});
// console.log(envVar);

if(error){
    throw new Error (`Config validation error: ${error.message}`)
};

const envVars: EnvVars = value;

// esquema de validacion
export const envs = {
    port: envVars.PORT,
}