import { Router } from 'express';
import { getCursos } from '../../controllers/cursos/curso.controller';

const routerCursos = Router();

routerCursos.get('/cursos', getCursos);

export default routerCursos;
