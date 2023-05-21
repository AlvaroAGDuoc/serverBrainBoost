import { Request, Response } from 'express';
import { InfoPago } from '../../models/transacciones/info-pago';

export const getInfoPago = async (req: Request, res: Response) => {
  try {
    const infoPago = await InfoPago.findAll();
    res.json(infoPago);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
