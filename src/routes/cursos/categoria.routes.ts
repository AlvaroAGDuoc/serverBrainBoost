import { Router } from 'express';
import { getCategorias } from '../../controllers/cursos/categoria.controller';

const routerCategoria = Router();

routerCategoria.get('/categorias', getCategorias);

export default routerCategoria;
