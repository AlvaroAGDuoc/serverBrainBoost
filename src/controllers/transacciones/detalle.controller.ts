import { Request, Response } from 'express';
import { Detalle } from '../../models/transacciones/detalle';

export const getDetalles = async (req: Request, res: Response) => {
  try {
    const detalles = await Detalle.findAll();
    res.json(detalles);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
