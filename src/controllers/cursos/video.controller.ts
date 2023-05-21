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
