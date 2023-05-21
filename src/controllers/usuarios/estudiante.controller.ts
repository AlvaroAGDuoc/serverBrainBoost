import { Request, Response } from 'express';
import { Estudiante } from '../../models/usuarios/estudiante';

export const getEstudiantes = async (req: Request, res: Response) => {
  try {
    const estudiantes = await Estudiante.findAll();
    res.json(estudiantes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
