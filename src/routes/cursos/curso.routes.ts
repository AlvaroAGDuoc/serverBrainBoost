import { Router } from 'express';
import {
  getCursos,
  nuevoCurso,
} from '../../controllers/cursos/curso.controller';
import upload from '../../libs/multer';

const routerCursos = Router();

routerCursos.get('/cursos', getCursos);
routerCursos.post('/curso', upload.single('foto'), nuevoCurso);

export default routerCursos;
