import { Router } from 'express';
import { getImagen } from '../controllers/imagen';

export const imagenesRouter = Router();

imagenesRouter.get('/uploads/:imagen', getImagen);
