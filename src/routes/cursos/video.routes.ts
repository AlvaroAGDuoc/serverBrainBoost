import { Router } from 'express';
import {
  getVideos,
  postVideo,
} from '../../controllers/cursos/video.controller';
import upload from '../../libs/multer';

const routerVideo = Router();

routerVideo.get('/videos', getVideos);
routerVideo.post('/video/:id', upload.single('video'), postVideo);

export default routerVideo;
