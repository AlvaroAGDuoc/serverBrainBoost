import { Router } from 'express';
import {
  getCurso,
  getCursos,
  getCursosInstructor,
  nuevoCurso,
} from '../../controllers/cursos/curso.controller';
import upload from '../../libs/multer';

const routerCursos = Router();

routerCursos.get('/cursos', getCursos);
routerCursos.get('/cursos/:id', getCursosInstructor);
routerCursos.post('/curso', upload.single('foto'), nuevoCurso);
routerCursos.get('/curso/:id', getCurso);

export default routerCursos;
