import { Router } from 'express';
import { getInfoPago } from '../../controllers/transacciones/info-pago.controller';

const routerInfoPago = Router();

routerInfoPago.get('/estudiantes', getInfoPago);

export default routerInfoPago;
