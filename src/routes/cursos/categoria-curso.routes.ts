import { Router } from 'express';
import { getCategoriasCurso } from '../../controllers/cursos/categoria-curso.controller';

const routerCategoriaCurso = Router();

routerCategoriaCurso.get('/categorias-curso', getCategoriasCurso);

export default routerCategoriaCurso;
