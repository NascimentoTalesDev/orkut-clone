import useAuth from '@/hooks/useAuth';

export default function welcome(){

  const { logout, authenticated } = useAuth()
  
  console.log(authenticated);
  function sair() {
    logout()
  }
  return (
    <>
      <div>welcome</div>
      <button onClick={sair}>Sair</button>
    </>
  )
}
