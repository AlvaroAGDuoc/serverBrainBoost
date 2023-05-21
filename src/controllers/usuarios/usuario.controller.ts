import { Request, Response } from 'express';
import { Usuario } from '../../models/usuarios/usuario';

export const getUsuarios = async (req: Request, res: Response) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
