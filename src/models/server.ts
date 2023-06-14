import express from 'express';
import cors from 'cors';
import sequelize from '../db/connection';
import bodyParser from 'body-parser';
import { PORT } from '../config';
import routerUsuario from '../routes/usuarios/usuario.routes';
import routerEstudiante from '../routes/usuarios/estudiante.routes';
import routerInstructor from '../routes/usuarios/instructor.routes';
import routerCompra from '../routes/transacciones/compra.routes';
import routerDetalle from '../routes/transacciones/detalle.routes';
import routerInfoPago from '../routes/transacciones/info-pago.routes';
import routerVideo from '../routes/cursos/video.routes';
import routerValoracion from '../routes/cursos/valoracion.routes';
import routerValoracionCurso from '../routes/cursos/valoracion-curso.routes';
import routerEstudianteInscrito from '../routes/cursos/estudiante-inscrito.routes';
import routerCursos from '../routes/cursos/curso.routes';
import routerCategoria from '../routes/cursos/categoria.routes';
import routerCategoriaCurso from '../routes/cursos/categoria-curso.routes';
import { imagenesRouter } from '../routes/imagenes.routes';

class Server {
  private app: express.Application;
  private port: any;

  constructor() {
    this.app = express();
    this.port = PORT;
    this.listen();
    this.middlewares();
    this.routes();
    this.dbConnect();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('App en el puerto ' + this.port);
    });
  }

  routes() {
    this.app.use('/imagen', imagenesRouter);
    this.app.use('/api', routerUsuario);
    this.app.use('/api', routerEstudiante);
    this.app.use('/api', routerInstructor);
    this.app.use('/api', routerCompra);
    this.app.use('/api', routerDetalle);
    this.app.use('/api', routerInfoPago);
    this.app.use('/api', routerVideo);
    this.app.use('/api', routerValoracion);
    this.app.use('/api', routerValoracionCurso);
    this.app.use('/api', routerEstudianteInscrito);
    this.app.use('/api', routerCursos);
    this.app.use('/api', routerCategoria);
    this.app.use('/api', routerCategoriaCurso);
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  async dbConnect() {
    try {
      await sequelize.sync({ force: false });
    } catch (err) {
      console.log('Unable to connect to the database: ', err);
    }
  }
}

export default Server;
