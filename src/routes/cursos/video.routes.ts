import { Router } from 'express';
import { getVideos } from '../../controllers/cursos/video.controller';

const routerVideo = Router();

routerVideo.get('/videos', getVideos);

export default routerVideo;
