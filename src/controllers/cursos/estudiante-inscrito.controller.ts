import { Request, Response } from 'express';
import { EstudianteInscrito } from '../../models/cursos/estudiante-inscrito';

export const getEstudiantesInscritos = async (req: Request, res: Response) => {
  try {
    const estudiantes = await EstudianteInscrito.findAll();
    res.json(estudiantes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
