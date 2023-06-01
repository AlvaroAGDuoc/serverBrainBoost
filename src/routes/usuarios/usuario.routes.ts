import { Router } from 'express';
import {
  getUsuarios,
  loginUsuario,
  nuevoUsuario,
} from '../../controllers/usuarios/usuario.controller';
import upload from '../../libs/multer';

const routerUsuario = Router();

routerUsuario.get('/usuarios', getUsuarios);
routerUsuario.post('/login', loginUsuario);
routerUsuario.post('/registro', upload.single('fotografia'), nuevoUsuario);

export default routerUsuario;
