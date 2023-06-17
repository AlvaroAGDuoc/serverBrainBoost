import { Request, Response } from 'express';
import { Valoracion } from '../../models/cursos/valoracion';
import { ValoracionCurso } from '../../models/cursos/valoracion-curso';

export const getValoracion = async (req: Request, res: Response) => {
  try {
    const valoraciones = await Valoracion.findAll();
    res.json(valoraciones);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

export const postValoracion = async (req: Request, res: Response) => {
  const { cursoId, usuarioId, puntuacion, comentario } = req.body;
  try {
    await Valoracion.create({
      puntuacion,
      comentario,
      usuarioId,
    });

    let id = await Valoracion.max('id');

    await ValoracionCurso.create({
      cursoId,
      valoracionId: id,
    });
    res.json('Valoracion realizada con exito');
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
