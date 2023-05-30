import { Router } from 'express';
import {
  getUsuarios,
  nuevoUsuario,
} from '../../controllers/usuarios/usuario.controller';
import upload from '../../libs/multer';

const routerUsuario = Router();

routerUsuario.get('/usuarios', getUsuarios);
routerUsuario.post('/login', getUsuarios);
routerUsuario.post('/registro', upload.single('fotografia'), nuevoUsuario);

export default routerUsuario;
