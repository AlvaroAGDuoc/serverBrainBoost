import { Router } from 'express';
import {
  getValoracion,
  postValoracion,
} from '../../controllers/cursos/valoracion.controller';

const routerValoracion = Router();

routerValoracion.get('/valoraciones', getValoracion);
routerValoracion.post('/valoracion', postValoracion);

export default routerValoracion;
