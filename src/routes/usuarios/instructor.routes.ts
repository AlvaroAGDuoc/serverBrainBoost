import { Router } from 'express';
import { getInstructores } from '../../controllers/usuarios/instructor.controller';

const routerInstructor = Router();

routerInstructor.get('/instructores', getInstructores);

export default routerInstructor;
