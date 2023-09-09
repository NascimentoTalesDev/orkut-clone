// pages/rota-privada.js (Rota privada)

import authMiddleware from "./api/auth";

export async function getServerSideProps(context) {
  await authMiddleware (context.req, context.res);

  // Se o middleware não gerar um erro, o usuário está autenticado
  return {
    props: {}, // Você pode adicionar props personalizados aqui, se necessário
  };
}

export default function Profile() {
  return(
    <div>Profile</div>
  )
}


