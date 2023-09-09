// pages/api/auth.js (Exemplo de middleware para autenticação)

import jwt from 'jsonwebtoken';

export default async function authMiddleware(req, res, next) {
  const token = req.localStorage; // Você pode configurar cookies ou usar outro método para enviar o token

  console.log(token);
  //if (!token) {
  //  return res.status(401).json({ message: 'Token não fornecido' });
  //}
//
  //try {
  //  const decoded = jwt.verify(token, 'seu_segredo_secreto');
//
  //  // Você pode adicionar o objeto 'decoded' aos 'props' para acessá-lo no cliente
  //  req.props = { user: decoded };
//
  //  return next();
  //} catch (error) {
    //return res.status(403).json({ message: 'Token inválido' });
  //}
}
