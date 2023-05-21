import { Router } from 'express';
import { getValoracionCursos } from '../../controllers/cursos/valoracion-curso.controller';

const routerValoracionCurso = Router();

routerValoracionCurso.get('/valoraciones-curso', getValoracionCursos);

export default routerValoracionCurso;
