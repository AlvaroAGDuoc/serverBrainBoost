import { Router } from 'express';
import { getEstudiantes } from '../../controllers/usuarios/estudiante.controller';

const routerEstudiante = Router();

routerEstudiante.get('/estudiantes', getEstudiantes);

export default routerEstudiante;
