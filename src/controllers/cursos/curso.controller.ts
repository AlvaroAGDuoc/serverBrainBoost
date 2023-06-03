import { Request, Response } from 'express';
import { Curso } from '../../models/cursos/curso';
import { CategoriaCurso } from '../../models/cursos/categoria-curso';
import { Video } from '../../models/cursos/video';
import { Instructor } from '../../models/usuarios/instructor';
import { Usuario } from '../../models/usuarios/usuario';

export const getCursos = async (req: Request, res: Response) => {
  try {
    const cursos = await Curso.findAll({
      include: [
        {
          model: Video,
        },
        {
          model: Instructor,
          include: [
            {
              model: Usuario,
            },
          ],
        },
      ],
    });
    res.json(cursos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

export const getCursosInstructor = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const cursos = await Curso.findAll({
      include: [
        {
          model: Instructor,
          where: { id: id },
          include: [
            {
              model: Usuario,
            },
          ],
        },
      ],
    });
    res.json(cursos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

export const getCurso = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const cursos = await Curso.findOne({
      where: { id: id },
      include: [
        {
          model: Video,
        },
        {
          model: Instructor,

          include: [
            {
              model: Usuario,
            },
          ],
        },
      ],
    });
    res.json(cursos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

export const nuevoCurso = async (req: Request, res: Response) => {
  const { nombre, precio, descripcion, instructorId, categoriaId } = req.body;
  const foto = req.file?.path;
  const insp = Number(instructorId);
  console.log(insp);
  let id: number;

  try {
    await Curso.create({
      nombre,
      precio,
      descripcion,
      instructorId: insp,
      foto,
    });
    id = await Curso.max('id');
    await CategoriaCurso.create({
      cursoId: id,
      categoriaId,
    });
    res.json({
      msg: `Curso ${nombre}, creado exitosamente`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
