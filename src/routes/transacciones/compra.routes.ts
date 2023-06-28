import { Router } from 'express';
import {
  compraCursos,
  getCompras,
} from '../../controllers/transacciones/compra.controller';

const routerCompra = Router();

routerCompra.get('/compras', getCompras);
routerCompra.post('/comprar', compraCursos);

export default routerCompra;
