import { Router } from 'express';
import { getUsuarios } from '../../controllers/usuarios/usuario.controller';

const routerUsuario = Router();

routerUsuario.get('/usuarios', getUsuarios);

export default routerUsuario;
