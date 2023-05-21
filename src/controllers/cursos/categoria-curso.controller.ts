import { Request, Response } from 'express';
import { CategoriaCurso } from '../../models/cursos/categoria-curso';

export const getCategoriasCurso = async (req: Request, res: Response) => {
  try {
    const categoriasCurso = await CategoriaCurso.findAll();
    res.json(categoriasCurso);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
