import { Request, Response } from 'express';
import { Instructor } from '../../models/usuarios/instructor';
import { Curso } from '../../models/cursos/curso';
import { Usuario } from '../../models/usuarios/usuario';

export const getInstructores = async (req: Request, res: Response) => {
  try {
    const instructores = await Instructor.findAll();
    res.json(instructores);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

export const getPerfilInstructor = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const instructor = await Instructor.findOne({
      where: { id: id },
      include: [
        {
          model: Curso,
          where: { estado: 1 },
        },
        {
          model: Usuario,
        },
      ],
    });
    res.json(instructor);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
