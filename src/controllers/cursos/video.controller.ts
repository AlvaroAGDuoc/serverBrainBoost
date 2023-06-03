import { Request, Response } from 'express';
import { Video } from '../../models/cursos/video';

export const getVideos = async (req: Request, res: Response) => {
  try {
    const videos = await Video.findAll();
    res.json(videos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

export const postVideo = async (req: Request, res: Response) => {
  const { titulo, descripcion } = req.body;

  const cursoId = req.params.id;
  const video = req.file?.path;
  try {
    await Video.create({
      titulo,
      descripcion,
      video,
      cursoId,
    });
    res.json({
      msg: 'El video fue creado exitosamente',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
