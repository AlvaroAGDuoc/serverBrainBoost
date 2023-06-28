import { Request, Response } from 'express';
import { EstudianteInscrito } from '../../models/cursos/estudiante-inscrito';
import { Op } from 'sequelize';

export const getEstudiantesInscritos = async (req: Request, res: Response) => {
  try {
    const estudiantes = await EstudianteInscrito.findAll();
    res.json(estudiantes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

export const getEstudiante = async (req: Request, res: Response) => {
  const { usuarioId, cursoId } = req.params;

  let esEstudiante;

  try {
    const estudiante = await EstudianteInscrito.findOne({
      where: {
        [Op.and]: [{ usuarioId: usuarioId }, { cursoId: cursoId }],
      },
    });

    if (estudiante) {
      esEstudiante = true;
    } else {
      esEstudiante = false;
    }

    res.json({ tiene_curso: esEstudiante });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
