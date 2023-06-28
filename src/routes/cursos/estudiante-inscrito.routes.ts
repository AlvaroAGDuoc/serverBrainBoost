import { Router } from 'express';
import {
  getEstudiante,
  getEstudiantesInscritos,
} from '../../controllers/cursos/estudiante-inscrito.controller';

const routerEstudianteInscrito = Router();

routerEstudianteInscrito.get('/estudiante-inscrito', getEstudiantesInscritos);

routerEstudianteInscrito.get(
  '/es-estudiante/:usuarioId-:cursoId',
  getEstudiante
);

export default routerEstudianteInscrito;
