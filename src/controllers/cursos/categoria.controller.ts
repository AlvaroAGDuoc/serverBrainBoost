import { Request, Response } from 'express';
import { Categoria } from '../../models/cursos/categoria';

export const getCategorias = async (req: Request, res: Response) => {
  try {
    const categorias = await Categoria.findAll();
    res.json(categorias);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
