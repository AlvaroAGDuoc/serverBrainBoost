import { Router } from 'express';
import {
  aprobarCurso,
  getCurso,
  getCursos,
  getCursosCategoria,
  getCursosInstructor,
  nuevoCurso,
} from '../../controllers/cursos/curso.controller';
import upload from '../../libs/multer';

const routerCursos = Router();

routerCursos.get('/cursos/:estado', getCursos);
routerCursos.get('/cursos/:id', getCursosInstructor);
routerCursos.get('/cursos/cat/:id', getCursosCategoria);
routerCursos.get('/curso/:id', getCurso);
routerCursos.post('/curso', upload.single('foto'), nuevoCurso);
routerCursos.post('/curso-aprobar', aprobarCurso);

export default routerCursos;
