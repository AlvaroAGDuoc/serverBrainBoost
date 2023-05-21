import { Request, Response } from 'express';
import { Compra } from '../../models/transacciones/compra';

export const getCompras = async (req: Request, res: Response) => {
  try {
    const compras = await Compra.findAll();
    res.json(compras);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
