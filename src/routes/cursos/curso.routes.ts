import { Router } from 'express';
import {
  aprobarCurso,
  cambiarEstadoCurso,
  getCurso,
  getCursos,
  getCursosCategoria,
  getCursosInstructor,
  getMisCursosInstructor,
  nuevoCurso,
} from '../../controllers/cursos/curso.controller';
import upload from '../../libs/multer';

const routerCursos = Router();

routerCursos.get('/cursos/:estado', getCursos);
routerCursos.get('/cursos/instructor/:id', getCursosInstructor);
routerCursos.get('/cursos/cat/:id', getCursosCategoria);
routerCursos.get('/curso/:id', getCurso);
routerCursos.get('/curso/mis-cursos/:id', getMisCursosInstructor);
routerCursos.post('/curso', upload.single('foto'), nuevoCurso);
routerCursos.post('/curso-aprobar', aprobarCurso);
routerCursos.post('/curso-cambiar-estado', cambiarEstadoCurso);



export default routerCursos;
