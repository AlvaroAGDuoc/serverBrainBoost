import { Router } from 'express';
import {
  getInstructores,
  getPerfilInstructor,
} from '../../controllers/usuarios/instructor.controller';

const routerInstructor = Router();

routerInstructor.get('/instructores', getInstructores);
routerInstructor.get('/instructor/:id', getPerfilInstructor);

export default routerInstructor;
