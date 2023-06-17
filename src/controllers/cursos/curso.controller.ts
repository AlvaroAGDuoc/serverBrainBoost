import { Request, Response } from 'express';
import { Curso } from '../../models/cursos/curso';
import { CategoriaCurso } from '../../models/cursos/categoria-curso';
import { Video } from '../../models/cursos/video';
import { Instructor } from '../../models/usuarios/instructor';
import { Usuario } from '../../models/usuarios/usuario';
import { Categoria } from '../../models/cursos/categoria';
import { Valoracion } from '../../models/cursos/valoracion';

export const getCursos = async (req: Request, res: Response) => {
  const { estado } = req.params;
  try {
    const cursos = await Curso.findAll({
      where: { estado: estado },
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

export const aprobarCurso = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    await Curso.update({ estado: 1 }, { where: { id: id } });
    res.json('Curso aprobado');
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

export const getCursosCategoria = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const cursos = await Curso.findAll({
      where: { estado: 1 },
      include: [
        {
          model: Categoria,
          where: { id: id },
          through: {
            attributes: ['id'],
          },
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

export const getCurso = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const curso = await Curso.findOne({
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

    const valoraciones = await Valoracion.findAll({
      include: [
        {
          model: Usuario,
        },
        {
          model: Curso,
          attributes: ['id'],
          where: { id: id },
        },
      ],
    });
    res.json({ curso, valoraciones });
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
      categoriumId: categoriaId,
    });
    res.json({
      msg: `Curso ${nombre}, creado exitosamente`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
