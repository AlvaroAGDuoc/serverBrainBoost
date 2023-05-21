import { Request, Response } from 'express';
import { Curso } from '../../models/cursos/curso';

export const getCursos = async (req: Request, res: Response) => {
  try {
    const cursos = await Curso.findAll();
    res.json(cursos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
