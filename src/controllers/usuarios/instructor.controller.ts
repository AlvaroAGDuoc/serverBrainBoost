import { Request, Response } from 'express';
import { Instructor } from '../../models/usuarios/instructor';

export const getInstructores = async (req: Request, res: Response) => {
  try {
    const instructores = await Instructor.findAll();
    res.json(instructores);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
