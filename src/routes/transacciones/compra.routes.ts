import { Router } from 'express';
import { getCompras } from '../../controllers/transacciones/compra.controller';

const routerCompra = Router();

routerCompra.get('/compras', getCompras);

export default routerCompra;
