import { Router } from 'express';
import { getEstudiantesInscritos } from '../../controllers/cursos/estudiante-inscrito.controller';

const routerEstudianteInscrito = Router();

routerEstudianteInscrito.get('/estudiante-inscrito', getEstudiantesInscritos);

export default routerEstudianteInscrito;
