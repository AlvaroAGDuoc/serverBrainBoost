import { Router } from 'express';
import { getValoracion } from '../../controllers/cursos/valoracion.controller';

const routerValoracion = Router();

routerValoracion.get('/valoraciones', getValoracion);

export default routerValoracion;
