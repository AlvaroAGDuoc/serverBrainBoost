import { Request, Response } from 'express';
import { Compra } from '../../models/transacciones/compra';
import { EstudianteInscrito } from '../../models/cursos/estudiante-inscrito';
import { Detalle } from '../../models/transacciones/detalle';

export const getCompras = async (req: Request, res: Response) => {
  try {
    const compras = await Compra.findAll();
    res.json(compras);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

export const compraCursos = async (req: Request, res: Response) => {
  const { cursos, total, usuarioId } = req.body;

  try {
    await Compra.create({
      total,
      usuarioId,
    });

    let idCompra = await Compra.max('id');
    await Promise.all(
      cursos.map(async (curso: any) => {
        await Detalle.create({
          subtotal: curso.precio,
          cursoId: curso.id,
          compraId: idCompra,
        });
        await EstudianteInscrito.create({
          cursoId: curso.id,
          usuarioId,
        });
      })
    );

    res.json('Compra realizada con exito');
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
