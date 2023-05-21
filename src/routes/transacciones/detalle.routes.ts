import { Router } from 'express';
import { getDetalles } from '../../controllers/transacciones/detalle.controller';

const routerDetalle = Router();

routerDetalle.get('/detalle', getDetalles);

export default routerDetalle;
