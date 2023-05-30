import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs-extra';

export const getImagen = async (req: Request, res: Response) => {
  const imagen = req.params.imagen;
  const pathImagen = path.resolve(__dirname, `../../uploads/${imagen}`);
  if (await fs.existsSync(pathImagen)) {
    res.sendFile(pathImagen);
  } else {
    const pathNoImagen = path.resolve(__dirname, '../../uploads/no-imagen.jpg');
    res.sendFile(pathNoImagen);
  }
};
