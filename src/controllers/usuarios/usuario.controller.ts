import { Request, Response } from 'express';
import { Usuario } from '../../models/usuarios/usuario';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Estudiante } from '../../models/usuarios/estudiante';
import { Instructor } from '../../models/usuarios/instructor';

export const getUsuarios = async (req: Request, res: Response) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

export const getUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findOne({
      where: { id },
      include: [
        {
          model: Instructor,
        },
      ],
    });
    res.json(usuario);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

export const loginUsuario = async (req: Request, res: Response) => {
  const { email, clave } = req.body;

  //Validamos si el usuario existe
  const usuario: any = await Usuario.findOne({
    where: { email: email },
  });
  if (!usuario) {
    return res.status(400).json({
      msg: 'Email o clave incorrectos',
    });
  }
  //Validamos password

  const claveValida = await bcrypt.compare(clave, usuario.clave);
  if (!claveValida) {
    return res.status(400).json({
      msg: 'Email o clave incorrectos',
    });
  }

  const usuarioEnviar: any = await Usuario.findOne({
    attributes: ['id', 'nombre', 'apellido', 'email'],
    where: { email: email },
  });

  //Generamos token
  const token = jwt.sign(
    {
      usuario: usuarioEnviar,
    },
    process.env.SECRET_KEY || 'admin123'
  );

  res.json(token);
};

export const nuevoUsuario = async (req: Request, res: Response) => {
  const { nombre, apellido, email, clave, telefono, pais, perfil, biografia } =
    req.body;

  const fotografia = req.file?.path;

  let id: number;

  const hashedPassword = await bcrypt.hash(clave, 10);

  //Validar si el usuario ya existe
  const usuario = await Usuario.findOne({
    where: { email: email },
  });

  if (usuario) {
    return res.status(400).json({
      msg: `Ya existe un usuario con el correo ${email}`,
    });
  }

  try {
    await Usuario.create({
      nombre,
      apellido,
      email,
      clave: hashedPassword,
      telefono,
      fotografia,
      pais,
    });
    id = await Usuario.max('id');

    if (perfil === 'estudiante') {
      await Estudiante.create({
        usuarioId: id,
      });
    }

    if (perfil === 'instructor') {
      await Instructor.create({
        biografia,
        calificacion: 0,
        usuarioId: id,
      });
    }
  } catch (error) {
    res.status(400).json({
      msg: 'Ocurrio un error ',
      error,
    });
  }
  res.json({
    msg: `Usuario ${nombre} ${apellido} creado exitosamente`,
  });
};

export const modificarUsuario = async (req: Request, res: Response) => {
  const { id, email, pais, telefono } = req.body;

  let fotografia = req.file?.path;

  console.log(id, email, pais, fotografia, telefono);
  try {
    await Usuario.update(
      {
        email,
        telefono,
        pais,
        fotografia,
      },
      {
        where: { id },
      }
    );
    res.json({ msg: 'usuario actualizado con exito' });
  } catch (error) {
    res.status(400).json({
      msg: 'Ocurrio un error ',
      error,
    });
  }
};
