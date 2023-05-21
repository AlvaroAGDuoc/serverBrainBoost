import { Request, Response } from 'express';
import { Valoracion } from '../../models/cursos/valoracion';

export const getValoracion = async (req: Request, res: Response) => {
  try {
    const valoraciones = await Valoracion.findAll();
    res.json(valoraciones);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
