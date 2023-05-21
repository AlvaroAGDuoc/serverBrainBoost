import { Request, Response } from 'express';
import { ValoracionCurso } from '../../models/cursos/valoracion-curso';

export const getValoracionCursos = async (req: Request, res: Response) => {
  try {
    const valoracionCursos = await ValoracionCurso.findAll();
    res.json(valoracionCursos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
