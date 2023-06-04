import { Router } from 'express';
import {
  getUsuario,
  getUsuarios,
  loginUsuario,
  modificarUsuario,
  nuevoUsuario,
} from '../../controllers/usuarios/usuario.controller';
import upload from '../../libs/multer';

const routerUsuario = Router();

routerUsuario.get('/usuarios', getUsuarios);
routerUsuario.get('/usuario/:id', getUsuario);
routerUsuario.post('/login', loginUsuario);
routerUsuario.patch('/modificar',upload.single('fotografia'), modificarUsuario);
routerUsuario.post('/registro', upload.single('fotografia'), nuevoUsuario);

export default routerUsuario;
